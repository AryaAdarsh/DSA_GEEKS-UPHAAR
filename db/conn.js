const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const username = "CFGTEAM54"
const password = "CFGTEAM54"
const uri = `mongodb+srv://${username}:${password}@cluster0.rjkd7.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri);

const run = ((data) => {
    try {
        client.connect().then(() => {
            const database = client.db('jhatkaa');
            const cfgGigs = database.collection('citizens');
            const query = data;
            console.log(data);
            const result = cfgGigs.insertOne(query).then(() => {
                console.log(result);
            });
        })
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
});
//run();

module.exports = {run};