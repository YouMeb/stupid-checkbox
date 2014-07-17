'use strict';

module.exports = Checkbox;

function Checkbox(name, val, label) {
  var input = document.createElement('input');
  var text = document.createTextNode(label);
  var el = this.el = document.createElement('li');

  input.type = 'checkbox';
  input.name = name;
  input.value = val;

  this.el.appendChild(input);
  this.el.appendChild(text);
  this.input = input;

  input.addEventListener('change', function () {
    if (input.checked) {
      el.classList.add('is-checked');
    } else {
      el.classList.remove('is-checked');
    }
  });
}

Checkbox.prototype.check = function () {
  this.input.checked = true;
  this.el.classList.add('is-checked');
  return this;
};

Checkbox.prototype.uncheck = function () {
  this.input.checked = false;
  this.el.classList.remove('is-checked');
  return this;
};

Checkbox.prototype.toggle = function () {
  this.input.checked = !this.input.checked;
  return this;
};

Checkbox.prototype.isChecked = function () {
  return this.input.checked;
};

Checkbox.prototype.value = function () {
  return this.input.value;
};
