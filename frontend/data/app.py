import json

# Define the parts and their titles
parts_info = {
    "Part I": "The Union and its territory",
    "Part II": "Citizenship",
    "Part III": "Fundamental Rights",
    "Part IV": "Directive Principles of State Policy",
    "Part IVA": "Fundamental Duties",
    "Part V": "The Union",
    "Part VI": "The States",
    "Part VII": "The States in Part B of the First Schedule",
    "Part VIII": "The Union Territories",
    "Part IX": "The Panchayats",
    "Part IXA": "The Municipalities",
    "Part IXB": "The Co-operative Societies",
    "Part X": "The Scheduled and Tribal Areas",
    "Part XI": "Relations between the Union and the States",
    "Part XII": "Finance, Property, Contracts and Suits",
    "Part XIII": "Trade, Commerce and Intercourse within the Territory of India",
    "Part XIV": "Services Under the Union and the States",
    "Part XIVA": "Tribunals",
    "Part XV": "Elections",
    "Part XVI": "Special Provisions Relating to Certain Classes",
    "Part XVII": "Official Language",
    "Part XVIII": "Emergency Provisions",
    "Part XIX": "Miscellaneous",
    "Part XX": "Amendment of the Constitution",
    "Part XXI": "Temporary, Transitional and Special Provisions",
    "Part XXII": "Short Title, Commencement, Authoritative Text in Hindi and Repeals"
}

# Load the existing JSON data
try:
    with open('data.json', 'r', encoding='utf-8') as file:
        constitution_data = json.load(file)
except UnicodeDecodeError:
    print("Error reading the file due to encoding issues.")
    raise

# Function to determine part and title based on article number
def determine_part_and_title(article_number):
    """ Determine the part and title based on the article number """
    # Ensure article_number is an integer
    try:
        article_number = int(article_number)
    except ValueError:
        return None, None
    
    if 1 <= article_number <= 12:
        return "Part I", parts_info["Part I"]
    elif 13 <= article_number <= 35:
        return "Part II", parts_info["Part II"]
    elif 36 <= article_number <= 51:
        return "Part III", parts_info["Part III"]
    elif 52 <= article_number <= 78:
        return "Part IV", parts_info["Part IV"]
    elif 79 <= article_number <= 81:
        return "Part IVA", parts_info["Part IVA"]
    elif 82 <= article_number <= 91:
        return "Part V", parts_info["Part V"]
    elif 92 <= article_number <= 237:
        return "Part VI", parts_info["Part VI"]
    elif 238 <= article_number <= 242:
        return "Part VII", parts_info["Part VII"]
    elif 243 <= article_number <= 243:
        return "Part VIII", parts_info["Part VIII"]
    elif 244 <= article_number <= 243:
        return "Part IX", parts_info["Part IX"]
    elif 244 <= article_number <= 244:
        return "Part IXA", parts_info["Part IXA"]
    elif 245 <= article_number <= 245:
        return "Part IXB", parts_info["Part IXB"]
    elif 246 <= article_number <= 244:
        return "Part X", parts_info["Part X"]
    elif 245 <= article_number <= 245:
        return "Part XI", parts_info["Part XI"]
    elif 246 <= article_number <= 246:
        return "Part XII", parts_info["Part XII"]
    elif 247 <= article_number <= 247:
        return "Part XIII", parts_info["Part XIII"]
    elif 248 <= article_number <= 248:
        return "Part XIV", parts_info["Part XIV"]
    elif 249 <= article_number <= 249:
        return "Part XIVA", parts_info["Part XIVA"]
    elif 250 <= article_number <= 250:
        return "Part XV", parts_info["Part XV"]
    elif 251 <= article_number <= 251:
        return "Part XVI", parts_info["Part XVI"]
    elif 252 <= article_number <= 252:
        return "Part XVII", parts_info["Part XVII"]
    elif 253 <= article_number <= 253:
        return "Part XVIII", parts_info["Part XVIII"]
    elif 254 <= article_number <= 254:
        return "Part XIX", parts_info["Part XIX"]
    elif 255 <= article_number <= 255:
        return "Part XX", parts_info["Part XX"]
    elif 256 <= article_number <= 256:
        return "Part XXI", parts_info["Part XXI"]
    elif 257 <= article_number <= 257:
        return "Part XXII", parts_info["Part XXII"]
    else:
        return None, None

# Process each article in the constitution data
for article in constitution_data:
    article_number = article.get('article', 0)
    
    # Determine the part and title based on the article number
    current_part, current_part_title = determine_part_and_title(article_number)

    # Add or update the 'part' and 'partTitle' fields
    article['part'] = current_part
    article['partTitle'] = current_part_title

# Save the updated data back to a JSON file
with open('updated_indian_constitution.json', 'w', encoding='utf-8') as file:
    json.dump(constitution_data, file, indent=2, ensure_ascii=False)

print("The Indian Constitution JSON has been updated with part and partTitle information.")
