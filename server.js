const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

// app.get('*', (req, res, next) => {
//     const host = req.headers.host;
//     if (host.includes('localhost') || host.includes('eportfolio'))
//         next();

//     res.redirect('https://' + host + req.url);
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(process.env.PORT || 5000);
console.log(`listening on ${process.env.PORT || 5000}`);