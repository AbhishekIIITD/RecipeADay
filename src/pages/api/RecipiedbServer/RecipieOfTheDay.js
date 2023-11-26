export default async function handler(req, res) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + req.body.accessToken);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };      
    try{
      const response = await fetch("https://cosylab.iiitd.edu.in/api/recipeDB/recipeoftheday", requestOptions);
    const data = await response.json();

    return res.json({ recipeoftheday: data});
    }catch(error){
      return error
    }
}
