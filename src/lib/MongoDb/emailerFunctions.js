export async function postSubsctiberToMongodb(email) {
    const res = await fetch("/api/MongodbServerAPIs/pushSubscriber", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      throw new Error(error);
    }
    console.log(res);
    return res.status;
  }

export async function sendEmail(email, recipeOfTheDay) {
    // alert('Sending email... Wait a few seconds');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: email,
          subject: 'Welcome to Recipedia! Recipe of the day',
          text: 'The recipe of the day is: ' + recipeOfTheDay.recipe_title,
          recipe: recipeOfTheDay,
        })
      });
      const data = await response.json();
      console.log(data);
      // alert('Email sent! Don\'t forget to check your spam folder!');
    } catch (error) {
      console.log('Error sending email:', error);
    }
  }

