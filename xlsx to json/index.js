const express = require('express');
const app = express();
var path    = require("path");
const fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser')
var cors = require('cors')

var request = require('request');
var cheerio = require('cheerio');
var teste = "teste";

app.use(express.static('public'));
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get('/',function(req,res){
    console.log("asdasdsa")
    res.sendFile(path.join(__dirname+'/index.html'));
  });
app.get('/api',function(req,res){
    res.sendFile(path.join(__dirname+'/data.json'));
  });  
app.post('/',function(req,res){
    teste = req.body;
    fs.writeFile('data.json', JSON.stringify(teste), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.send("asdsads") 
});
app.listen(3030, () => {
    console.log('Example app listening on port 3000!');
});

// setInterval(function(){
//     console.log("legal");
//     var file = fs.createWriteStream("public/emprego.xlsx");
//     request('http://www2.recife.pe.gov.br/taxonomy/term/8430/', function(err, resp, html) {
//             if (!err){
//               console.log(html)  
//               const $ = cheerio.load(html);
//               var site = $('strong a').attr('href');
//               console.log($('strong a').attr('href'));
//                 http.get(site, function(response) {
//                     // console.log(response)
//                     response.pipe(file);
//                 }); 
//           }else{
//               console.log(resp);
//           }
//     });
// }, 3 * 1000);

