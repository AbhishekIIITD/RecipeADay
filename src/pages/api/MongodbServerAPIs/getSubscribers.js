import clientPromise from "@/lib/MongoDb/MongoDbServer";
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("RecipediaMailingList");
    switch (req.method) {
      case "GET":
        console.log("GET");
        const allSubscribers = await db.collection("Subscriber").find({}).toArray();
        // console.log(allSubscribers);
        let SubscribersList = []
        for (let i = 0; i < allSubscribers.length; i++) {
            console.log(allSubscribers[i]["email"]);
            SubscribersList.push(allSubscribers[i]["email"]);
        }
        res.status(200).json({ status: 200, data: SubscribersList });
        break;
    }
}

// res.json({ status: 200, data: SubscribersList });
  
  
