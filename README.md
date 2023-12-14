<a name="_pln9itqo9al"></a>**Recipedia Documentation**
1. ## <a name="_6ow263eip8hr"></a>Introduction : 
Welcome to Recipedia, a personalized recipe service designed to make your cooking experience special. Our aim is straightforward: we send you recipes tailored to your tastes directly to your email.

Here's how it works: you tell us what ingredients you love and the cuisines you enjoy, and we'll create recipes just for you. Worried about allergies? Let us know, and we'll make sure those ingredients don't show up in your recipes.

One cool thing – you can look back at all the recipes we've sent you. Found a favorite? Just click "Cook" for detailed instructions.Don't forget to hit the "Like" button for recipes you really enjoy. Build your own collection of favorites!

1. ## <a name="_yo84958ukbyy"></a>Overview and Functionalities :
- **Landing Page:** Features the "Recipe of the Day," a shared recipe accessible to all users.Includes additional recipes in the "Explore More" column, each with "Cook" buttons for user interaction.

- **Login Page** (Login with Google)**:** Allows users to securely log in using their Gmail accounts, ensuring a streamlined authentication process.

- **Profile Page:** Enables users to view and modify their personal details, including weight, height, physical activity levels, preferred cuisines, and avoided ingredients.

Note: Certain fetched data from Gmail (name, email, age, date of birth) remains unchangeable.

- **History Page:** Provides a comprehensive log of all recipes sent to the user via email.

Users can click on a specific recipe to access detailed cooking information and steps.

- **Recipe Page:** Presents users with detailed recipe information, including ingredients, cooking steps, vegetarian or non-vegetarian categorization, cuisine type, and more.

- **Contact Us Page:** Offers users multiple ways to contact the Recipedia team, including email, phone, and a physical address for queries or support.

- **FAQ Page:** Contains a repository of frequently asked questions and their respective answers for user reference and assistance.

- **Recipe Database Search:** Serves as a comprehensive recipe database.

Enables users to:

- Enter a recipe name and retrieve its details.
- Filter recipes by region and subregion to obtain a list of recipes matching the specified criteria.

1. ## <a name="_up0aqo8166ya"></a>Architecture and Technologies Used:
- **Front-end Technologies:**
  - React.js and Next.js: Used for building the user interface and enabling efficient rendering of web pages.
  - HTML and CSS: Fundamental web technologies utilized for structuring and styling the application.
  - Tailwind CSS: CSS framework for streamlined styling and design components.

- **Back-end Technology:**
  - Node.js: Powers the server-side functionalities and backend logic of Recipedia.

- **Database:**
  - MongoDB: Utilized as the database system for storing user data, recipes, and other relevant information.

- **External APIs and Integrations:**
  - RecipeDB API: Integrated for filtering recipe data based on user preferences and obtaining recipe details. Access is granted using the provided credentials *(username: monsoon23, password: cosylab\_monsoon)*. The API serves as a [source](https://documenter.getpostman.com/view/25274592/2s93ecvVAd) of recipe data for Recipedia.
- **Architecture Overview:**
  - Front-end built using React.js and Next.js for a responsive and interactive user interface.Communication between the front-end and back-end powered by Node.js, enabling seamless data transfer and processing.
  - MongoDB serves as the database system, storing user profiles, recipe details, and other application data.

1. ## <a name="_p6q2zp9lzb2p"></a>User Flows:

1. ## <a name="_z139co1d5nzi"></a>Logic Overview:
- **User Data Retrieval:** The code retrieves user data from a MongoDB collection named "User" stored in the "Email" database. Each user document contains information such as email address, last recipe IDs, and possibly cuisine preferences.

- **Access Token Retrieval**: get\_access\_token() function retrieves an access token by sending a POST request to a specified token URL using user credentials.

- **Fetching Recipes:** fetch\_recipe(cuisine, exclude\_ids) function fetches recipes based on the user's specified cuisine. It checks RecipeDB APIs using the access token and filters recipes based on the provided cuisine. If the response contains recipes, it filters out recipes that match the IDs already sent to the user (stored in last\_recipe\_ids).

- **Email Sending:** send\_email(recipient, recipe\_id) function prepares an email message containing the recipe ID and sends it to the specified recipient (user's email address).

- **Updating User Data:** After sending the email, the code updates the user's document in the MongoDB collection by adding the newly sent recipe ID to the last\_recipe\_id array for future exclusion

1. ## <a name="_rq9yrkrb2xug"></a>Database Structure :
**User Collection Entry**:

A Sample Entry of MongoDB is provided below :

**\_id:** ObjectId(*'6563083db5c2fda794a3d80f'*) (Automatically generated unique identifier)

**name:** *"Abhishek IIITD"* (User's name)

**email:** *"abhishek21121@iiitd.ac.in"* (User's email address)

**cuisine:** *"Indian"* (User's preferred cuisine)

**healthIssues:** *null* (Field for any health-related issues; currently null)

**height:** *"21"* (User's height)

**vegNonVeg:** *"vegetarian*” (User's dietary preference - vegetarian)

**weight:** *"32"* (User's weight)

**AllergicTo:** *Array (empty)* (List of ingredients the user is allergic to)

**favourite\_region:** *Array (1)* (Regions the user is interested in)

*0 : "French"*

**last\_recipe\_id:** *Array (3)* (IDs of the last three recipes sent to the user)

*0: "4083"*

*1: "4092"*

*2: “4097"*

1. ## <a name="_myfl81l9x7b9"></a>To-Do List :
The following is left on the current project :

- **'Cook' and 'Like' Button Functionality:**
  - Action: Implement functionality for the 'Cook' and 'Like' buttons to allow users to interact with recipes. This involves backend and frontend development to handle user actions and update the database accordingly.
- **Creation of Favorite Dishes Page:**
  - Action: Design and develop a dedicated page where users can view and manage their favorite recipes. This involves frontend and database development to display and store favorite recipes.
- **Recipe Page Development:**
  - Action: Create the recipe page that displays detailed information about each recipe, including ingredients, cooking steps, images, nutritional information, etc. This requires frontend development and integrating it with the backend database.
- **Improving Visual Appeal:**
  - Action: Enhance the website's visual aesthetics and user interface to make it more appealing and user-friendly. This involves redesigning UI components, improving layout, color schemes, typography, and overall user experience according to the Figma Design already provided. .
- **Completing Database Functionality:**
  - Action: Ensure the database structure is comprehensive and fulfills all the requirements for storing user data, recipes, interactions, and preferences. Implement necessary changes or additions to achieve the desired functionality.
- **Database Population and Testing:**
  - Action: Populate the database with relevant data, such as recipes, user information, and interactions. Test database functionalities to ensure proper data storage, retrieval, and manipulation.
- **Iterative Development and Testing:**
  - Action: Follow an iterative development process, continuously implementing features, testing for functionality, and gathering user feedback. This iterative approach helps in refining and improving the platform over time.

1. ## <a name="_96hcjm5h506b"></a>Future Enhancements :
Here are the possible future enhancements that we have ideated and researched which we feel is compatible with the existing progress.

- **Advanced Recipe Filtering Options:**
  - Implement more refined filters for recipes, such as dietary restrictions (vegan, gluten-free), cooking time, calorie count, etc., to offer users greater customization.

- **User Recipe Uploads:**
  - ** Allow users to upload and share their own recipes within the platform, fostering a sense of community and expanding the recipe database.

- **Meal Planning and Shopping Lists:** 
  - Introduce a meal planning feature where users can schedule recipes for the week and generate automated shopping lists based on selected recipes.

- **Interactive Cooking Guides:** 
  - Provide step-by-step interactive cooking guides with images or videos to assist users during cooking, enhancing the cooking experience.

- **Social Integration:**
  - Integrate social features to enable users to share their favorite recipes, cooking experiences, and tips with friends or followers on social media platforms.

- **Recommendation Algorithms:**
  - Develop advanced recommendation algorithms using machine learning to suggest recipes based on user behavior, preferences, and previous interactions.

- **Localized Recipe Suggestions:**
  - Offer region-specific recipes and ingredients based on the user's location or preferences for a more tailored experience.

- **Nutritional Information:**
  - Include detailed nutritional information for each recipe, aiding users in making healthier choices aligned with their dietary needs.

- **Multi-Language Support:**
  - Introduce multi-language support to make the platform accessible to a broader audience, accommodating different language preferences.

- **Mobile Application Development:**
  - Create a mobile version of Recipedia to enhance convenience for users on Phones and tablets.

- **User Feedback and Ratings:**
  - Allow users to rate recipes and provide feedback, helping improve the quality and relevance of recommendations.

- **Integration with Smart Kitchen Devices:**
  - Enable integration with smart kitchen appliances or devices for a seamless cooking experience, allowing users to follow recipes hands-free.

1. ## <a name="_69w42d2ox646"></a>Conclusion :
Recipedia, though in its early stages, offers personalized recipe experiences based on user preferences. While it provides essential functionalities like personalized emailing, user profiles, and recipe sourcing, there are pending improvements such as button functionalities, recipe page development, and database enhancements.

Future plans include refining features, enhancing database functionalities, and improving the user interface. The goal is to create a comprehensive cooking platform with advanced features like meal planning, user uploads, and recommendation algorithms. Through iterative development, Recipedia aims to become a go-to platform for tailored culinary experiences.

1. ## <a name="_mrx989seke3m"></a>Sample Mail


1. ## <a name="_lp5j6i6b6gjv"></a>Links :
- [Github](https://github.com/AbhishekIIITD/RecipeADay.git)
- [Figma](https://www.figma.com/file/2CSveIhaATdlfBYGIevTBu/Recipedia?type=design&node-id=0-1&mode=design&t=T87HlZMWnsT0hVHp-0)
- [Website](https://recipe-a-day.vercel.app/)

**Contact for more information :**

Abhishek IIITD 	: +91 93159 94064 / abhishek21121@iiitd.ac.in

Sarvajeeth UK	: +91 83109 34161 / sarvajeeth21417@iiitd.ac.in

Nabh Rajput		: +91 8010052789 / nabh21170@iiitd.ac.in






