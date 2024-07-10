const mongoose = require('mongoose');

const mongoURI = "mongodb://citizen:snehal123@ac-xfb0jgx-shard-00-00.imrluun.mongodb.net:27017,ac-xfb0jgx-shard-00-01.imrluun.mongodb.net:27017,ac-xfb0jgx-shard-00-02.imrluun.mongodb.net:27017/urbanresolver?ssl=true&replicaSet=atlas-7ifxrc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected Successfully");
        try {
            const fetched_data = await mongoose.connection.db.collection("complaint_catg")
            console.log("connected")
            try {
                const data = await fetched_data.find({}).toArray();
                const fetched_catg = await mongoose.connection.db.collection("catg");
                try {
                    const catData = await fetched_catg.find({}).toArray();
                    console.log("Fetched atg:");
                    global.complaint_catg = data;
                    global.catg = catData;
                } catch (error) {
                    console.error("Error fetching data:", err);
                }



            } catch (err) {
                console.error("Error fetching data:", err);
            }

        }
        catch (err) {

            console.error("Error connecting to Mongoose:", err);
        }


    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = mongoDB;
