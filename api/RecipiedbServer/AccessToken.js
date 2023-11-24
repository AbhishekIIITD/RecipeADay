export default async function handler(req, res) {
    console.log("getAccessToken")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "app-ims");
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", "arad");
    urlencoded.append("password", "android_arad");
    urlencoded.append("scope", "openid");
    var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };
    const response = await fetch("https://cosylab.iiitd.edu.in/api/auth/realms/bootadmin/protocol/openid-connect/token", requestOptions);
    const data = await response.json();
    res.json({ accessToken: data});

}
