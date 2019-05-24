function User() {
	this.name = '';
	this.age = 20;
	this.gender = "Male";
	this.address = "Nghe An province";
	this.phone = "0977144135";
	this.lastname = "Luong";
	this.city = "Vinh";
	this.firstname = "Quyennn"
}

function Admin() {
	name: "Anh Quyen";
	age: 100;
	gender: 'male'
}


Admin.prototype.address = "Malaysia";

User.prototype.name = function(info) {
	this.name = "Anh Quyen!";
}

module.exports = User;