import os
import re

# Define the directory where your 'valks' folder is located
valks_directory = '../../data/valks'

# Loop through all subdirectories and files
for root, _, files in os.walk(valks_directory):
    for file_name in files:
        if file_name == 'valk.tsx':
            file_path = os.path.join(root, file_name)

            # Read the content of the 'valk.tsx' file
            with open(file_path, 'r') as file:
                content = file.read()

            # Use regex to find the label value
            label_match = re.search(r'label: \'([^\']+)\'', content)
            if label_match:
                label_value = label_match.group(1)

                # Replace the image value with the label value
                updated_content = re.sub(
                    r'image: \'([^\']+)\'', f'image: \'{label_value}\'', content)

                # Save the updated content back to the file
                with open(file_path, 'w') as file:
                    file.write(updated_content)

                print(f"Updated image value in {file_path}")

print("Image values updated successfully.")
