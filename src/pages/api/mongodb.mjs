import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sarvajeeth21417:HhJzePCNWYpkduSf@cluster0.laaviq9.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    if (!client.isConnected) {
        await client.connect();
    }
    return client.db('Email');
}

export { connectToDatabase };