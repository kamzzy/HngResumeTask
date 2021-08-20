const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.post('/email', (req, res) => {

    const { email, subject, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if(err) {
            res.status(500).json({message: 'Internal Error'});
        } else {
            res.json({ message: 'Email Sent' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'resume.html'));
}); 

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
}); 

app.listen(PORT, () => {
    log('server is starting, ', 8080);
});