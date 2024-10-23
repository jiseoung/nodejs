const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.send('path list : ["/", "/hi"]');
})

app.get('/hi', (req,res) => {
        var user = req.query.user;

        if (user == undefined) {
                res.send('/hi?user=user');
        }
        else if (user == 'admin') {
            res.send('<h1>hi ' + user + '</h1><br><br>[secret address : /secret]');
        }
        else {
            res.send('<h1>hi ' + user + '</h1><br><br>Could there be a hidden path?');
        }
})

app.get('/secret', (req,res) => {
    res.sendFile(__dirname + '/secret.html');
})

app.post('/secret', (req,res) => {
    const user = req.body.user;

    if (user != 'admin') {
        res.send('UnAuthorized user');
    }
    else {
        res.send('<h1>HI~~~~~~~~~~~~~~~~~</h1>');
    }
})

app.listen(port, () => {
        console.log('hi');
});