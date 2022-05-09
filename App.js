const App = {
    data() {
      return {
        revers: true,
        numberGroup: null,
        firstName: "",
        midleName: "",
        lastname: "",
        gender: "",
        date: new Date("YYYY-MM-DD"),
        inputSearchLastname: "",
        inputSearchGroup: "",
        students: [
          {
            firstName: "Aleksandr",
            midleName: "Vladimirovich",
            lastname: "Tugolukov",
            numberGroup: "1330",
            gender: "муской",
            date: "2005-02-10",
            status: false,
            filter: true
          },
          {
            firstName: "Vasya",
            midleName: "Gennadievich",
            lastname: "Ivanov",
            numberGroup: "1122",
            gender: "муской",
            date: "2001-05-10",
            status: false,
            filter: true
          },
          {
            firstName: "Oksana",
            midleName: "Viktorovna",
            lastname: "Sinicina",
            numberGroup: "1144",
            gender: "женский",
            date: "1995-06-21",
            status: false,
            filter: true
          },
          {
            firstName: "Nikita",
            midleName: "Sergeevich",
            lastname: "Minin",
            numberGroup: "1222",
            gender: "мужской",
            date: "2020-06-10",
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
        if (this.firstName == "" || this.midleName == "" || this.lastname == "" ||
        this.numberGroup == "" || this.gender == "" || this.date == ""){
          this.students[index].status = false;
        } else {
          student.firstName = this.firstName;
          student.midleName = this.midleName;
          student.lastname = this.lastname;
          student.numberGroup = this.numberGroup;
          student.gender = this.gender;
          student.date = this.date;
          this.students[index].status = false;
        }
        this.firstName = "";
          this.midleName = "";
          this.lastname = "";
          this.numberGroup = "";
          this.gender = "";
          this.date = "";
      },

      //добавить студента
      addStudent(){
        //проверка на заполненность полей (добавлять когда все заполнены)
        if (this.firstName == "" || this.midleName == "" || this.lastname == "" ||
        this.numberGroup == "" || this.gender == "" || this.date == ""){

        } else {
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
        }
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
      //сортировка по дате
      sortDate(){
        let student = this.students;
        if (this.revers) {
          student.sort((a, b) => a.date > b.date ? 1 : -1);
          this.revers = !this.revers;
        } else {
          student.sort((a, b) => a.date < b.date ? 1 : -1);
          this.revers = !this.revers;
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
      },
    },
    computed: {
    }
  }


Vue.createApp(App).mount('#app');