import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {
    //console.log(chlrha)
    if (req.method === 'GET') {
        console.log("chlrha")
        try {
            const {email} = req.body; // Retrieve email from query parameters
            //console.log(query)

            const client = await connectToDatabase();
            const collection = client.collection('User'); // Check your actual collection name

            const user = await collection.findOne({ email: email });

            if (user) {
                res.status(200).json(user.last_recipe_id);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user profile' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}