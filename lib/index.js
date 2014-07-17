'use strict';

var Emitter = require('emitter');
var Checkbox = require('./checkbox');

module.exports = StupidCheckbox;

Emitter(StupidCheckbox.prototype);

function StupidCheckbox(name) {
  this.name = name.replace(/\[\]/, '') + '[]';
  this.el = document.createElement('ul');
  this.el.classList.add('stupid-checkbox');
  this.checkboxes = [];
}

StupidCheckbox.prototype.add = function (value, label, classes) {
  label || (label = value);

  var checkbox = new Checkbox(this, this.name, value, label);

  this.el.appendChild(checkbox.el);
  this.checkboxes.push(checkbox);

  if (classes) {
    checkbox.el.classList.add.call(checkbox.el.classList, classes);
  }

  return checkbox;
};

StupidCheckbox.prototype.value = function () {
  return this.checkboxes
    .filter(function (checkbox) {
      return checkbox.isChecked();
    })
    .map(function (checkbox) {
      return checkbox.value();
    });
};

StupidCheckbox.prototype.clear = function () {
  this.checkboxes.forEach(function (checkbox) {
    checkbox.remove();
  });
};
