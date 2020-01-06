const express = require('express');
const mongoose = require('mongoose');
// url docker  test数据库 
mongoose.connect('mongodb://mongodb/test');

const kittySchema = mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function() {
  var greeting = this.name? 'Meow name is' + this.name : 'I dont hava a name';
  console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);

const app = express();
app.get('/create', (req, res) => {
  var fluffy = new Kitten({
    name: 'fluffy'
  });
  fluffy.save(function(err, fluffy) {
    if (err) return console.log(err);
    fluffy.speak();
  })
})
app.get('/', (req, res) => {
  Kitten.find(function(err, kittens) {
    if (err) return console.log(err);
    res.send(kittens);
  });
})
// mongoose.connect
app.listen(3001, console.log('Example app listening on port 3001!'));