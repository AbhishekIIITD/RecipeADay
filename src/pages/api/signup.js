import { OAuth2Client } from 'google-auth-library';
import { UserModel } from './User.mjs';

import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { googleIdToken } = req.body;

        try {
            const user = await verifyGoogleSignInToken(googleIdToken);
            if (user) {
                const db = await connectToDatabase();
                const users = db.collection('Users');
                const existingUser = await users.findOne({ email: user.email });

                if (!existingUser) {
                    await users.insertOne(user);
                }
                return res.status(200).json({ message: 'Google Sign-In successful' });
            } else {
                return res.status(401).json({ error: 'Google Sign-In verification failed' });
            }
        } catch (error) {
            console.error('Error during Google Sign-In:', error);
            return res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}

const CLIENT_ID = '263231929945-k2paolaf1o66jsgv08q1g93a7o987125.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);


async function verifyGoogleSignInToken(idToken) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const userData = {
            email: payload.email,
            name: payload.name,
            phone: payload.phone_number,
        };
        const user = new UserModel(userData);
        await user.save();

        return user;
    } catch (error) {
        console.error('Error verifying Google Sign-In token:', error);
        throw error;
    }
}