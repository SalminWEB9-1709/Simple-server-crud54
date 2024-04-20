const express = require ('express');
const cors = require ('cors')
const{ MongoClient, ServerApiVersion, ObjectId } = require ('mongodb');
const app = express ();
const port = process.env.PORT  || 5000;


//this is my middle waressss!

app.use(cors());
app.use(express.json());



const uri = "mongdb+srv://elfkimberly042:bYTMZiDbzHl55Csl@cluster0.vlpdl0j.mongdb.net/?retryWrites=true&w=majority";

const client = new MongoClient (uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        stict:true,
        deprecationErrors:true,
    }
});

async function run (){
    try{
        await client.connect();
       
        //const database = client.db("usersDB");
       // const userCollection = database.collection("users");
      const userCollection = client.db('userDB').collection('users');

      app.get('/users',  async (req,res)=>{
          const cursor = userCollection.find()
         const result = await cursor.toArray();
         res.send(result);
      })




      app.post ('/users', async ( req, res) => {
        const user = req.body;
        console.log('notun', user);

         const result = await userCollection.insertOne(user);
         res.send(result);
      });

      app.delete('/users/:id', (req,res) => {
        const id = req.params.id;
        console.log('please delete from database', id);
        const query = {_id: new ObjectId (id)};

        const result = await userCollection.deleteOne(query);
        res.send(result);
      })

      
      
      await client. db ('admin').command({ping:1});
       console.log('pinged your deployment.your successfully connected to mangodb!');

    }
    finally{
        //await client .close ();
    }
}
run().catch(console.log);

app.get ('/', (req, res) => {
    res.send ('this my simple and easy server running side');

})

// get data from the database

app.listen(port , () => {
    console.log(`simple crud is running on port,${port}`)
})


