function User() {
	this.name = '';
	this.age = 20;
	this.gender = "Male";
	this.address = "Nghe An province";
	this.phone = "0977144135";
	this.lasname = "Luong";
	this.city = "Vinh";
	this.lasname = "Luong";
	this.lasname = "Luong";
	this.firstname = "Quyennn"
}

User.prototype.name = function(info) {
	this.name = "Anh Quyen!";
}

module.exports = User;