import clientPromise from "@/lib/MongoDb/MongoDbServer";
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("RecipediaMailingList");
    switch (req.method) {
      case "POST":
        // console.log(typeof req.body);
        let bodyObject = req.body;
        let myinsert = await db.collection("Subscriber").insertOne(bodyObject);
        res.json(myinsert);
        // res.join({ status: 200, data: "success" });
        break;
     
    }
  }