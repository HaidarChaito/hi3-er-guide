def extract_interface_name(data):
    start = data.find("<p align=\"center\">") + len("<p align=\"center\">")
    end = data.find("</p>", start)
    name = data[start:end].strip()
    name = name.replace("-", "").replace("_", "").replace("|", "").replace("(", "").replace(")", "")
    name_parts = name.split()
    camel_case_name = ''.join([part.capitalize() for part in name_parts])
    return camel_case_name


def parse_markdown(data):
    lines = data.strip().split("\n")
    signet_data = {}
    current_signet = None

    for line in lines:
        if line.startswith("**"):
            label_end = line.find("**", 2)
            label = line[2:label_end].strip()
            current_signet = {"label": label}
            signet_data[label] = current_signet
        if current_signet and line.strip().startswith("**"):
            description_start = line.find("**", 2) + 2
            description_end = line.rfind("|", description_start)
            if description_start < description_end:
                description = line[description_start:description_end].replace(":", "").strip()
                current_signet["description"] = description
            current_signet = None

    return signet_data

input_file_path = "file.md"
output_file_path = input_file_path.replace('.md','.tsx')

with open(input_file_path, "r") as f:
    markdown_data = f.read()

interface_name = extract_interface_name(markdown_data)
signets = parse_markdown(markdown_data)

with open(output_file_path, "w") as f:
    f.write(f"interface {interface_name} " + "{\n")
    f.write("    label: string;\n")
    f.write("    description: string;\n")
    f.write("}\n\n")
    
    f.write(f"interface SignetOf{interface_name} " + "{\n")
    for label, signet in signets.items():
        camel_case_label = label.replace(" ", "").replace("-", "").replace(":", "").lower()
        f.write(f'    {camel_case_label}: {interface_name};\n')
    f.write("}\n\n")
    
    f.write(f"const signets: SignetOf{interface_name} = " + "{\n")
    for label, signet in signets.items():
        description = signet.get("description", "")
        camel_case_label = label.replace(" ", "").replace("-", "").replace(":", "").lower()
        f.write(f'    {camel_case_label}: {{ label: "{signet["label"]}", description: "{description}" }},\n')
    f.write("};\n\n")
    
    f.write(f"export default signets;\n")