import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const userEmail = req.query.email; // Retrieve email from query parameters

            const client = await connectToDatabase();
            const collection = client.collection('User'); // Check your actual collection name

            const user = await collection.findOne({ email: userEmail });

            if (user) {
                res.status(200).json(user);
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