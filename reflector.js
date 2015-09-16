var User = require('./lib/User');
var GroupUser = require('./lib/GroupUser');
var SuperUser = require('./lib/SuperUser');

var Bob = new SuperUser(Bob);

function reflector(obj) {

  // climb up to Object prototype which is null

  // Object.getPropertyOf(obj).[constructor].name

//debugger;

  if ( Object.getPrototypeOf(obj) === null) {

    return false;

  } else {

    var properties = Object.keys(obj);
    for (i = 0, len = properties.length; i < len; i++) {
      console.log("Name: " + properties[i]);
      console.log("Value: " + obj[properties[i]]);
    }
    //console.log(Object.getPrototypeOf(obj) + obj.hasOwnProperty);
    return reflector(Object.getPrototypeOf(obj));

  }

}

reflector(Bob);

// how to get the function to know to access the parent
// obj = this.constructor;  // will be bound to current constructor?
// for ( method in object { console.log("Name: " + property + '.' + "Value: " + object[property]) })