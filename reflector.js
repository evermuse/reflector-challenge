var User = require('./lib/User');
var GroupUser = require('./lib/GroupUser');
var SuperUser = require('./lib/SuperUser');

var Bob = new SuperUser(Bob);

function reflector(obj) {

  if ( Object.getPrototypeOf(obj) === null) {

    return false;

  } else {

    var properties = Object.keys(obj);

    for (i = 0, len = properties.length; i < len; i++) {

      console.log('Name: ' + properties[i]);
      console.log('Value: ' + obj[properties[i]]);

    }

    return reflector(Object.getPrototypeOf(obj));

  }

}

reflector(Bob);
