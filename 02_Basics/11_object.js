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