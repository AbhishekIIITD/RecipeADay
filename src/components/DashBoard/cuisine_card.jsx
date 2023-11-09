import React from 'react'


const BaseURL="https://cosylab.iiitd.edu.in/api/recipeDB";
const BearerToken="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1N1R4M2FWRzR0N0Q5YW00TDlod1VHR2tPVVlvOUpwVFd1VTNmTWxrY1lBIn0.eyJleHAiOjE2OTgyNTkyMTUsImlhdCI6MTY5ODI1ODkxNSwianRpIjoiYWVhYzI1ZTItZDUxNi00Y2M5LWFjNWUtOTMxNjkzYzEwZmRjIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2Jvb3RhZG1pbiIsImF1ZCI6WyJhcHAtYWRtaW4iLCJhcHAtdG9kbyIsImFjY291bnQiXSwic3ViIjoiYWYxNWY0YTgtZjZlOC00NzMwLThmMjAtZmU0NzdhNjQxMDQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWltcyIsInNlc3Npb25fc3RhdGUiOiI0YmVjMDZiMy05NWFiLTQ3NGItYWFhZC0xYzI2ZTAzYzZhMjYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhcHAtYWRtaW4iOnsicm9sZXMiOlsiYWRtaW4iXX0sImFwcC10b2RvIjp7InJvbGVzIjpbImFkbWluIiwidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoibW9uc29vbjIzIn0.eu3brYVdUeUR3osbwDJ3xb9gM2nfZIWkO0oWZWVN21d1GLSNXVdt5E4Yp6JHo_SW9cI53oxm7AN5mrJaH1PV8FG_zYezahLBoWiJk8IdLO-4FOy2XCDQ6xpCPamC8-xFiTflQIGxtCV5eVakPy7ZvUtrfFyctelpXni2NVm5vHkVZ2GqYw9NmLpeFNId1C8xYRR9K6Jf8NE8MK9URQ1qk5_D-gF5-r0xLUNXxeNAQZEbdQFSrNNbGNVqbNWIOZLb5lv2xQNhTPk5rVzyU1dncSBsoMzVvAx77MowV6SHJBF2kklund8kMS7iGdryGOM9VqdR5x0_2WJQD3dMl13sPw"
async function getCuisines(){
  try{
    const config={
      headers:{
        Authorization:`Bearer ${BearerToken}`,
      }
    }
    const result =await axios.get(BaseURL+"/search_subregion/india",config);
    return result;

  }catch(error){
    console.error(error);
  }
}

export const cuisine_card = () => {
  console.log(getCuisines())
  return (
    <div>cuisine_card</div>
  )
}
