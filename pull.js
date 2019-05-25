function notifiction() {
	alert("Xin chao cac ban nheeee!!!!");
}

function Animal(animal) {
	this.name = animal;
	this.color = 'white'
}

Animal.prototype.sayHi = function(name) {
	console.log(`Hi, I'm ${this.name}`);
}

module.exports = Animal;