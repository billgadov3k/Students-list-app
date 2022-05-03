const App = {
    data() {
      return {
        numberGroup: 0,
        firstName: "",
        midleName: "",
        lastname: "",
        gender: "",
        date: "",
        students: [
          {
            firstName: "Aleksandr",
            midleName: "Vladimirovich",
            lastname: "Tugolukov",
            numberGroup: "1",
            gender: "male",
            date: "01.01.2022"
          },
          {
            firstName: "Vasya",
            midleName: "Gennadievich",
            lastname: "Ivanov",
            numberGroup: "2",
            gender: "famale",
            date: "01.01.2022"
          }
        ]
      }
    },
    methods: {
      delStudent(index){
        console.log("Удалили студента с индексом" ,index);
        this.students.splice(index, 1)
      },
      //изменяет студента
      editStudent(index){
        let student = this.students[index];
        console.log(student.firstName);
        student.firstName = this.firstName;
        student.midleName = this.midleName;
        student.lastname = this.lastname;
        student.numberGroup = this.numberGroup;
        student.gender = this.gender;
        student.date = this.date;
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
        console.log(student);
      }
    }
  }


Vue.createApp(App).mount('#app');