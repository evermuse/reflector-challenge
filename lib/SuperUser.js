function SuperUser(name, securityLevel) {

  this.securityLevel = securityLevel;
  User.call(this, securityLevel);

}

SuperUser.prototype.canDeleteUser = function(name) {

  return name + ' has been deleted.';

};

module.exports = SuperUser;