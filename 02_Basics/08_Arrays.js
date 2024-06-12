//ARRAYS
const myArr = [0 ,1 ,2 ,3 ,4 ,5]
//console.log(Myarr[1]);

const myArr2 = new Array(1,2,3,4,5)
const myArrrrr = ["hero", "heroine"]
//console.log(Myarrr); 
//console.log(Myarr2);
//console.log(Myarr);

// ARRAYS METHODS 
myArr.push(9)
//console.log(myArr);
myArr.push(8)
//console.log(myArr);
myArr.pop()
//console.log(myArr);

myArr.unshift(12)
//console.log(myArr);
myArr.shift()
//console.log(myArr);
//console.log(myArr.includes(5));
//console.log(myArr.indexOf(7));

//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);


console.log("A " , myArr);
const myn1 = myArr.slice(1 , 4)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1 , 5)
console.log("c ", myArr);
console.log(myn2);