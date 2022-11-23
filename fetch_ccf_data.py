# -*- encoding: utf-8 -*-
import requests
import re
from bs4 import BeautifulSoup
import json
import base64

URL = "https://ccf.atom.im/"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
}
resp = requests.get(URL, headers=HEADERS)
soup = BeautifulSoup(resp.text, "html.parser")
result = {}
# e = e.toLowerCase().replace(/&|&amp;/g, "and").replace(/Switzerland|basel|[-.,_—:;()，；（）《》<>\"\/\s]+/gi, "");
replacer = re.compile(r"Switzerland|basel|[-.,_—:;()，；：&（）《》<>\"\/\s]+", re.I)
helper_words_remover = re.compile(
    r"(conference|international|acm|ieee|conferenceon|the|on|of|and|or)", re.I
)
replacer_without_space = re.compile(
    r"Switzerland|basel|[-.,_—:;()，；：&（）《》<>\"\/]+", re.I
)


def extract_abbreviate(title):
    t = replacer_without_space.sub("", title).lower()
    t = helper_words_remover.sub("", t).strip()
    r = "".join([word[0:1] for word in re.split(r"[\s]+", t)])
    return r


for tr in soup.select(".item"):
    rank = tr.select("td")[2].get_text()
    name = tr.select("td")[1].get_text()
    abbr = extract_abbreviate(name)
    name = name.lower()
    name = replacer.sub("", name)
    result[name] = rank
    name = helper_words_remover.sub("", name)
    result[name] = rank
    if abbr in result:
        if result[abbr] > rank:
            result[abbr] = rank
    else:
        result[abbr] = rank

# compact encode
json_str = json.dumps(
    result,
    separators=(",", ":"),
)
with open("ccf.json", "w") as f:
    f.write(json_str)
