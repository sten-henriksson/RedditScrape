const model = require('./models.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var request = require('request');
// serverconnection stuff
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('connected');
});


function savetomongodb(age, text, score) {
	

    model.post.findOneAndDelete({ Modeltext: text },function (err, docs) {});
    //model.post.find({ Modeltext: "ddd" },function (err, docs) {console.log(docs)});
    const postmodel = new model.post({ ModelAge:age, Modeltext:text, ModelScore:score });
    postmodel.save();


  
}

var request = require('request');
setInterval(function(){request('https://www.reddit.com/r/copypasta/top/.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);
        for(x=25;x--;){
          
          savetomongodb(123,body.data.children[x].data.selftext,body.data.children[x].data.score)
        }
      
    }
    console.log("ranonce");
  })} ,3000000);


const server = app.listen(8081, function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log('listning', host, port);
});