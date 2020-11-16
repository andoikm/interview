/**
 * objectneri nor gorcoxutyunner avelacnel arac object@ poxelu
 * The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves.
 * The new logic resides in a separate object called the Visitor.
 *
 * Visitors are useful when building extensibility in a library or framework.
 * If the objects in your project provide a 'visit' method that accepts a Visitor object which can make changes
 * to the receiving object then you are providing an easy way for clients to implement future extensions.
 *
 * In most programming languages the Visitor pattern requires that the original developer anticipates
 * functional adjustments in the future. This is done by including methods that accept
 * a Visitor and let it operate on the original collection of objects.
 */
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (salary) {
    this.salary = salary;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  },
}

const emp = new Employee('Bob', 1000000);

function increaseSalary(emp){
  const salary = emp.getSalary();
  emp.setSalary(salary + salary*10/100);
}

emp.accept(increaseSalary);
//console.log(emp.getSalary());
