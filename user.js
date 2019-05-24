function User() {
	this.name = '';
	this.age = 20;
	this.gender = "Male";
}

User.prototype.name = function(info) {
	this.name = "Anh Quyen!";
}

module.exports = User;