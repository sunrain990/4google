/**
 * Created by kevin on 16/3/16.
 */
var fs = require('fs');

//function readSyn(){
//    process.stdin.pause();
//    var response = fs.readSync(process.stdin.fd,1000,0,"utf8");
//    process.stdin.resume();
//    return response[0].trim();
//}
//
//readSyn();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write('data: ' + chunk);
});

process.stdin.on('end', function () {
    process.stdout.write('end');
});