// console.log("Hi !!");

import { Student_Data } from "./cofigurator";
import { student } from "./student";
import { marks } from "./test/marks";

// console.log("Check");


const student_1:student = {
    name: "Shubham",
    age: 25,
    feesPaid: false
}

// export type subjectMarks = 
// {
//     math:number;
//     cs:number;
// }

const subjectMarks:marks = 
{
    math: 87,
    cs: 88
}
console.log("data");

console.log("This the student_1 object: "+JSON.stringify(student_1));
console.log("This the subjectMarks object: "+JSON.stringify(subjectMarks));


// const student_2:Student_Data = 
// {
//     std : {
        
//             name: "sarthak",
//             age: 26,
//             feesPaid: true
    
        
//     },
   
//     score: 
//     {
//         math: 89,
//     cs: 90

//     }
// }

// console.log("this is student_2 object "+ JSON.stringify(student_2) );

const getModStudents = (students:student[]): student[] =>
{
    const activities:string[] = ["singing","cricket"];

    // const modStudents = students.filter( (student)=>
    // {
    //     return (student.name !=="Rudraksh" && student.name !=="Shourya" );

    // }).map((item)=>
    // {
    //     console.log("map passed after the filter function");
    //     return {...item,activities};
        
    // });
    const modStudents = students.map( (item,index) =>
    {
        console.log("index no: " + index );
        // console.log(" ");
        // console.log("Updated student data : ");
        console.log(" ");
        
        
        
        if(item.name !=="Rudraksh" && item.name !=="Shourya")
        {
            console.log("Updated student data : ");
            return {...item,activities};
        }
        else{
          
            return{...item};
        }
        
        // return {...item,activities};

    });

return modStudents;
}

// const ans = getModStudents(getStudents());

const getStudents = () :student[] => 
{

const students: student[] =
[
    {
        name: "Medha",
        age: 23,
        feesPaid: true

    },
    {
        name: "Avni",
        age: 23,
        feesPaid: true

    },
    {
        name: "Shourya",
        age: 23,
        feesPaid: true

    },
    {
        name: "Rudraksh",
        age: 23,
        feesPaid: true

    }
];

return students;
}

//     return [
//         {
        
//             name: "Shourya",
//             age: 23,
//             feesPaid: true
    
        
//     },

//     {
        
//         name: "Rudraksh",
//         age: 23,
//         feesPaid: true

    
// },
//     ];




 
const ans: student[] = getModStudents(getStudents());
console.log(" ");

console.log("Check for ans"); 
console.log(" ");


console.log("This is the value of mod_Students_data: " + JSON.stringify(ans));
console.log(" ");


// 
// [
//     {
    
//         name: "Shourya",
//         age: 23,
//         feesPaid: true

    
// },

// {
    
//     name: "Rudraksh",
//     age: 23,
//     feesPaid: true


// },


// ]

//


const getStudentData = ():Student_Data => {
    // const student_2:Student_Data = 
// {
   
   return {
    stds : getStudents(),

score: 
{

math: 85,
cs: 86

}

   };
   
//    std :  {
        
//             name: "Shourya",
//             age: 23,
//             feesPaid: true
    
        
//     },
   
//     score: 
//     {
//         math: 85,
//     cs: 86

//     }

   
// }

// return student_2;

};

console.log(" ");


console.log("This is the value returned from getStudentData() function updated: " + JSON.stringify(getStudentData()));



// const student_info = (): Student_Data =>
// {

   
//     const student_1:student = {
//         name: "Shubham",
//         age: 25,
//         feesPaid: false
//     }

//     // const marks:subjectMarks = 
//     // {
//     //     math: 89,
//     //     cs: 88,
//     // }
    
//         // marks
    
//     // return student_1;

//     // {
//     //     student_1,
//     //     marks
//     // }
    




// }





