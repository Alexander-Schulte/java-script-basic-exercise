alert("Hello Dear Visitor");
let visitorName = prompt("What´s your Name?");
let visitorAge = Number(prompt("What is your year of birth?"));
let age = 0;

if (Number.isNaN(visitorAge)) {
  alert("type your year of Birth in numbers please");
}

if (!Number(visitorAge)) {
  visitorAge = 2021;
}

age = 2021 - visitorAge;
alert(age);
let myAge = 22;

if (age < 10) {
  alert(
    "You are too young for this " +
      visitorName +
      ". Come back when you are older"
  );
} else if (10 <= age && age < 18) {
  let parentWithYou = confirm("Do you have an adult with you?");
  if (parentWithYou === true) {
    alert(
      "Welcome to my super website" +
        visitorName +
        ". Good, that you are not alone here!"
    );
  } else if (parentWithYou === false)
    alert(
      "You are too young for this" +
        visitorName +
        ". You need an adult next to you to continue."
    );
} else if (age >= 18 && age != myAge) {
  alert("Welcome to my super website " + visitorName);
}

if (age === myAge) {
  alert("We are the same age!");
}
