const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use((req,res,next) => {
    const host = 'https://' + req.get('host');

    if (host.includes('localhost') || host.includes('eportfolio')) next();
    else if ((req.get('X-Forwarded-Proto') !== 'https')) {
        console.log(host)
        res.redirect(host + req.url);
    } else next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
}).use(express.static(path.join(__dirname, 'client', 'build')));


app.listen(process.env.PORT || 4200);
console.log(`Listening on ${process.env.PORT || 4200}`)