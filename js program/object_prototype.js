function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
var per1=new Person(); 


// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// Student.prototype.age = 15;

// var studObj1 = new Student();
// alert(studObj1.age); // 15

// var studObj2 = new Student();
// alert(studObj2.age); // 15