import os

def update_valks_file(folder_path):
    folder_name = os.path.basename(folder_path)
    file_path = os.path.join(folder_path, 'valk.tsx')
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    content = content.replace("argentKnightArtemis", folder_name)
    content = content.replace("Argent Knight: Artemis", f"{folder_name}")
    content = content.replace("export default argentKnightArtemis", f"export default {folder_name}")

    with open(file_path, 'w') as f:
        f.write(content)

current_dir = os.getcwd()  # Get the current working directory

for folder_name in os.listdir(current_dir):
    folder_path = os.path.join(current_dir, folder_name)
    if os.path.isdir(folder_path):
        update_valks_file(folder_path)
        print(f"Updated valks.tsx in folder: {folder_name}")
