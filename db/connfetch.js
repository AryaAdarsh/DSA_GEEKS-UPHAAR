const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const username = "CFGTEAM54"
const password = "CFGTEAM54"
const uri = `mongodb+srv://${username}:${password}@cluster0.rjkd7.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri);

const run = (async() => {
    try {
        client.connect().then(() => {
            const database = client.db('jhatkaa');
            const cfgGigs = database.collection('citizens');
            //const query = data;
            //console.log(data);
            const result = cfgGigs.find().toArray(function (err, result) {
                if (err) {
                    console.log(err)
                    throw err;
                }
                console.log(result);
                return result;
            });
        })
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
});
//run();

module.exports = { run };