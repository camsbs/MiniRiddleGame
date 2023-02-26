function playGame() {
    let userName = document.getElementById("nameInput").value;
    let answer = prompt(
      "The more you take, the more you leave behind. What am I?"
    );
    if (answer === "footsteps") {
      alert("Well done, " + userName + "! You got it right!");
    } else {
      alert(
        "Sorry, " +
          userName +
          ", that is incorrect. The correct answer is footsteps."
      );
    }
    answer = prompt("What goes up but never comes down?");
    if (answer === "Age") {
      alert("Great job, " + userName + "! You got it right!");
    } else {
      alert(
        "Sorry, " +
          userName +
          ", that is incorrect. The correct answer is Age."
      );
    }
    answer = prompt("What has a thumb and four fingers but is not alive?");
    if (answer === "a glove") {
      alert("Great job, " + userName + "! You got it right!");
    } else {
      alert(
        "Sorry, " +
          userName +
          ", that is incorrect. The correct answer is a glove."
      );
    }
    alert("Thanks for playing, " + userName + "!");
  }