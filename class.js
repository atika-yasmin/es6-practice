class Student{
    constructor(sId, sName){
      this.id = sId;
      this.name = sName;
      this.school = "PLSCR";
    }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(14, "Mahiya");
const student3 = new Student(10, "Bappy");

console.log(student1,student2,student3);
