const express = require('express');
const app = express();


app.get('/index/:id/:name', (req, res) => {
  
  res.send(req.params);
})

app.listen(3000);
console.log('启动成功')