// regex (regular expersion | is a pattern)

// litral

// let pattern1 = /Hello/

// console.log(pattern1.test("Hello"))

// let string = "hello this is a string hello"

// console.log(string.match(pattern1))

// ^ - starting of string 
// $ - ending of string

// let pattern = /^(?!\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,10}$/

// let string = "Hello1234asdasd"

// console.log(pattern.test(string))


// /(?=.*[a-z])/.test("hello") - > true
// /(?=.*[a-z])/.test("HELLO") - > fasle
// /(?=.*[a-z])/.test("Hello") - > true
// /(?=.*[a-z])/.test("HELLo") - > true

// /(?=.*[a-z])(?=.*[A-Z])/.test("HELLo") - > true
// /(?=.*[a-z])(?=.*[A-Z])/.test("hello") - > false
// /(?=.*[a-z])(?=.*[A-Z])/.test("HELLO") - > false

// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("hello") - > false
// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("Hello") - > false
// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("HELLO") - > false
// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("Hello123") - > false

// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}.test("hello123") - > false
// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}.test("Hello123") - > false
// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}.test("Hello1234") - > true(min 8 chars)
// ^(?!\d) there should be no number/s at the starting of a string
// array

// collection of element

// itration, updation, searching (linear, binary), sorting (bubble sort), filter

// let a = 1
// let b = 2
// let c = 3
// let d = 4
// let e = 5
// let f = 6
// let h = 7

// let numbers = [1,2,3,4,5,6,7]

// console.log(numbers)
// console.log(numbers.length)

// let data = ["Amey Khondekar", 9766696550, true, ()=>{console.log("hii !")}, null, undefined, {}]

// data[0] = 1000

// console.log(data)

// // data[index]

// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])

// data[3]()

// loops(while, for), for of, forEach, map 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let marks = [1,2,3,50,4]
// let marks = [1,2,3,50,4]

let index = 0
// let index = 0

// while (index < numbers.length) {
//     console.log(numbers[index])
//     index++
// }

// let totalmarks = 0

// while(index < marks.length){
//     totalmarks = totalmarks + marks[index]
//     index++
// }

// console.log(totalmarks)

// for(let index = 0 ; index < numbers.length;index++){
//     console.log(numbers[index])
// }

// syntax -> for of 

// for(let element of array){
//     // console.log(element)
// }

for(let number of numbers){
    console.log(number)
}
// for(let number of numbers){
//     console.log(number)
// }

// array.forEach((element,index)=>{  })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((number, index)=>{
//     console.log(number**4)
// })

let student = {
    name: "Amey Khondekar",
    phone: 9766696550,
    email: "ameykhondekar01@gmail.com",
    marks: [35, 35, 40, 44, 23],
    grade: null
}


let student2 = {
    name: "Om Kumar",
    phone: 8857032120,
    email: "omkumar01@gmail.com",
    marks: [25, 30, 45, 44, 23],
    grade: null
}

// console.log(student.name)
// console.log(student.phone)
// console.log(student.marks)

// let totalMarks = (student.marks[0] + student.marks[1] + student.marks[2] + student.marks[3] + student.marks[4])  

// let percentage = totalMarks/5

// if(percentage >= 90){
//     student.grade = "A++"
// }else if(percentage < 90 && percentage >= 80){
//     student.grade = "A+"
// }else if(percentage < 80 && percentage >= 70){
//     student.grade = "B++"
// }else{
//     student.grade = "B"
// }

// console.log(student.grade)

let assignGrade = (student) => {

    let totalMarks = 0

    let percentage = 0

    student.marks.forEach((mark) => {
        totalMarks += mark
    })

    percentage = totalMarks / 2.5

    if (percentage >= 90) {
        student.grade = "A++"
    } else if (percentage < 90 && percentage >= 80) {
        student.grade = "A+"
    } else if (percentage < 80 && percentage >= 70) {
        student.grade = "B++"
    } else {
        student.grade = "B"
    }

    student.percentage = percentage

}

// assignGrade(student)
// assignGrade(student2)

// console.log(student)
// console.log(student2)

let students = [
    {
        name: "Amey Khondekar",
        phone: 9766696550,
        email: "ameykhondekar01@gmail.com",
        marks: [35, 35, 40, 44, 23],
        grade: null
    },
    {
        name: "Om Kumar",
        phone: 8857032120,
        email: "omkumar01@gmail.com",
        marks: [25, 30, 45, 44, 23],
        grade: null
    },
    {
        name: "Riya Sharma",
        phone: 9876543210,
        email: "riyasharma12@gmail.com",
        marks: [40, 42, 38, 35, 39],
        grade: null
    },
    {
        name: "Aman Verma",
        phone: 9123456789,
        email: "amanverma21@gmail.com",
        marks: [32, 30, 25, 28, 34],
        grade: null
    },
    {
        name: "Sneha Patil",
        phone: 9988776655,
        email: "snehapatil01@gmail.com",
        marks: [44, 46, 41, 43, 45],
        grade: null
    },
    {
        name: "Yash Raj",
        phone: 9012345678,
        email: "yashraj09@gmail.com",
        marks: [30, 35, 32, 28, 31],
        grade: null
    },
    {
        name: "Tanya Mehta",
        phone: 9812345678,
        email: "tanyamehta04@gmail.com",
        marks: [37, 36, 34, 39, 38],
        grade: null
    },
    {
        name: "Ankit Joshi",
        phone: 9654321870,
        email: "ankitjoshi10@gmail.com",
        marks: [28, 25, 30, 27, 26],
        grade: null
    },
    {
        name: "Kavya Nair",
        phone: 9871234567,
        email: "kavyanair03@gmail.com",
        marks: [45, 44, 42, 41, 43],
        grade: null
    },
    {
        name: "Rohit Sen",
        phone: 9345612789,
        email: "rohitsen11@gmail.com",
        marks: [31, 33, 30, 29, 32],
        grade: null
    },
    {
        name: "Isha Desai",
        phone: 9823567890,
        email: "ishadesai05@gmail.com",
        marks: [38, 37, 36, 35, 34],
        grade: null
    },
    {
        name: "Karan Malhotra",
        phone: 9966543210,
        email: "karanmalhotra07@gmail.com",
        marks: [22, 25, 20, 23, 24],
        grade: null
    },
    {
        name: "Meena Reddy",
        phone: 9445566778,
        email: "meenareddy06@gmail.com",
        marks: [41, 40, 43, 42, 39],
        grade: null
    },
    {
        name: "Aditya Jain",
        phone: 9398765432,
        email: "adityajain09@gmail.com",
        marks: [29, 28, 30, 26, 27],
        grade: null
    },
    {
        name: "Priya Singh",
        phone: 9811223344,
        email: "priyasingh08@gmail.com",
        marks: [33, 35, 36, 37, 32],
        grade: null
    },
    {
        name: "Nikhil Choudhary",
        phone: 9785612345,
        email: "nikhilc04@gmail.com",
        marks: [39, 40, 41, 38, 37],
        grade: null
    },
    {
        name: "Divya Agarwal",
        phone: 9867432190,
        email: "divyaagarwal02@gmail.com",
        marks: [44, 45, 43, 42, 46],
        grade: null
    },
    {
        name: "Arjun Das",
        phone: 9765432109,
        email: "arjundas06@gmail.com",
        marks: [31, 30, 29, 28, 27],
        grade: null
    },
    {
        name: "Pooja Bhatt",
        phone: 9900887766,
        email: "poojabhatt03@gmail.com",
        marks: [36, 38, 39, 37, 35],
        grade: null
    },
    {
        name: "Varun Kapoor",
        phone: 9334455667,
        email: "varunkapoor11@gmail.com",
        marks: [24, 26, 28, 25, 27],
        grade: null
    },
    {
        name: "Neha Saxena",
        phone: 9643567890,
        email: "nehasaxena07@gmail.com",
        marks: [42, 40, 43, 41, 44],
        grade: null
    },
    {
        name: "Sahil Thakur",
        phone: 9812349801,
        email: "sahilthakur02@gmail.com",
        marks: [34, 35, 32, 30, 31],
        grade: null
    }
];


students.map(assignGrade)

// students.sort((next, prev) => {
//     return  prev.percentage - next.percentage 
// })

students.sort((next, prev) => {
    return  next.name.localeCompare(prev.name) 
})

console.log(students)

// // students.splice(index, deletecount, element, element,element,...)

// // students.splice(1,4,{name:"student new"})

// console.log(students)

// sorting

// let numbers = [1, 3, 2, 4, 5, 7, 9, 8, 10]

// // Array.sort((next, prev)=>{ return prev - next })

// // numbers.sort((next, prev) => {
// //     return next - prev
// // })

// numbers.sort((next, prev) => {
//     return prev - next
// })


// console.log(numbers)