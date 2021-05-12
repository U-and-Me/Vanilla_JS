// 1일차
console.log('Im Working. Im JS. Im Beautiful. Im worth it');

// 2일차
const a = 221;
let b = a - 5;
// a = 4;
console.log(b, a);

const what1 = "Hello😙"; //String
console.log(what1);

const what2 = true; // Boolean
const what3 = 666; //Number
const what4 = 55.1; //float

const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri"; 

console.log(monday, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

const Info = {
    name : "Nico",
    age : 33,
    gender : "Male",
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
Info.gender = "Female";
console.log(Info.gender);
