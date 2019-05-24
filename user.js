const chalk = require('chalk');

function User() {
	this.name = 'Anh Quyen dep choai!';
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
	gender: 'male';
	city: "Lao Cai";
}


function Post() {
	title: 'Hello World!';
	content: 'Lorem ipnum Hihihihi';
	type: 'Act';
	author: 'Anh Quyen'
}


Admin.prototype.address = "Malaysia";

User.prototype.popUp = function() {
	console.log(`Xin chao ` + chalk.red(this.name));
}

module.exports = User;