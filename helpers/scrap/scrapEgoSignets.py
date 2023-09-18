import requests
from bs4 import BeautifulSoup, NavigableString, Tag

url = "url"

response = requests.get(url)

if response.status_code == 200:
    page_content = response.content
else:
    print("Failed to fetch the webpage.")
    exit()

soup = BeautifulSoup(page_content, 'html.parser')

# Find the div with Ego signets in
collapsible_div = soup.find('div', {'class': 'mw-collapsible-content'})

# Find all the h3 and div elements within the collapsible div
elements = collapsible_div.find_all(['h3', 'div'])


def cleantext(text):
    return text.replace(' ', '_').replace(':', '').replace('-', '').replace('&', '').replace('♪', '').replace('!', '').replace('\'', '').strip()


valk = None
data = None
# export interface
with open("../../data/signets/tsx/EgoSignets.ts", 'w+', encoding='utf-8') as file:
    for element in elements:
        if element.name == 'h3':
            valk = element.get_text()
        elif element.name == 'div':
            if valk:
                data = f"interface {cleantext(valk)}_Interface {{\n"
                for signet in element:
                    if signet.text.strip() != '':
                        for index, signetInfo in enumerate(signet):
                            if isinstance(signetInfo, str):
                                continue
                            if index == 0:
                                continue
                            if index == 1:
                                # signet title
                                if isinstance(signetInfo, NavigableString) or isinstance(signetInfo, Tag):
                                    signetInfo = signetInfo.text
                                split_string = signetInfo.split("Exclusive")
                                result_string = split_string[0]
                                signetTitle = result_string
                            if index == 2:
                                # signet description
                                if isinstance(signetInfo, NavigableString) or isinstance(signetInfo, Tag):
                                    signetInfo = signetInfo.text
                                if len(signetInfo) > 5:
                                    data += f"{cleantext(signetTitle)}:Signet,\n"
                if data != f"interface {cleantext(valk)}_Interface {{\n":
                    data += '\n}\n'
                    file.write(data)
                continue
            file.write(data)


valk = None
data = None
# export objects
with open("../../data/signets/tsx/EgoSignets.ts", 'a', encoding='utf-8') as file:
    for element in elements:
        if element.name == 'h3':
            valk = element.get_text()
        elif element.name == 'div':
            if valk:
                data = f"export const {cleantext(valk)}_Ego:{cleantext(valk)}_Interface = {{\n"
                for signet in element:
                    if signet.text.strip() != '':
                        for index, signetInfo in enumerate(signet):
                            if isinstance(signetInfo, str):
                                continue
                            if index == 0:
                                continue
                            if index == 1:
                                # signet title
                                if isinstance(signetInfo, NavigableString) or isinstance(signetInfo, Tag):
                                    signetInfo = signetInfo.text
                                split_string = signetInfo.split("Exclusive")
                                result_string = split_string[0]
                                signetTitle = result_string.replace(
                                    "'", '').replace('"', '')
                            if index == 2:
                                # signet description
                                if isinstance(signetInfo, NavigableString) or isinstance(signetInfo, Tag):
                                    signetInfo = signetInfo.text
                                if len(signetInfo) > 5:
                                    signetInfo = signetInfo.replace(
                                        "'", '').replace('"', '')
                                    data += f"{cleantext(signetTitle)} : {{ label:'{signetTitle}',description: \"{signetInfo}\" " + '},\n'
                if data != f"export const {cleantext(valk)}_Ego:{cleantext(valk)}_Interface = {{\n":
                    data += '\n}\n'
                    file.write(data)
                continue
            file.write(data)
