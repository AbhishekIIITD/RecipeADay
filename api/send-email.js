// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const clientID =
  '97100006618-r1ogtino4b4tto5j8forc1i4tdh0p8dp.apps.googleusercontent.com'
const clientSecret = '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'
const redirectURI = 'https://developers.google.com/oauthplayground'
const refreshToken =
  '1//04KGvoB8nbw7LCgYIARAAGAQSNwF-L9IrFiQ15EJ4NquTQJMvcQXrFNiv0dcEC8PzliWMYBbUOk2K3cyjII9nYoq6CrzGrryevqE'

const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI)
oAuth2Client.setCredentials({ refresh_token: refreshToken })

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === 'POST') {
    const accessToken = await oAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'recipedia.cosylab.iiit@gmail.com',
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken,
      },
    })
    console.log(res)
    const { to, subject, text, recipe } = req.body
    const mailData = {
      from: 'A Recipe a day 🍝 <recipedia.cosylab.iiit@gmail.com>',
      to: to,
      subject: subject,
      text: text,
      //   html: `
      // <h1>Todays Recipie of the day is ${recipe.recipe_title}</h1>
      // <img src=${recipe.img_url} alt="Shuku Shuku">
      // <ul>
      //   <li>Prep time: ${recipe.prep_time}</li>
      //   <li>Cook time: ${recipe.cook_time} </li>
      //   <li>Total time:${recipe.prep_time + recipe.cook_time} </li>
      //   <li>Servings: ${recipe.servings}</li>
      //   <li>Region: ${recipe.region} </li>
      // </ul>
      // <h2>Nutritional Information:</h2>
      // <ul>
      //   <li>Protein: ${recipe.protein} g</li>
      //   <li>Cholesterol: ${recipe.cholesterol} mg</li>
      //   <li>Energy: ${recipe.energykcal} kcal</li>
      //   <li>Carbohydrates: 14.0149 g</li>
      //   <li>Total fat: 28.6294 g</li>
      // </ul>
      //     `,
      html: `
    <h1 style="font-size: 2.5rem; font-weight: bold; text-decoration: underline;">Fasulya Beeda Barda - Egyptian White Bean Salad</h1>
    <p style="font-size: 1.25rem">Dietary Style: Pescetarian</p>
      <div style="display: flex;">
      <div style="flex: 1;">
        <h2 style="color: #567d2f;">Ingredients</h2>
    <ol>
      <li>5 cups brussel sprout, shaved</li>
      <li>1/5 cup olive oil</li>
      <li>1/5 cup lemon juice</li>
      <li>1 cup roasted walnut</li>
      <li>1/2 cup dried berries of your</li>
      <li>choosing</li>
      <li>1.3 cup ricotta cheese shaved</li>
      <li>Salt and pepper</li>
    </ol>
    <h2 style="color: #567d2f;">Instructions</h2>
    <ol>
      <li>Slice the brussel sprout using mandoline, set aside</li>
      <li>Wash the sliced brussel sprout, and let it dry with vegetable drier</li>
      <li>Mix brussel sprout, lemon juice, walnut, dried berries, and cheese into a bowl and toss it</li>
      <li>Drizzle with olive oil</li>
    </ol>
    <h2 style="color: #567d2f;">Nutrition</h2>
    <ul>
      <li>Protein (g): 12.25</li>
      <li>Energy (kcal): 299.49</li>
      <li>Carbohydrates (g): 36.17</li>
      <li>Total fats (g): 5.74</li>
    </ul>
    </h2>
      </div>
      <div style="flex: 1; display: flex; justify-content: center; align-items: top;">
        <img 
        src="https://www.eatingwell.com/thmb/WEmYzaq49jM6JMADmtBI4YrSfbI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5551222-1739aafa94a9481b85e643d4a0312d4f.jpg" 
        alt="Egyptian White Bean Salad"
        style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%;"
        >
      </div>
    </div>`,
    }

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return console.log(error)
      }
      res.status(200).send({ message: 'Mail send', message_id: info.messageId })
    })
  }
}
