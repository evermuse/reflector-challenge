var User = require('./lib/User');
var GroupUser = require('./lib/GroupUser');
var SuperUser = require('./lib/SuperUser');

var Bob = new SuperUser(Bob);

//recursive function to inspect the classes, properties, & methods

function reflector(obj) {

  //set base-case / test the current prototype to see if we're on the top-level Object, if so stop recursion

  if ( Object.getPrototypeOf(obj) === null) {

    return false;

  } else {

    //for current Class grab the properties of the instance with Object.keys; returns an array

    var properties = Object.keys(obj);

    for (var i = 0, len = properties.length; i < len; i++) {

      //iterate over the array and console.log the Class name, properties, & methods

      console.log(obj.constructor.name + ' - Name: ' + properties[i] + ' - Value: ' + obj[properties[i]]);

    }

    return reflector(Object.getPrototypeOf(obj));

  }

}

reflector(Bob);
