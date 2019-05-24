function User() {
	this.name = '';
}

User.prototype.name = function(info) {
	this.name = "Anh Quyen!";
}

module.exports = User;