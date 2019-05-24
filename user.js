function User() {
	this.name = '';
	this.age = 20;
	this.gender = "Male";
	this.lasname = "Luong";
	this.firstname = "Quyennn"
}

function Admin() {
	name: "Anh Quyen";
	age: 100
}


Admin.prototype.address = "Malaysia";

User.prototype.name = function(info) {
	this.name = "Anh Quyen!";
}

module.exports = User;