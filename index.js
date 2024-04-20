const express = require ('express');
const cors = require ('cors')
const app = express ();
const port = process.env.PORT  || 5000;


//this is my middle waressss!

app.use(cors());
app.use(express.json())


const{ mongoclient, ServerApiVersion } = require ('mongodb')
const uri = 'mongdb+srv://elfkimberly042:bYTMZiDbzHl55Csl@cluster0.vlpdl0j.mongdb.net/?retryWrites=true&w=majority';


async function run (){
    try{
        await client.connect();
       await client. db ('admin').command({ping:1});
       console.log('pinged your deployment.your successfully connected to mangodb!');

    }
    finally{
        //await client .close ();
    }
}
run().catch(console.log);

app.get ('/', (req, res) => {
    res.send ('this my simple and easy server running side')
})

// get data from the database

app.listen(port , () => {
    console.log(`simple crud is running on port,${port}`)
})


