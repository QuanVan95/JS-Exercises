var studentList = [
    { name : "Le Van Son ", age:26, gender: "male"},
    { name : "Van Hong Quan", age:11, gender: "male"},
    { name : "Ngo Phuong Quan", age:12, gender: "female"},
    { name : "Nguyen Trung Nghia", age:33, gender: "male"},
    { name : "Lam Phuong Nghi", age:17, gender: "female"},
    { name : "OZ", age:12, gender: "female"}
];

//Count female in student list

let countFemale = studentList.filter(student => {
  return student.gender === 'female';
}).length;
document.getElementById("total-female").innerHTML = countFemale;

//End Count female in student list


//Arrange the age in an ascending array
var ascStudentList = [...studentList];
ascStudentList.sort((a, b) => {
    return (a.age > b.age) ? 1 : -1;
});
//Original way :v 
// for(var i = 0; i < studentList.length; i++) {
//     for(var j = 0; j < studentList.length - 1 ; j++) {
//         if(ascStudentList[j].age > ascStudentList[j + 1].age) {
//             var tmp = ascStudentList[j];
//             ascStudentList[j] = ascStudentList[j + 1];
//             ascStudentList[j + 1] = tmp;
//         }
//     }
// }
var ascTable = '';
for(i = 0;i < ascStudentList.length; i++){
        ascTable+= '<tr>';
        ascTable+= '<td>' + ascStudentList[i].name + '</td>';
        ascTable+= '<td>' + ascStudentList[i].age + '</td>';
        ascTable+= '<td>' + ascStudentList[i].gender + '</td>';
        ascTable+= '</tr>';
}
document.getElementById('ascData').innerHTML = ascTable;
// End Arrange the age in an ascending array


//Color students who have age more than 25
var stdTable = '';
for(i = 0;i < studentList.length; i++){
    if(studentList[i].age > 25) {
        stdTable+= '<tr bgcolor="#27b3e">';
        stdTable+= '<td>' + studentList[i].name + '</td>';
        stdTable+= '<td>' + studentList[i].age + '</td>';
        stdTable+= '<td>' + studentList[i].gender + '</td>';
        stdTable+= '</tr>';
    }else {
        stdTable+= '<tr>';
        stdTable+= '<td>' + studentList[i].name + '</td>';
        stdTable+= '<td>' + studentList[i].age + '</td>';
        stdTable+= '<td>' + studentList[i].gender + '</td>';
        stdTable+= '</tr>';
    }
}
document.getElementById('tableData').innerHTML = stdTable;
//End color students who have age more than 25
