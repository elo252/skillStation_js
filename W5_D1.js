// const express = require('express') 
// const app = express()
// const port =  3000
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send('Hello server is running')
//     .end();
// })

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })
// app.use(express.json())

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/calculate', (req, res) => {
    const principal = parseFloat(req.body.principal);
    const rate = parseFloat(req.body.rate);
    const time = parseFloat(req.body.time);
    console.log(principal)
    console.log(rate)
    console.log(time)

    const simpleInterest = (principal * rate * time) / 100;
    res.render('result', { simpleInterest });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
