// Use cases of Prototype eg. by Chat GPT.

// +++++++++++++++++++++++++++++++ Prototype-based inheritance +++++++++++++++++++++++++++
/*
Prototypes allow for the creation of a chain of objects, where an object 
inherits properties and methods from its prototype. This enables a form of inheritance, 
facilitating code reuse and promoting a more organized structure.
*/
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.name);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);

  
  Dog.prototype.bark = function() {
    console.log("Woof!");
  };
  
  var myDog = new Dog("Buddy", "Labrador");
  myDog.sayHello(); // Outputs: Hello, I'm Buddy
  myDog.bark(); // Outputs: Woof!


  // ++++++++++++++++++++++++++++++++++ Method Sharing ++++++++++++++++++++++++++++++++++++ 
  /*
  Placing methods on the prototype allows multiple instances of objects to share 
  the same method, reducing memory consumption.
  */

  function Car(model) {
    this.model = model;
  }
  
  Car.prototype.startEngine = function() {
    console.log("Engine started for " + this.model);
  };
  
  var car1 = new Car("Toyota");
  var car2 = new Car("Honda");
  
  car1.startEngine(); // Outputs: Engine started for Toyota
  car2.startEngine(); // Outputs: Engine started for Honda

  
  // ++++++++++++++++++++++++++++++++ Modifying All Instances +++++++++++++++++++++++++++++++
  /*
  If you want to add or modify a property or method for all instances of a particular 
  type of object, you can do so by updating its prototype. This modification reflects in 
  all existing and future instances.
  */

  function Person(name) {
    this.name = name;
  }
  
  var person1 = new Person("Alice");
  var person2 = new Person("Bob");
  
  Person.prototype.greet = function() {
    console.log("Hello, " + this.name + "!");
  };
  
  person1.greet(); // Outputs: Hello, Alice!
  person2.greet(); // Outputs: Hello, Bob!

  
  // ++++++++++++++++++++++ Efficient Memory Usage +++++++++++++++++++++++++++++++++++
  /*
  By placing methods on prototypes, you avoid duplicating those methods for each instance,
  leading to more efficient memory usage.
  */

  function HeavyObject() {
    // Constructor logic
  }
  
  // Placing the method on the prototype
  HeavyObject.prototype.someMethod = function() {
    // Method logic
  };
  
  var obj1 = new HeavyObject();
  var obj2 = new HeavyObject();
  // obj1 and obj2 share the same prototype and method
  
  