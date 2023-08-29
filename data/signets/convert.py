import os


def extract_interface_name(data):
    start = data.find("<p align=\"center\">") + len("<p align=\"center\">")
    end = data.find("</p>", start)
    name = data[start:end].strip()
    name = name.replace("-", "").replace("_", "").replace("|", "").replace("(", "").replace(")", "")
    name_parts = name.split()
    camel_case_name = ''.join([part.capitalize() for part in name_parts])
    return camel_case_name


def extract_file_name(data):
    start = data.find("<p align=\"center\">") + len("<p align=\"center\">")
    end = data.find("</p>", start)
    name = data[start:end].strip()
    name = name.replace("-", "").replace("_", "").replace("|", "").replace("(", "").replace(")", "").replace(' ','')
    return name

def parse_markdown(data):
    lines = data.strip().split("\n")
    signet_data = {}
    current_signet = None

    for line in lines:
        if line.startswith("**"):
            label_end = line.find("**", 2)
            label = line[2:label_end].strip().replace(',','').replace('\'','').capitalize()
            current_signet = {"label": label}
            signet_data[label] = current_signet
        if current_signet and line.strip().startswith("**"):
            description_start = line.find("**", 2) + 2
            description_end = line.rfind("|", description_start)
            if description_start < description_end:
                description = line[description_start:description_end].replace(":", "").strip()
                current_signet["description"] = description
        if current_signet and line.strip().startswith("**"):
            priority_start = line.find("|", 2)
            priority_end = line.rfind("\n", description_start)
            if priority_start > priority_end:
                priority = line[priority_start:].replace("|", "").replace(":", "").replace(" ", "").strip()
                current_signet["priority"] = priority
        current_signet = None
    return signet_data


md_files = [file for file in os.listdir() if file.endswith(".md")]

for input_file_path in md_files:
    with open(input_file_path, "r") as f:
        markdown_data = f.read()
    interface_name = extract_interface_name(markdown_data)
    signets = parse_markdown(markdown_data)
    output_file_path = extract_file_name(markdown_data) + '.g.tsx'


    with open(output_file_path, "w") as f:
        f.write("import { Signet } from '@/types/Signet';" + "\n")
        f.write("\n\n")
        f.write(f"interface SignetOf{interface_name} " + "{\n")
        for label, signet in signets.items():
            camel_case_label = label.replace(" ", "").replace("-", "").replace(":", "").lower()
            f.write(f'    {camel_case_label}: Signet;\n')
        f.write("}\n\n")
        
        for label, signet in signets.items():
            description = signet.get("description", "")
            priority = signet.get("priority", "")
            camel_case_label = label.replace(" ", "").replace("-", "").replace(":", "").lower()
            f.write(f'const var{camel_case_label}: Signet = {{ label: "{signet["label"]}", description: "{description}", priority: "{priority}" }};\n')
        f.write('\n\n')

        f.write(f"const {interface_name}: SignetOf{interface_name} = " + "{\n")
        for label, signet in signets.items():
            description = signet.get("description", "")
            camel_case_label = label.replace(" ", "").replace("-", "").replace(":", "").lower()
            f.write(f'    {camel_case_label}: var{camel_case_label},\n')
        f.write("};\n\n")
        
        f.write(f"export default {interface_name};\n")