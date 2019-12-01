const fs = require('fs');
// fs.readFile('c.txt',function(err, res) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res.toString());
// })
// console.log("aa")
function readFile() {
  //a
  //b
  //c
  const aFile = fs.readFileSync('a.txt');
  console.log(aFile.toString());
  const bFile = fs.readFileSync('b.txt');
  console.log(bFile.toString());
  const cFile = fs.readFileSync('c.txt');
  console.log(cFile.toString());
//  fs.readFile('a.txt',function(err, res) {
//   if (err) {
//         console.log(err);
//        return;
//       }
//   console.log(res.toString());
//   fs.readFile('b.txt', function(err,res) {
//     if (err) {
//       console.log(err);
//      return;
//     }
//   console.log(res.toString());
//   fs.readFile('c.txt',function(err, res) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res.toString());
// })
  
//    })
//  })
}

readFile();