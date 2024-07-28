
//object literals 
const mySym = Symbol("Key1")

const Jsuser = { 
    name : "Bhoomi",
    "full name" : "Bhoomi prajapati",
    age : 19, 
    mySym : "mykey1",
    email : "bhoomi18p2003@gmail.com",
    location : "Ayodhya",
    loggedin : false, 
    lastloginDays : ["Monday", "Sunday"]
 }
 console.log(typeof Jsuser.age);
 console.log(Jsuser["full name"]);
 console.log(typeof Jsuser.email);
 console.log(Jsuser.mySym);

 Jsuser.age = 20
 //Object.freeze(Jsuser)
 console.log(Jsuser);

 Jsuser.greeting = function() {
 console.log("heloooooooooooooooo");
 }
 Jsuser.greetingTwo = function(){
 console.log(`Hello Meee , ${this.name}`);
 }
 console.log(Jsuser.greeting())
 console.log(Jsuser.greetingTwo());

