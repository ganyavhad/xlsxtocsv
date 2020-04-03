var fs = require("fs");
var xlsx = require("node-xlsx");

let filePath = "ProductList.xlsx";
let jsonData = xlsx.parse(filePath)[0].data;
let keyNames = jsonData[0];
let valueArr = jsonData.slice(1);
// console.log("valueArr", valueArr);
// console.log("jsonData", jsonData.length);

let i = 1;
let index = 0;
let count = 1000;
let filename;
valueArr.forEach((arr) => {
  //   console.log(arr);
  if (index % 1000 == 0) {
    filename = "Product_" + i + ".csv";
    console.log("name=>", filename);
    fs.appendFileSync(filename, keyNames);
    fs.appendFileSync(filename, "\n");
    i++;
  }
  fs.appendFileSync(filename, arr);
  fs.appendFileSync(filename, "\n");
  index++;
});
