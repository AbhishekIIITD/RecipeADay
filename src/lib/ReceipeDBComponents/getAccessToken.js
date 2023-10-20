export default async function getAccessToken() {
  const localAccessToken = localStorage.getItem('AccessToken');
  const localAccessTokenExp = localStorage.getItem('AccessTokenExp');

  if (!localAccessToken || localAccessTokenExp < Date.now()) {
    console.log('getting new access token');
    try {
      const response = await fetch('/api/RecipiedbServer/AccessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Welcome to Recipedia! Recipe of the day',
        }),
      });

      const data = await response.json();
      localStorage.setItem('AccessToken', data.accessToken.access_token);
      localStorage.setItem('AccessTokenExp', Date.now() + data.accessToken.expires_in * 1000);
      localStorage.setItem('RefreshToken', data.accessToken.refresh_token);
      localStorage.setItem('RefreshTokenExp', Date.now() + data.accessToken.refresh_expires_in * 1000);
      return localStorage.getItem('AccessToken');
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else {
    console.log('using old access token');
    return localAccessToken;
  }
}
