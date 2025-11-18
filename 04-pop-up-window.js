/*alert window*/

document.getElementById("alertBtn").addEventListener("click", () => {
  alert("This is an alert! It just shows a message.");
});

/*confirm window*/

document.getElementById("confirmBtn").addEventListener("click", () => {
  const answer = confirm("Do you Wante to continue?");
  const output = document.getElementById("output");

  if (answer) {
    output.textContent = "You clicked OK.";
  } else {
    output.textContent = "you clicked Cancel.";
  }
});

/*prompt window*/

document.getElementById("promptBtn").addEventListener("click", () => {
  const name = prompt("what is your name?");
  const output = document.getElementById("output");

  if (name === null || name.trim() === "") {
    output.textContent = "No name entered.";
  } else {
    output.textContent = "Hello, ${name}!";
  }
});

/*Custom Pop-Up*/

document.getElementById("customBtn").addEventListener("click", () => {
  const answer = confirm("Do you like the color blue?");
  const output = document.getElementById("output");

  if (answer) {
    output.textContent = "c:";
  } else {
    output.textContent = "You don't like blue. :c";
  }
});
