const App = {
    data() {
      return {
        revers: true,
        numberGroup: 0,
        firstName: "",
        midleName: "",
        lastname: "",
        gender: "",
        date: "yyyy-MM-dd",
        status: true,
        students: [
          {
            firstName: "Aleksandr",
            midleName: "Vladimirovich",
            lastname: "Tugolukov",
            numberGroup: "1330",
            gender: "male",
            date: "2022-05-26",
            status: false
          },
          {
            firstName: "Vasya",
            midleName: "Gennadievich",
            lastname: "Ivanov",
            numberGroup: "1122",
            gender: "famale",
            date: "2022-05-26",
            status: false
          },
          {
            firstName: "Nikita",
            midleName: "Sergeevich",
            lastname: "Minin",
            numberGroup: "1222",
            gender: "male",
            date: "2022-05-26",
            status: false
          }
        ]
      }
    },
    methods: {
      delStudent(index){
        console.log("Удалили студента с индексом" ,index);
        this.students.splice(index, 1)
      },
      //выделить студента
      targetStudent(index){
        let student = this.students[index];
        // console.log(student);
        this.firstName = student.firstName;
        this.midleName = student.midleName;
        this.lastname = student.lastname;
        this.numberGroup = student.numberGroup;
        this.gender = student.gender;
        this.date = student.date;
        this.students[index].status = true;
        
      },

      //изменяет студента
      editStudent(index){
        let student = this.students[index];
        student.firstName = this.firstName;
        student.midleName = this.midleName;
        student.lastname = this.lastname;
        student.numberGroup = this.numberGroup;
        student.gender = this.gender;
        student.date = this.date;
        this.firstName = "";
        this.midleName = "";
        this.lastname = "";
        this.numberGroup = "";
        this.gender = "";
        this.date = "";
        this.students[index].status = false;
      },
      addStudent(){
        // console.log("hello");
        this.students.push(
          {
            firstName: this.firstName,
            midleName: this.midleName,
            lastname: this.lastname,
            numberGroup: this.numberGroup,
            gender: this.gender,
            date: this.date
          }
        )
        this.firstName = "";
        this.midleName = "";
        this.lastname = "";
        this.numberGroup = "";
        this.gender = "";
        this.date = "";
      },

      //сортировка по номеру группы
      sortNumberGroup(){
        let student = this.students;
        if (this.revers) {
          student.sort(function(a, b){
            return a.numberGroup - b.numberGroup; 
          });
          this.students = student;
          this.revers = !this.revers;
        } else {
          student.sort(function(a, b){
            return b.numberGroup - a.numberGroup; 
          });
          this.students = student;
          this.revers = !this.revers;
        }
        // console.log(this.revers);
      },

      // Сортировка по фамилии
      sortLastName(){
        let student = this.students;
        if (this.revers) {
          student.sort((a, b) => a.lastname > b.lastname ? 1 : -1);
          this.revers = !this.revers;
        } else {
          student.sort((a, b) => a.lastname < b.lastname ? 1 : -1);
          this.revers = !this.revers;
        }
        // console.log(student);
        // console.log(this.revers);
      },
    }
  }


Vue.createApp(App).mount('#app');