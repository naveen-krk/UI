calculator = {
  add: function (value1, value2) {
    if (this.validate(value1, value2)) {
      return parseFloat(value1) + parseFloat(value2);
    } else {
      return "Enter a valid number";
    }
  },
  sub: function (value1, value2) {
    if (this.validate(value1, value2)) {
      return parseFloat(value1) - parseFloat(value2);
    } else {
      return "Enter a valid number";
    }
  },
  mul: function (value1, value2) {
    if (this.validate(value1, value2)) {
      return parseFloat(value1) * parseFloat(value2);
    } else {
      return "Enter a valid number";
    }
  },
  div: function (value1, value2) {
    if (this.validate(value1, value2)){
      return parseFloat(value1) / parseFloat(value2);
    } else {
      return "Enter a valid number";
    }
  },
  validate: function (value1, value2) {
    if (typeof value1 === "string" || typeof value2 === "string") {
      return false;
    } else {
      return true;
    }
  },
};
value1 = parseFloat(window.prompt("Enter the first value"))
value2 = parseFloat(window.prompt("Enter the second value"));
choice = parseInt(
  window.prompt(
    "choose the option 1.Addition 2.Subtraction 3.Multiplication 4.Division"
  )
);
switch (choice) {
  case 1:
    console.log(calculator.add(value1, value2));
    break;
  case 2:
    console.log(calculator.sub(value1, value2));
    break;
  case 3:
    console.log(calculator.mul(value1, value2));
    break;
  case 4:
    if (value2 == 0) {
      console.log("Infinity");
      break;
    }
    console.log(calculator.div(value1, value2));
    break;
  default:
    console.log("Enter a valid choice");
}
