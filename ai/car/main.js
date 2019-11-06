const fs = require('fs');
const image = fs.readFileSync('./chepai.jpg').toString("base64");

const AipOcrClient = require('baidu-aip-sdk').ocr;

const client = new AipOcrClient('17712422'
,'GGMNBpl0qyOfFPhL7ZIhnLLa'
,'eBHAv5MmI3HaB6HF4HTd3KkrEH9bB83x');

const options = {};
options["multi_detect"] = "true";
client.licensePlate(image,options).then(function (result) {
    console.log(result);
});
