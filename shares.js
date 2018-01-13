const fs = require('fs');

/*fs.readFile('miners.txt', {encoding: 'utf-8'}, function(err, data) {
if (data.includes("miner1" + ":")) {
var regex = new RegExp("("+ "miner1" + ":)" + "(\\d*)");
var matches = data.match(regex);
newdata = data.replace(regex, "miner1" + ":" + (parseInt(matches[2])+1));
fs.writeFile("miners.txt", newdata, function (err) {});
console.log(matches);
console.log(newdata);
}
});*/

fs.readFile('miners.txt', {encoding: 'utf-8'}, function(err, data) {
console.log(data);
});