function getAverage (assignmet1, assignmet2, assignmet3){
         const total = assignmet1 + assignmet2 + assignmet3;
         const average = total / 3;
         return  average; 
}
const assignmet1Marks = 40;
const assignmet2Marks = 50;
const assignmet3Marks = 60;
const myAverage =getAverage (assignmet1Marks ,assignmet2Marks,assignmet3Marks);
console.log("my average :" , myAverage);
