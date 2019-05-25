function auth(name, pw) {
	this.username = name;
	this.pw = pw;
}

auth.prototype.notification = function() {
	console.log(`Hello ${this.username}`);
}

module.exports = auth;