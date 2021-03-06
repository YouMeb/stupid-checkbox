'use strict';

module.exports = Checkbox;

function Checkbox(stupid, name, val, label) {
  var input = document.createElement('input');
  var text = document.createTextNode(label);
  var el = this.el = document.createElement('li');

  input.type = 'checkbox';
  input.name = name;
  input.value = val;

  this.el.appendChild(input);
  this.el.appendChild(text);
  this.input = input;
  this.stupid = stupid;

  input.addEventListener('change', this.change.bind(this));
}

Checkbox.prototype.change = function () {
  if (this.input.checked) {
    this.el.classList.add('is-checked');
  } else {
    this.el.classList.remove('is-checked');
  }
  this.stupid.emit('change', this);
};

Checkbox.prototype.check = function () {
  this.input.checked = true;
  this.change();
  return this;
};

Checkbox.prototype.uncheck = function () {
  this.input.checked = false;
  this.change();
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

Checkbox.prototype.remove = function () {
  var index = this.stupid.checkboxes.indexOf(this);

  if (!~index) {
    return;
  }

  this.el.remove();
  this.stupid.checkboxes.splice(index, 1);
};
