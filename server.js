const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use((req,res,next) => {
    const host = req.get('host');
    let redirectHost = host.includes('www') ? host : `www.${host}`;

    console.log(redirectHost)

    if (host.includes('localhost') || host.includes('eportfolio')) next();
    res.redirect('https://' + host + req.url);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
}).use(express.static(path.join(__dirname,'client','build')))

app.listen(process.env.PORT || 4200);
console.log(`Listening on ${process.env.PORT || 4200}`)