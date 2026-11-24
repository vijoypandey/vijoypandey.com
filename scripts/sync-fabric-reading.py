"""Refresh only the experimental homepage reading cache from public CC tag feeds."""
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from email.utils import parsedate_to_datetime

BASE = "https://vijoypandey.substack.com"
PATH = Path("src/data/fabric-reading.json")
data = json.loads(PATH.read_text())
used = set()

def tagged_feed(tag):
    url = BASE + "/t/" + tag + "/feed"
    req = urllib.request.Request(url, headers={"User-Agent": "VijoyWebsiteReadingSync/1.0"})
    with urllib.request.urlopen(req, timeout=20) as response:
        root = ET.fromstring(response.read())
    channel = root.find("channel")
    if channel is None:
        raise ValueError("Not RSS")
    # Require explicit tag identity in the feed metadata or item categories.
    channel_text = " ".join(channel.findtext(k, "") for k in ("title", "link", "description"))
    items = channel.findall("item")
    if not re.search(r"(?<![\w-])" + re.escape(tag) + r"(?![\w-])", channel_text, re.I):
        items = [i for i in items if tag.lower() in [c.text.strip().lower() for c in i.findall("category") if c.text]]
    if not items:
        raise ValueError("No verifiably tagged items")
    result = []
    for i in items:
        title, link = i.findtext("title"), i.findtext("link")
        if title and link and link.startswith(BASE + "/p/"):
            date = parsedate_to_datetime(i.findtext("pubDate")).timestamp()
            result.append((date, {"title": title.strip(), "url": link.split("?")[0]}))
    if not result:
        raise ValueError("No valid article URLs")
    return result

for chapter, cfg in data.items():
    candidates = []
    for tag in cfg["tags"]:
        try:
            candidates.extend(tagged_feed(tag))
        except Exception as exc:
            print(f"{chapter}/{tag}: retaining cached selections if no valid feed: {exc}", file=sys.stderr)
    if not candidates:
        used.update(a["url"] for a in cfg["articles"])
        continue
    chosen = []
    for article in cfg.get("pinned", []) + [a for _, a in sorted(candidates, key=lambda pair: pair[0], reverse=True)] + cfg["articles"]:
        if article["url"] not in used:
            chosen.append(article)
            used.add(article["url"])
        if len(chosen) == 2:
            break
    if chosen:
        cfg["articles"] = chosen
PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
