function User(name) {

  this.name = name;

}

User.prototype.canHaveAvatar = function(img) {

  return this.img;

};

module.exports = User;