export default async function getRecipeOfTheDay(access_token) {
  try {
    const response = await fetch('/api/RecipiedbServer/RecipieOfTheDay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken: access_token,
      }),
    });

    const data = await response.json();
    console.log(data.recipeoftheday);
    return data.recipeoftheday;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
