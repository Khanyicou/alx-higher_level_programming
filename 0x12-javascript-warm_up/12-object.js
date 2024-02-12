#!/usr/bin/node

function MyObject(type, value) {
  this.type = type;
  this.value = value;
}

MyObject.prototype.updateValue = function(newValue) {
  this.value = newValue;
};

const myObject = new MyObject('object', 12);
console.log(myObject);
myObject.updateValue(89);
console.log(myObject);
