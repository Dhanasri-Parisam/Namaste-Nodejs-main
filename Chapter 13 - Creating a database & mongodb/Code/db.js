const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

//connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbname = "HelloWorld"

async function main() {
    await client.connect();
    console.log("Database connected successfully")
    const db = client.db(dbname);
    const collection = db.collection("User")


    // Update
    const updateData = await collection.updateOne({"firstname": "Roy"}, {$set: {"city": "Mumbai"}})
    console.log("Updated document ", updateData)

    
    //Read 
    const findData = await collection.find({}).toArray();
    console.log("All data :", findData)

    // find one
    const findOneData = await collection.findOne({"firstname": "Roy"})
    console.log("find one data :", findOneData)

    // find many
    const findManyData = await collection.find({"city": "Pune"}).toArray();
    console.log("find many data :", findManyData)

    // insert data and create data both are same
    // after delete operation if we run insert operation again the count will increase by 1
    // because a new document is created in the collection that why commebnted insert operation
    const data = {
        firstname: "Roy",
        lastname: "Jaiswal",
        city: "Pune",
        phoneNumber: "88526587",
    }

    // const insertData = await collection.insertMany([data]);
    // console.log("data inserted = ", insertData)

    // const insertData = await collection.insertMany([data])
    // console.log("data inserted = ", insertData)


    //delete
    const deletedata = await collection.deleteOne({ _id: new ObjectId('693e2b632d6420140a9aa83f') })
    console.log("deleted data=>", deletedata)

    // Count documents 
    // in count whenever we run the code it will give the total number of documents present in the collection
    // insert operation will increase the count value by 1
    // delete operation will decrease the count value by 1
    const countData = await collection.countDocuments({})
    console.log("Number of documents in db are :", countData)

    return 'done'

}

main().then(console.log)
    .catch(console.error)
    .finally(() => client.close());
