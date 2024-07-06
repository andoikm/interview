function Animal(name, lastName) {
		this.name = name;
		this.lastName = lastName;

    //its mean for all instacne will be make a function copy not a referance
    this.testFn = function() => {}
}

//create ststic function for constructor like a Array.isArray()
Animal.staticFn = function(){};

Animal.prototype.getFullInfo = function (descprition) {
	alert(`The ${this.name} - ${this.lastName} ${descprition}`);
}

function Dog(age, name, lastName) {
	Animal.call(this, name, lastName);
	this.age = age;	
}

//for inheritance we need 3 step pay a attetion that the step ordering is important !!!
// call parent Constructor usine call bind this and pass the arguments
// Dog.prototype = new Animal()
//meak a sur that the Doc constructor is a Dog Dog.prototype.constructor = Dog;

Dog.prototype = new Animal(); 

Dog.prototype.constructor = Dog;

Dog.prototype.getAge = function() {
	alert(`the ${this.name} is ${this.age}`);
}

const d = new Dog(29, 'Meri', 'Shahinyan');
d.getFullInfo('is the best dog ever');
d.getAge();
