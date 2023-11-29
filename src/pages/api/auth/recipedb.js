import Cors from 'micro-cors';

const cors = Cors();

async function fetchBearerToken() {
    console.log("Fetching Bearer Token");

    const tokenUrl = "https://cosylab.iiitd.edu.in/api/auth/realms/bootadmin/protocol/openid-connect/token";

    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: "app-ims",
            grant_type: "password",
            username: "monsoon23",
            password: "cosylab_monsoon",
            scope: "openid",
        }),
    });

    if (!response.ok) {
        return response;
    }


    const data = await response.json();
    //console.log(data)
    return data.access_token;
}

async function fetchRecipeOfTheDay(bearerToken) {

    //console.log(bearerToken)
    console.log("Fetching Recipe of the Day");

    const recipeUrl = "https://cosylab.iiitd.edu.in/api/recipeDB/recipeoftheday/";

    const response = await fetch(recipeUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch recipe of the day");
    }

    const data = await response.json();
    // console.log(data)
    return data;
}


async function fetchRecipeByID(bearerToken, id) {
    console.log("Fetching Recipe by ID");

    const recipeUrl = `https://cosylab.iiitd.edu.in/api/recipeDB/recipeInfo/${id}`;

    try {
        const response = await fetch(recipeUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch recipe by ID");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching recipe by ID:", error.message);
        throw error;
    }
}

// Example usage:
// const token = "yourBearerToken";
// const recipeID = "yourRecipeID";
// fetchRecipeByID(token, recipeID)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



export { fetchBearerToken, fetchRecipeOfTheDay, fetchRecipeByID }