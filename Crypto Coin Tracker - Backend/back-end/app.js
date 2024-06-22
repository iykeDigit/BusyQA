const express = require('express');
const cors = require('cors');
const { connectToDb } = require('./database/connectionManager');
connectToDb();

//create instance of express app
const app = new express();
const watchListModule = require('./modules/watchListModule');

const port = 3000;

//setup middleware
app.use(cors());

//define routes

//fetch watchlist
app.get('/watchlist', async(req, res) => {
    const data = await watchListModule.getItems();
    //complete request, with response..
    res.send(data);
})

//add to watchlist

app.post('/watchlist', async(req, res) => {
    //update express, use request.query
    const {symbol} = req.query;
    console.log(JSON.stringify(req.query));

    await watchListModule.addItem(symbol);
    res.send();    
})


//delete from watch list
app.delete('/watchlist', async(req, res) => {

    const {symbol} = req.query;
    await watchListModule.removeItem(symbol);

    res.send(`server delete received.`)
})

//===> let's connect to mongoDB and then start express web server

connectToDb().then(() => {
    console.log(`MongoDb connection completed...`)

    //start express server
    app.listen(port,() => {
        console.log(`CORS-enabled Express server started on ${port}`)
    });
})
