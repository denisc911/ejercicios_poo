// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y 
// el método obtDetails(), que muestra por pantalla las propiedades de la persona.
class Person {
    constructor(name, age, genre) {
      this.name = name;
      this.age = age;
      this.genre = genre;
    }
  
    obtDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Genre: ${this.genre}`);
    }
  }
  const person = new Person('Peter Parker', 35, 'No sabe no contesta');
  person.obtDetails();
  
// Crear la clase Student, que hereda de Person, e incluye 
// las propiedades course y group y el método register(), que muestre por pantalla el resultado.

  class Student extends Person {
    constructor(name, age, genre, course, group) {
      super(name, age, genre);
      this.course = course;
      this.group = group;
    }
  
    register() {
      console.log(`El estudiante ${this.name} es del ${this.course} y está en el ${this.group}.`);
    }
  }

  const student = new Student('Michael Jackson', 50, 'TIO', 'Moonwalking', 'Experto');
  student.obtDetails();
  student.register();
  

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(),
// que muestre por pantalla el resultado.

  
  class Teacher extends Person {
    constructor(name, age, genre, asignatura, level) {
      super(name, age, genre);
      this.asignatura = asignatura;
      this.level = level;
    }
  
    assign() {
      console.log(`El profe ${this.name} esta a cargo del curso de  ${this.asignatura} de nivel ${this.level}.`);
    }
  }
  

  const teacher = new Teacher('Doña Pepa Pig', 40, 'TIA', 'Busqueda de trufas', 'Advanced');
  teacher.obtDetails();
  teacher.assign();
  