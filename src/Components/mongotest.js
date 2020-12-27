var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:xxxxxxxx@cluster0.vojuh.mongodb.net/<dbname>?retryWrites=true&w=majority";


//create new entry
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "Fredrik", lastname: "Ullman", xp: 1 };
//     dbo.collection("customers").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

//update entry 
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { lastname: "Ullman" };
    var newvalues = { $set: { address: "Canyon 123", xp: 3 } };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});