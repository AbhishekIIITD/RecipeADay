// mongodb.js

import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = "mongodb+srv://recipediacosylabiiit:Laj3BrykOoCVRqT5@recipedia.tg3rinz.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  serverApi: ServerApiVersion.v1
}

let client
let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }    

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
    }
else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export default clientPromise
