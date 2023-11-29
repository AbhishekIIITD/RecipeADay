import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        console.log(req.body)
        console.log("Ho gaya start")
        try {
             

            const client = await connectToDatabase();
            const collection = client.collection('User');

            const user = await collection.findOne({ email: userEmail });
            if (user) {
                console.log("FOunddd")
                await collection.updateOne({ email: userEmail }, {
                    $set: {
                        ...req.body,
                    },
                });
                res.status(200).json({ message: 'User details updated' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error saving data to the database' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}