var User = require('./User');
var GroupUser = require('./GroupUser');

function SuperUser(name, group, securityLevel) {

  this.securityLevel = securityLevel;
  User.call(this, securityLevel);
  GroupUser.call(this, group);

}

SuperUser.prototype = Object.create(GroupUser.prototype, {

  constructor : {

    value : SuperUser

  }

});

SuperUser.prototype.canDeleteUser = function(name) {

  return name + ' has been deleted.';

};

module.exports = SuperUser;