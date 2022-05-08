const App = {
    data() {
      return {
        revers: true,
        numberGroup: null,
        firstName: "",
        midleName: "",
        lastname: "",
        gender: "",
        date: "yyyy-mm-dd",
        inputSearchLastname: "",
        inputSearchGroup: "",
        students: [
          {
            firstName: "Aleksandr",
            midleName: "Vladimirovich",
            lastname: "Tugolukov",
            numberGroup: "1330",
            gender: "male",
            date: "2022-05-26",
            status: false,
            filter: true
          },
          {
            firstName: "Vasya",
            midleName: "Gennadievich",
            lastname: "Ivanov",
            numberGroup: "1122",
            gender: "famale",
            date: "2022-05-26",
            status: false,
            filter: true
          },
          {
            firstName: "Nikita",
            midleName: "Sergeevich",
            lastname: "Minin",
            numberGroup: "1222",
            gender: "male",
            date: "2022-05-26",
            status: false,
            filter: true
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
        this.firstName = student.firstName;
        this.midleName = student.midleName;
        this.lastname = student.lastname;
        this.numberGroup = student.numberGroup;
        this.gender = student.gender;
        this.date = student.date;
        this.students[index].status = true;
        
      },

      //изменяет студента (кнопка сохранить)
      editStudent(index){
        let student = this.students[index];
        if(this.firstName !== "" ){
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
        } else {
          this.students[index].status = false;
        }
      },

      //добавить студента
      addStudent(){
        // console.log("hello");
        this.students.push(
          {
            firstName: this.firstName,
            midleName: this.midleName,
            lastname: this.lastname,
            numberGroup: this.numberGroup,
            gender: this.gender,
            date: this.date,
            filter: true
          }
        )
        this.firstName = "";
        this.midleName = "";
        this.lastname = "";
        this.numberGroup = "";
        this.gender = "";
        this.date = "";
      },

      //поиск студента
      addSearch(){
        let searchVol = this.inputSearchLastname;
        let searchVolGroup = this.inputSearchGroup;
        let students = this.students;
        for(i = 0; i < students.length; i++){
          if( (students[i].lastname).toUpperCase().includes(searchVol.toUpperCase())
              && (students[i].numberGroup).includes(searchVolGroup)) {
            console.log(students[i].lastname, students[i].numberGroup);
            this.students[i].filter = true
          } else {
            this.students[i].filter = false
          }
        }
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
    },
    computed: {
    }
  }


Vue.createApp(App).mount('#app');