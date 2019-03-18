let express = require('express');
let bodyParser = require('body-parser');

let mc = require('./controllers/messages_controller.js');

let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));


app.get('/api/messages', mc.read);
app.post('/api/messages', mc.create);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);



let port = 3001;

app.listen(port, () => {
    console.log(`Port ${port} is working properly`);
});
