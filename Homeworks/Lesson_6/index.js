class User {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    getFullName() {
      return this.name + ' ' + this.surname;
    }
  }
  
  class Student extends User {
    constructor(name, surname, year) {
      super(name, surname); // вызов конструктора родительского класса
      this.year = year;
    }
  
    getCourse() {
      const currentYear = new Date().getFullYear(); // получаем текущий год
      const course = currentYear - this.year;
  
      // Проверяем, что курс находится в допустимом диапазоне 1-5
      return (course >= 1 && course <= 5) ? course : 'Недопустимый курс';
    }
  }
  
  // Тестирование класса
  var student = new Student('Иван', 'Иванов', 2019);
  
  console.log(student.name); // выведет 'Иван'
  console.log(student.surname); // выведет 'Иванов'
  console.log(student.getFullName()); // выведет 'Иван Иванов'
  console.log(student.year); // выведет 2019
  console.log(student.getCourse()); // выведет текущий курс

  
  function Hamster() {
    this.food = [];
  }
  
  Hamster.prototype.found = function(something) {
    this.food.push(something);
  };
  
  speedy = new Hamster();
  lazy = new Hamster();
  
  speedy.found("яблоко");
  speedy.found("орех");
  
  console.log(speedy.food.length) // 2
  console.log(lazy.food.length) // 0(!)