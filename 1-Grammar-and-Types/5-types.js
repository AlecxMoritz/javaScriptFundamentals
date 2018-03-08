/* types of data
boolean: Binary data-type. Only valid values are true or false.
null: keyword that denotes a null value. This is not 0. It is the absence of value
undefined: a data-type that has not been defined with a value.
number: a numerical data-type.
string: any combination of characters to be read as text.
symbol: used to make anonymous object properties.
object: a container which can hold multiple data-type values.
*/

var ghosty = true;
console.log(ghosty);
var absent = null;
console.log(absent);
// let x =;
// console.log(x);
var num = 17
console.log(num);
var rope = "anon";
console.log(rope);
var user = {
    username: 'techno_zelda',
}
console.log(user);

const MY_KEY = Symbol();
const obj = {
    [MY_KEY]: 123
};
// doesn't print to console?

console.log("=================");

var myAge = "23";
console.log(typeof myAge);
