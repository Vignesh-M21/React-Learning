function NewNumber() {
  this.number = 0;
}

NewNumber.prototype.valueOf = function () {
  return this.number;
};

/**
 * @param number number
 */
NewNumber.prototype.setValue = function (number) {
  this.number = number;
};

const intiger = new NewNumber();

console.log({ intiger: intiger + intiger });
