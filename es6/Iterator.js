/**
 * Created by kevin on 16/6/8.
 */
var it = makeIterator(['a','b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array){
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length?
            {value: array[nextIndex++], done: false}:
            {value: undefined, done: true}
        }
    }
}
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ?
            {value: array[nextIndex++]} :
            {done: true};
        }
    };
}

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) //  { value: 'b', done: false }
console.log(iter.next()) // { value: 'c', done: false }
iter.next() //


let obj = {
    data: [ 'hello', 'world' ],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

//let iterable = {
//    0: 'a',
//    1: 'b',
//    2: 'c',
//    length: 3,
//    [Symbol.iterator]: Array.prototype[Symbol.iterator]
//};
//for (let item of iterable) {
//    console.log(item); // 'a', 'b', 'c'
//}


let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
// x='a'; y='b'

let [first, ...rest] = set;
console.log(first,rest)


var someString = "hi";
typeof someString[Symbol.iterator]
// "function"

var iterator = someString[Symbol.iterator]();

console.log(iterator.next()) // { value: "h", done: false }
iterator.next()  // { value: "i", done: false }
iterator.next()  // { value: undefined, done: true }

let arrayLike = { length: 2, 0: 'a', 1: 'b' };

//// 报错
//for (let x of arrayLike) {
//    console.log(x);
//}

// 正确
for (let x of Array.from(arrayLike)) {
    console.log(x);
}
