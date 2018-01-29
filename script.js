var students = [
    { name : "Le Van Son ", age:26, gender: "male"},
    { name : "Van Hong Quan", age:11, gender: "male"},
    { name : "Ngo Phuong Quan", age:12, gender: "female"},
    { name : "Nguyen Trung Nghia", age:33, gender: "male"},
    { name : "Lam Phuong Nghi", age:17, gender: "female"},
    { name : "OZ", age:12, gender: "female"}
];

//Count female in student list
const totalFemale = students.filter(student => { //const
  return student.gender === 'female';
}).length;
document.getElementById("total-female").innerHTML = totalFemale;
//End Count female in student list

//Arrange the age in an ascending array
let ascStudentAge = [...students];
ascStudentAge.sort((student1, student2) => {
    return (student1.age > student2.age) ? 1 : -1;
});

let ascAge = '';
for (let i = 0; i < ascStudentAge.length; i++) {
        ascAge += '<tr>' + '<td>' + ascStudentAge[i].name + '</td>' + '<td>'
                  + ascStudentAge[i].age + '</td>' + '<td>' + ascStudentAge[i].gender + '</td>' + '</tr>';
}
document.getElementById('asc-age').innerHTML = ascAge;
// End Arrange the age in an ascending array

//Color students who have age more than 25
let studentTable = '';
for (let i = 0; i < students.length; i++) {
    if (students[i].age > 25) {
        studentTable += '<tr class="color-student">';
    } else {
        studentTable += '<tr>';
    }
    studentTable += '<td>' + students[i].name + '</td>' + '<td>'+ students[i].age 
                    + '</td>'+'<td>' + students[i].gender + '</td>' + '</tr>';
}
document.getElementById('color-student').innerHTML = studentTable;
//End color students who have age more than 25

