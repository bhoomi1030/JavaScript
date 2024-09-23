// to create function we create a function in which a given problemcan be called many time 

//creation 
function myName() {
  console.log("B");
  console.log("H");
  console.log("O");
  console.log("O");
  console.log("M");
  console.log("I");
}
myName()

function addTwoNumber(Number1 , Number2){
    console.log(Number1 + Number2);
}
addTwoNumber(9 , 8)
addTwoNumber(8 , "@")
addTwoNumber(9 , null)

function addTwo( Number4 , Number3){
    let result = Number4 + Number3 
    // anything after result will be not execute but before this can be executed 
    console.log("best");
    return result 
    console.log("good");
    //here on runing code best will be printed but good will not print because it is after result 
    return Number4 + Number3 
}
const result = addTwo( 183783803 , 8682398933)
console.log("Result : " , result); 








