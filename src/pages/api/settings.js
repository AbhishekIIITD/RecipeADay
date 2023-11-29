import { connectToDatabase } from './mongodb.mjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {
                userEmail,
                vegNonVeg,
                height,
                healthIssues,
                weight,
                favourite_regions,
                AllergicTo,
            } = req.body;

            const client = await connectToDatabase();
            const collection = client.collection('User');

            const user = await collection.findOne({ email: userEmail });

            if (user) {
                console.log("Found");

                const existingFavouriteRegions = user.favourite_regions || [];
                const existingAllergicTo = user.AllergicTo || [];

                const updatedFavouriteRegions = [...existingFavouriteRegions, ...favourite_regions];
                const updatedAllergicTo = [...existingAllergicTo, ...AllergicTo];

                await collection.updateOne({ email: userEmail }, {
                    $set: {
                        vegNonVeg,
                        height,
                        healthIssues,
                        weight,
                        favourite_regions: updatedFavouriteRegions,
                        AllergicTo: updatedAllergicTo,
                    },
                });

                res.status(200).json({ message: 'User details updated' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: 'Error saving data to the database' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}