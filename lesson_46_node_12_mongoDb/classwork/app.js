const mongoClient = require('mongodb').MongoClient;

let url = "mongodb://84.201.158.208:27017/";
//let url = "mongodb://localhost:27017/";

mongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*authSource: "test",
    auth: {
        "user": "",
        "password": ""
    }*/
}, (err, client)=>{
    if(err)
        return console.log(err);
    console.log("Мы подключились к MongoDB");
    let db = client.db("mongo_db");

    let collection = db.collection("users");

    /*
    Пример удаления
    collection.deleteMany({name:'Alice'}, (err, result)=>{
        if(err)
            return console.log(err);
        console.log(result.deletedCount);
        client.close();
    });
    */

    /*
    Пример обновления

    collection.updateMany({name: 'Bob'}, {
            $set: {name: 'Tom'}
        },
        (err, result)=>{
            if(err)
                return console.log(err);

            console.log(result.modifiedCount);
            collection.find({name: 'Tom'}).toArray((err, result)=>{
                if(err)
                    return console.log(err);

                console.log(result);
                client.close();
            });
        }
    );
    */


    /*
    Пример поиска
    collection.find({name: 'Bob'}).toArray((err, result)=>{
        if(err)
            return console.log(err);

        console.log(result);
        client.close();
    });
    */

    /*
    Пример вставки*/
    let user = {
        name: "Sasha",
        age: 34
    };

    collection.insertOne(user, (err, result)=>{
        if(err)
            return console.log(err);

        console.log(result.ops);

        let users = [
            {
                name: "Bob",
                age: 18
            },
            {
                name: "Alice",
                age: 30
            }
        ];
        client.close();
        collection.insertMany(users, (err, result)=>{
            if(err)
                return console.log(err);
            console.log(result.ops);
            client.close();
        });
    });
});
