function GroupUser(name, group) {

  this.group = group;
  User.call(this, group);

}

GroupUser.prototype.canWorkWithUser = function(name) {

  return this.user + ' is working with ' + name;

};

module.exports = GroupUser;