export default async function handler(req, res) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + req.body.accessToken);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };      
    const response = await fetch("https://cosylab.iiitd.edu.in/api/recipeDB/recipeoftheday", requestOptions);
    const data = await response.json();

    res.json({ recipeoftheday: data});
    return response
}