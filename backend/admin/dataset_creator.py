import os
import zipfile
import io
import json
import markdown
import pandas as pd
from datasets import Dataset
import re
from bs4 import BeautifulSoup

def parse_markdown_file(file_path):
    """Read and parse a markdown file to extract plain text and split into data points."""
    with open(file_path, 'r', encoding='utf-8') as f:
        md_text = f.read()
        # Split the text into sections based on top-level headings
        sections = re.split(r'\n# ', md_text)
        
        data_points = []
        for section in sections:
            if section.strip():
                # Re-add the removed heading symbol for processing
                if not section.startswith('# '):
                    section = '# ' + section
                # Convert Markdown to HTML
                html = markdown.markdown(section)
                # Use BeautifulSoup to remove HTML tags and get plain text
                soup = BeautifulSoup(html, 'html.parser')
                text = soup.get_text()
                data_points.append({"text": text})
    
    return data_points

def create_dataset_from_markdown(file_path, output_file):
    """Create a pretraining dataset from a markdown file and save it as a ZIP file."""
    # Parse the markdown file to extract data points
    data_points = parse_markdown_file(file_path)
    
    # Convert to a Dataset object
    dataset = Dataset.from_pandas(pd.DataFrame(data_points))
    
    # Serialize dataset to JSON format
    json_data = dataset.to_pandas().to_json(orient='records')
    
    # Create an in-memory ZIP file
    with zipfile.ZipFile(output_file, 'w') as zipf:
        # Add JSON data to the ZIP file
        with io.BytesIO(json_data.encode('utf-8')) as buffer:
            zipf.writestr('dataset.json', buffer.getvalue())
    
    print(f"Dataset saved to {output_file}")

def load_dataset(output_file):
    """Load the dataset from the specified ZIP file."""
    with zipfile.ZipFile(output_file, 'r') as zipf:
        with zipf.open('dataset.json') as file:
            json_data = file.read().decode('utf-8')
            df = pd.read_json(io.StringIO(json_data), orient='records')
            dataset = Dataset.from_pandas(df)
    return dataset


def convert_to_dataframe(dataset):
    """Convert the dataset to a Pandas DataFrame and return it."""
    df = dataset.to_pandas()
    return df


def create_dataset(file_path):
    # Define the output file path for the ZIP file
    output_file = "output/dataset.zip"
    
    # Create the dataset from the selected Markdown file
    create_dataset_from_markdown(file_path, output_file)
