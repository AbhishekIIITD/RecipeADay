// components/Cuisines.js

import React from 'react';
import axios from 'axios';

const BaseURL="https://cosylab.iiitd.edu.in/api/recipeDB";
const BearerToken=`eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1N1R4M2FWRzR0N0Q5YW00TDlod1VHR2tPVVlvOUpwVFd1VTNmTWxrY1lBIn0.eyJleHAiOjE2OTk1MjMzOTMsImlhdCI6MTY5OTUyMzA5MywianRpIjoiYzg0MDE4YTMtZDQ1OC00YTNkLWFhM2MtZDdkNGU4ZDliMmJjIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2Jvb3RhZG1pbiIsImF1ZCI6WyJhcHAtYWRtaW4iLCJhcHAtdG9kbyIsImFjY291bnQiXSwic3ViIjoiYWYxNWY0YTgtZjZlOC00NzMwLThmMjAtZmU0NzdhNjQxMDQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWltcyIsInNlc3Npb25fc3RhdGUiOiI5MTBmN2YwYS05ODgzLTQ5MjgtYjgxNi1lYjE5NzE4ZjkwZjgiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhcHAtYWRtaW4iOnsicm9sZXMiOlsiYWRtaW4iXX0sImFwcC10b2RvIjp7InJvbGVzIjpbImFkbWluIiwidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoibW9uc29vbjIzIn0.hma2duRDO_u2WAuJno3y6Xu91plSvuTlZR6mzTTXtvcR5oLBBggq2VjWGnw72kQwzNnIPmj7LpgQ6vTtE8TOw4y7CvkSnOIPIzrfT8-mlqAx8bHV7ahlop55mooVXfMznSS2KpqF0IStgY6hm70jI6v0xv9KPgca7IG62KDO1fvPJ-8D7iQMzcxjVX6LH4vQRFfruhvL4p14VRejyLLcfLUinEGDdhVfrmzOZtZ_giMfYmme2q5MyWvxe_XOK2APAzMZ8OqssfW385Ctx20DOD9sAFwRgclvtObpt7M15W-sYUV96SXdntD5PqUFYr4ma2Vy_waMnvkSkejEdW4EmQ`;


async function getCuisines() {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${BearerToken}`,
      },
    };

    const response = await axios.get(BaseURL + "/search_subregion/india", config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
}


// const getCuisines = async (token) => {

//   try {
//     const response = await fetch('/api/RecipiedbServer/RecipieOfTheDay', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({accessToken:token}),
//     });

//     if (response.status === 200) {
//       // Registration successful, you can redirect the user to a login page.
//       console.log(response)
      
//     }
//     else if(response.status===201){
//       console.log(response)
      
//     }
//     else if(response.status==400){
//       console.log("not working")
//     } 
//     else {
//       // Handle errors, e.g., display error messages to the user.
//       console.log(response)
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

export default function Cuisines() {
  getCuisines().then(cuisines => {
    console.log(cuisines);
    // Use cuisines data as needed
  }).catch(error => {
    console.error('Error fetching cuisines:', error);
  });

  return <div>Cuisines Component</div>;
}
