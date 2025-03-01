from datasets import load_from_disk

def print_all_data_from_dataset(dataset_dir):
    """Load dataset from a directory and print all data."""
    # Load the dataset from the directory
    dataset = load_from_disk(dataset_dir)
    
    # Print general information about the dataset
    print("Dataset loaded successfully.")
    print(f"Number of rows: {len(dataset)}")
    print(f"Features: {dataset.features}")
    
    # Print all data entries
    print("\nAll data entries:")
    for i, entry in enumerate(dataset):
        print(f"Entry {i + 1}: {entry}")

def main():
    dataset_dir = 'combinedSet/combined_dataset'  # Directory where the combined dataset is saved
    print_all_data_from_dataset(dataset_dir)

if __name__ == "__main__":
    main()