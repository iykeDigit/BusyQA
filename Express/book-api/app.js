import express, { json } from 'express';
const app = express();
const port = 3000;
import books from './books.js';

app.use(json());

//get all books
app.get('api/books', (req, res) => {
    res.json(books);
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
