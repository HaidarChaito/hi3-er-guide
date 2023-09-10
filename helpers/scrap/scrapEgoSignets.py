import requests
from bs4 import BeautifulSoup, NavigableString, Tag

# URL of the webpage
url = "https://honkaiimpact3.fandom.com/wiki/Elysian_Realm/Signets"

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    page_content = response.content
else:
    print("Failed to fetch the webpage.")
    exit()

# Parse the HTML content
soup = BeautifulSoup(page_content, 'html.parser')

# Find the div with class mw-collapsible-content
collapsible_div = soup.find('div', {'class': 'mw-collapsible-content'})

# Find all the h3 and div elements within the collapsible div
elements = collapsible_div.find_all(['h3', 'div'])


def cleantext(text):
    return text.replace(' ', '_').replace(':', '').replace('-', '').replace('&', '').replace('♪', '').replace('!', '').replace('\'', '').strip()


valk = None
data = None
with open("output.ts", 'w+', encoding='utf-8') as file:
    for element in elements:
        if element.name == 'h3':
            # Handle h3 elements
            valk = element.get_text()
        elif element.name == 'div':
            if valk:
                data = f"export const {cleantext(valk)}_Ego:Signet[] = [\n"
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
                                signetTitle = signetInfo
                            if index == 2:
                                # signet description
                                if isinstance(signetInfo, NavigableString) or isinstance(signetInfo, Tag):
                                    signetInfo = signetInfo.text
                                if len(signetInfo) > 5:
                                    data += '{' + 'label: "' + signetTitle + '",' + \
                                        'description: "' + signetInfo + '",' + '\n' + '},'
                if data != f"export const {cleantext(valk)}_Ego:Signet[] = [\n":
                    data += '\n]\n'
                    file.write(data)
                continue
            file.write(data)
