import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const db = await connectToDatabase();
            const users = db.collection('Users');
            const existingUser = await users.findOne({ email });

            if (!existingUser) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Perform a basic password comparison (not recommended for production)
            if (existingUser.password !== password) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}