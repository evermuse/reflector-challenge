var User = require('./User');

function GroupUser(name, group) {

  this.group = group;
  User.call(this, group);

}

GroupUser.prototype = Object.create(User.prototype, {

  constructor : {

    value : GroupUser

  }

});

GroupUser.prototype.canWorkWithUser = function(name) {

  return this.user + ' is working with ' + name;

};

module.exports = GroupUser;