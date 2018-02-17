// const mClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApi',(err , client)=>{
    if(err)
    {
        return console.log('error occured');
    }
    console.log('connected successfully');
    const db=client.db('TodoApi');

   db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
        
   },(err)=>{
        console.log(err);
        
   });

    client.close();
});