import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Get the user's email from the login response.

        const {
            userEmail,
            vegNonVeg,
            height,
            healthIssues,
            weight,
            cuisine,
            allergies,
        } = req.body;
        

        try {
            const db = await connectToDatabase();
            const users = db.collection('Users');

            // Update the user's information based on their email
            await users.updateOne({ email: userEmail }, {
                $set: {
                    vegNonVeg,
                    height,
                    healthIssues,
                    weight,
                    cuisine,
                    
                },
            });

            return res.status(201).json({ message: 'User information updated successfully' });
        } catch (error) {
            console.error('Error updating user information:', error);
            return res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}