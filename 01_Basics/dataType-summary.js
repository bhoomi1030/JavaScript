/* DATA TYPE 
    /   \
Primitive  Reference(Non-Primitive)
.Boolean   .Array 
.Number    .Objects
.String    .Functions
.Null
.Undefined 
.Symbol
.BigInt                */
const score = 100
const score2 = 12.09
const inLogged = false
const undef = null
let userEmail;
const Id = Symbol('789')
const anotherId = Symbol('789')
console.log(Id==anotherId);
const BigNumber = 26374782673884n

// Non Primitive
const family = ["karan", "bhoomi", " kami", "bhoka"]// sweet family 
console.log(family);



//..............................................................................................................................................
//stack(PRIMITIVE)  , heap(NON-PRIMITIVE)
let mycourse = "btech"
let anothercourse = mycourse
anothercourse = "computer science and engenering"
console.log(mycourse);
console.log(anothercourse)


let userOne = {
    email : "userOne@gmail.com"
}
let userTwo = userOne
userTwo.email = "bhoomi@google.com"
console.log(userOne.email);
console.log(userTwo.email);