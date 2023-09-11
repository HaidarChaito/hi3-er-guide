import requests
from bs4 import BeautifulSoup
import re

url = "https://honkaiimpact3.fandom.com/wiki/Elysian_Realm/Signets"

response = requests.get(url)

if response.status_code == 200:
    page_content = response.content
else:
    print("Failed to fetch the webpage.")
    exit()

soup = BeautifulSoup(page_content, 'html.parser')

# find all the headers
incontent_player_div = soup.find_all('h2')

# Find all the Titles elements that come after the third header which is the start of General Signets
elements = incontent_player_div[2].find_all_next('h3')


def cleantext(text):
    return text.replace(' ', '_').replace(',', '').replace('.', '').replace(']', '').replace('[', '').replace(':', '').replace(')', '').replace('(', '').replace(':', '').replace('-', '').replace('&', '').replace('♪', '').replace('!', '').replace('\'', '').strip()


def cleanSignet(text):
    return text.split('NormalNormal')[0].split('EnhancedNormal')[0].split('CoreNexus')[0]


for text in elements:
    if (text.text == 'Explore properties'):
        break
    f = open('../../data/signets/tsx/' + cleantext(text.text) + '.tsx', "w+")
    signets = text.find_next('div')
    data = 'import { Signet } from "@/types/Signet";\n'
    data += "interface " + cleantext(text.text) + "_interface {\n"
    for index, signet in enumerate(signets):
        for j, signetInfo in enumerate(signet):
            if j == 0 or signet.text.strip() == 'Detailed Archive':
                continue
            if j == 1:
                # signet title
                data += cleantext(cleanSignet(signetInfo.text)
                                  ) + ": Signet," + '\n'
    data += "}\n"
    f.write(data)
    f.close()

for text in elements:
    if (text.text == 'Explore properties'):
        break
    f = open('../../data/signets/tsx/' + cleantext(text.text) + '.tsx', "a+")
    signets = text.find_next('div')
    data = "export const " + \
        cleantext(text.text) + ":" + cleantext(text.text) + "_interface = {\n"

    for index, signet in enumerate(signets):
        for j, signetInfo in enumerate(signet):
            if j == 0 or signet.text.strip() == 'Detailed Archive':
                continue
            if j == 1:
                # signet title
                if not isinstance(signetInfo, str):
                    signetTitle = signetInfo.text.replace("'", '')
            if j == 2 and signetTitle:
                # signet description + remove any additonal Note added
                signetData = signetInfo.find_next(
                    'div').text.replace("'", '').split('\n')[0]
                signetData = cleanSignet(signetData)
                signetTitle = cleanSignet(signetTitle)
                data += f"{cleantext(signetTitle)} : {{ label:'{signetTitle}',description: \"{signetData}\" " + '},\n'

    data += "}\n"
    f.write(data)
    f.close()
