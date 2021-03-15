let operator = prompt(
  "Which operator do you wanna use? Please use +,-,*,/ as valid operators"
);

if (operator === "+") {
  let Number1 = Number(prompt("Pleas type in your first Number"));
  let Number2 = Number(prompt("Please type in your seccon Number"));
  alert(`${Number1 + Number2}`);
} else if (operator === "-") {
  let Number1 = Number(prompt("Pleas type in your first Number"));
  let Number2 = Number(prompt("Please type in your seccon Number"));
  alert(`${Number1 - Number2}`);
} else if (operator === "*") {
  let Number1 = Number(prompt("Pleas type in your first Number"));
  let Number2 = Number(prompt("Please type in your seccon Number"));
  alert(`${Number1 * Number2}`);
} else if (operator === "/") {
  let Number1 = Number(prompt("Pleas type in your first Number"));
  let Number2 = Number(prompt("Please type in your seccon Number"));
  alert(`${Number1 / Number2}`);
} else operator === "exit";
alert("See ya!");
