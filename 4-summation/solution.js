let visitorNumber = Number(prompt("Choose a number please!"));
let sum = 0;
if (visitorNumber < 0) {
  alert("the given number was negative and can't be calculated");
} else {
  for (let i = 0; i <= visitorNumber; i++) {
    sum = sum + i;
  }
  alert("The Sum is = " + sum);
}
