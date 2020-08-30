const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const PORT = 443;

https.createServer({
  key: fs.readFileSync('certificate/privateKey.key'),
  cert: fs.readFileSync('certificate/certificate.crt')
}, app).listen(PORT, function(){
  console.log("My https server listening on port " + PORT + "...");
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})*/