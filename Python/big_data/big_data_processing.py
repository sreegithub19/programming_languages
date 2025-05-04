import pandas as pd
import dask.dataframe as dd

def process_data():
    # Dataset file path
    dataset_path = 'routes.dat'
    print("Loading dataset...")

    # Define column names (based on OpenFlights Routes dataset documentation)
    columns = [
        'Airline', 'Airline_ID', 'Source_Airport', 'Source_Airport_ID',
        'Destination_Airport', 'Destination_Airport_ID', 'Codeshare',
        'Stops', 'Equipment'
    ]

    # Load the dataset using Dask
    ddf = dd.read_csv(dataset_path, names=columns, header=None)

    # Perform operations on the data
    print("Processing data...")
    result = ddf.groupby('Airline')['Stops'].mean().compute()

    # Save the processed data to a new CSV file
    output_path = 'processed_data.csv'
    result.to_csv(output_path, index=True)
    print(f"Data processing complete. Output saved to '{output_path}'.")

if __name__ == "__main__":
    process_data()