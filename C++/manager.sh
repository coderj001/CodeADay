#!/bin/bash

# Check if a folder name is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <folder_name>"
    exit 1
fi

# Define variables
template_dir="template"
target_dir="$1"

# Check if the template directory exists
if [ ! -d "$template_dir" ]; then
    echo "Error: Template directory '$template_dir' not found."
    exit 1
fi

# Create the target directory
mkdir -p "$target_dir"

# Copy the template contents into the new directory
cp -r "$template_dir"/* "$target_dir"/

# Replace PROJECT_NAME with the actual project name in the Makefile
if [ -f "$target_dir/Makefile" ]; then
    sed -i "s/PROJECT_NAME/$target_dir/g" "$target_dir/Makefile"
fi

echo "Project '$target_dir' created successfully."

mkdir -p "$target_dir/include"
touch "$target_dir/include/$target_dir.h"

mkdir -p "$target_dir/tests"
touch "$target_dir/tests/${target_dir}Test.cpp"

touch "$target_dir/src/${target_dir}.cpp"
