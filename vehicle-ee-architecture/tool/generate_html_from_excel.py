import pandas as pd

def generate_html_from_excel(excel_file_path):
    # Read the Excel file
    df = pd.read_excel(excel_file_path)
    
    # Start building the HTML content
    html_content = '<div class="container">\n'
    
    # Loop through the dataframe and create divs for each row
    for index, row in df.iterrows():
        if index == 0:
            html_content += f'    <div class="ecu main" id="main" data-name="{row["Name"]}" data-function="{row["Function"]}" data-location="{row["Location"]}" data-status="{row["Status"]}"></div>\n'
        else:
            html_content += f'    <div class="ecu" id="ecu{index}" data-name="{row["Name"]}" data-function="{row["Function"]}" data-location="{row["Location"]}" data-status="{row["Status"]}"></div>\n'
    
    # Close the container div
    html_content += '</div>'
    
    # Return the generated HTML content
    return html_content

# Path to the Excel file
excel_file_path = 'ecu_architecture.xlsx'

# Generate the HTML
html_output = generate_html_from_excel(excel_file_path)

# Print the generated HTML (or you can write it to a file)
print(html_output)

# If you want to save the HTML to a file, uncomment the following lines:
with open('output.html', 'w') as file:
    file.write(html_output)
