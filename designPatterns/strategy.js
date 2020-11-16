/**
 * ayl@ntranqain algorithm voroshaki arajadranqi hamar
 * algoritmneri xumb e voronq poxarineli en
 * The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task.
 * It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it.
 * Essentially, Strategy is a group of algorithms that are interchangeable.
 *
 * Say we like to test the performance of different sorting algorithms to an array of numbers:
 * shell sort, heap sort, bubble sort, quicksort, etc.
 * Applying the Strategy pattern to these algorithms allows the test program to loop through all algorithms,
 * simply by changing them at runtime and test each of these against the array.
 * For Strategy to work all method signatures must be the same so that they can vary without the client program knowing about it.
 */
function Globing() {
  this.calculate = package => {
    //logic here...
    return package.weight * 4000;
  }
}
function Onex() {
  this.calculate = package => {
    //logic here...
    return package.weight * 3500;
  }
}

function Shipping() {
  this.company = null;
  this.setStrategy = company => {
    this.company = company;
  }

  this.calculate = package => {
    return this.company.calculate(package);
  }
}

const onex = new Onex();
const globing = new Globing();
const package = {from: 'Yerevan', to: 'USA', weight: 8};

const shipping = new Shipping();

shipping.setStrategy(onex);
//console.log(shipping.calculate(package));

shipping.setStrategy(globing);
//console.log(shipping.calculate(package));
