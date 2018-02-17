// const mClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApi',(err , client)=>{
    if(err)
    {
        return console.log('error occured');
    }
    console.log('connected successfully');
    const db=client.db('TodoApi');

    // db.collection('Todos').insertOne({
    //     test: 'something to do',
    //     completed: false

    // },(err,result)=>{
    //     if(err)
    //       {return console.log(err);
    //       }

    //       console.log(JSON.stringify(result.ops, undefined, 2));
          

    // });
    // db.collection('Users').insertOne({
    //     name: 'saravana perumal',
    //     age: 22,
    //     location: 'chennai'

    // },(err,result)=>{
    //     if(err)
    //       {return console.log(err);
    //       }

    //       console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
          

    // });

    client.close();
});