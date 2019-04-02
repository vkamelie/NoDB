const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookController = require('./controller/bookController');

app.use(bodyParser.json());

app.get('/api/library', bookController.bookList);
app.post('/api/library', bookController.updateBook);
app.put('/api/library/:id', bookController.changeBook);
app.delete('/api/library/:id', bookController.deleteBook)

const port = 5000; 

app.listen(port, () => console.log(`Keep working ${port}`))