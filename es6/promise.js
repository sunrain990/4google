/**
 * Created by kevin on 16/6/13.
 */
//function timeout(ms) {
//    return new Promise((resolve, reject) => {
//        setTimeout(resolve, ms, 'done');
//    });
//}
//
//timeout(100).then((value) => {
//    console.log(value);
//});
//
//
//let promise = new Promise(function(resolve, reject) {
//    console.log('Promise');
//    resolve();
//});
//
//promise.then(function() {
//    console.log('Resolved.');
//});
//
//console.log('Hi!');
//
//
////var p1 = new Promise(function (resolve, reject) {
////    setTimeout(() => reject(new Error('fail')), 3000)
////})
////var p2 = new Promise(function (resolve, reject) {
////    setTimeout(() => resolve(p1), 1000)
////})
////p2.then(result => console.log(result))
////p2.catch(error => console.log(error))
//// Error: fail




//var someAsyncThing = function() {
//    return new Promise(function(resolve, reject) {
//        // 下面一行会报错，因为x没有声明
//        resolve(x/0);
//    });
//};
//
//someAsyncThing().then(function() {
//    console.log('everything is great');
//});

var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing()
    .catch(function(error) {
        console.log('oh no', error);
    })
    .then(function() {
        console.log('carry on');
    });