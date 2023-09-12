import os

# Define the image folder and TypeScript class name
image_folder = "static/images/emblems"
class_name = "EmblemsImages"
export_file = f"../../data/emblems/{class_name}.g.tsx"

# Get a list of all image files in the folder
image_files = [file for file in os.listdir(
    f"../../public/{image_folder}") if file.endswith(".png")]

# Generate TypeScript code
ts_code = f"export class {class_name} {{\n"

# Create class properties for each image file
for file_name in image_files:
    variable_name = file_name.replace('.png', '').replace(
        ".", "_").replace("-", "_").replace(" ", "_").split(".")[0]
    ts_code += f"  static {variable_name}: string = '{image_folder}/{file_name}';\n"

ts_code += "}"

# Write the TypeScript code to a .ts file
output_file = export_file
with open(output_file, "w") as file:
    file.write(ts_code)

print(f"TypeScript class '{class_name}' generated in '{output_file}'")
