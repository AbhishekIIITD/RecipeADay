import pymongo
import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def get_access_token():
    token_url = "https://cosylab.iiitd.edu.in/api/auth/realms/bootadmin/protocol/openid-connect/token"
    payload = {
        "client_id": "app-ims",
        "grant_type": "password",
        "username": "monsoon23",
        "password": "cosylab_monsoon",
        "scope": "openid"
    }
    response = requests.post(token_url, data=payload)
    # print(response.json().get('access_token'))
    return response.json().get('access_token')

def fetch_recipe(cuisine, exclude_ids):
    token = get_access_token()
    api_url = f"https://cosylab.iiitd.edu.in/api/recipeDB/search_subregion/{cuisine}"
    response = requests.get(api_url, headers={"Authorization": f"Bearer {token}"})
    
    if response.status_code == 200 and response.json():
        recipes = response.json()
        filtered_recipes = [recipe for recipe in recipes if recipe["recipe_id"] not in exclude_ids]
        return filtered_recipes[0] if filtered_recipes else None
    else:
        api_url = f"https://cosylab.iiitd.edu.in/api/recipeDB/search_region/{cuisine}"
        response = requests.get(api_url, headers={"Authorization": f"Bearer {token}"})
        
        if response.status_code == 200 and response.json():
            recipes = response.json()
            filtered_recipes = [recipe for recipe in recipes if recipe["recipe_id"] not in exclude_ids]
            return filtered_recipes[0] if filtered_recipes else None
    return {}



def send_email(recipient, recipe):
    
    # Create the email message
    subject = f"Check out this delicious recipe: {recipe['recipe_title']}"
    message = MIMEMultipart()
    message['From'] = smtp_username
    message['To'] = recipient
    message['Subject'] = subject
    
    # Email body with HTML formatting
    body = f"<html><body style='background-color: #f4f4f4; padding: 20px;'>"
    body += f"<h2 style='color: #333;'>Hi there!</h2>"
    
    # Attach an image at the beginning
    image_url = recipe['img_url']
    body += f"<img src='{image_url}' alt='Recipe Image' style='max-width: 100%; margin-bottom: 15px;'><br>"
    
    body += f"<p style='color: #555;'>I found a fantastic recipe for you to try: <strong>{recipe['recipe_title']}</strong></p>"
    body += f"<p style='color: #555;'>Prep Time: {recipe['prep_time']} minutes<br>Cook Time: {recipe['cook_time']} minutes<br>Total Time: {recipe['total_time']} minutes</p>"
    
    # Add Ingredients
    body += "<p style='color: #555;'><strong>Ingredients:</strong></p><ul>"
    for ingredient in recipe['ingredients']:
        body += f"<li style='color: #555;'>{ingredient}</li>"
    body += "</ul>"
    
    # Add Instructions
    body += f"<p style='color: #555;'><strong>Instructions:</strong></p><ol>"
    instructions = recipe['processes'].split('||')
    for instruction in instructions:
        body += f"<li style='color: #555;'>{instruction.strip()}</li>"
    body += "</ol>"
    
    body += f"<p style='color: #555;'>You can find the full recipe and instructions <a href='{recipe['url']}'>here</a>.</p>"
    
    body += "</body></html>"
    message.attach(MIMEText(body, 'html'))
    
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.sendmail(smtp_username, recipient, message.as_string())
        server.quit()
        print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email. Error: {str(e)}")


if __name__ == '__main__':
    mongo_client = pymongo.MongoClient("mongodb+srv://sarvajeeth21417:HhJzePCNWYpkduSf@cluster0.laaviq9.mongodb.net/?retryWrites=true&w=majority")
    db = mongo_client["Email"]
    user_collection = db["User"]
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_username = 'sarvajeeth21417@iiitd.ac.in'
    smtp_password = 'sqrpswolfatnpbvo'
    sender_email = 'sarvajeeth21417@iiitd.ac.in'

    for user_data in user_collection.find():
        last_recipe_ids = user_data.get("last_recipe_id", [])  # Default to empty list if not present

        # Check if 'cuisine' key is present in user_data
        if "cuisine" in user_data:
            cuisine = user_data["cuisine"]
            print(cuisine)
            recipe = fetch_recipe(cuisine, exclude_ids=last_recipe_ids)
            # print(recipe)

            if recipe:
                send_email(user_data["email"], recipe)
                new_recipe_id = recipe["recipe_id"]

                if "last_recipe_id" in user_data:
                    # Update existing array
                    user_collection.update_one(
                        {"email": user_data["email"]},
                        {"$addToSet": {"last_recipe_id": new_recipe_id}}
                    )
                else:
                    # Create a new array
                    user_collection.update_one(
                        {"email": user_data["email"]},
                        {"$set": {"last_recipe_id": [new_recipe_id]}}
                    )
        else:
            print(f"'cuisine' key not found for user with email: {user_data.get('email', 'Unknown email')}")
