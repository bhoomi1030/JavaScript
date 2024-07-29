// singleton
const tinderUser = new Object()
console.log(tinderUser)

const tinderUser1 = {}
tinderUser1.name = "bhoomi"
tinderUser1.age = 23
tinderUser1.inLogged = false

console.log(tinderUser1);

const regularName = {
    email : "bhoomi@gmail.com",
    fullName: {
        userName: {
            firstName: "bhoomi",
            lastName: "prajapati"
        }
    }
}
console.log(regularName.fullName.userName.firstName) 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = Object.assign(obj1 , obj2)
console.log(obj3);



