// 2일차

// with Arrays
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri"; 

console.log(monday, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

// with Objects
const Info = {
    name : "Yuna",
    age : 18,
    gender : "Female",
    isHandsome : true,
    favMovies : ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        {
            name:"Kimchi",
             fatty : false
        },
        {
            name:"Cheese burger",
             fatty:true
        }
    ]
}
console.log(Info);
console.log(Info.age);
Info.favMovies[2] = "Toy Story";
console.log(Info.favMovies[2]);
