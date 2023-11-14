/**
 * A Factory Method creates new objects as instructed by the client.
 * One way to create objects in JavaScript is by invoking a constructor function with the new operator.
 * There are situations however, where the client does not, or should not,
 * know which one of several candidate objects to instantiate.
 * The Factory Method allows the client to delegate object creation
 * while still retaining control over which type to instantiate.
 *
 * The key objective of the Factory Method is extensibility.
 * Factory Methods are frequently used in applications that manage, maintain,
 * or manipulate collections of objects that are different but at
 * the same time have many characteristics (i.e. methods and properties) in common.
 */

function Developer(name) {
  this.name = name;
  this.type = 'Developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'Tester';
}

function getEmployer() {
  console.log(`Hello ${this.name}, I am a ${this.type}`);
}

function Factory() {
  this.creator = function (name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case  2:
        return new Tester(name);
    }
  }
}

const factoryEmployer = new Factory();
const employers = [];

employers.push(factoryEmployer.creator('Ando', 1));
employers.push(factoryEmployer.creator('Meri', 2));
//employers.forEach(emp => getEmployer.call(emp));




