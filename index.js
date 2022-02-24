// For Time, Greetings, Name and Focus
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  yourName = document.getElementById("name"),
  focus = document.getElementById("focus");

const showAmPm = true;

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  const amPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../images/morningBG.jpg')";
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../images/afternoonBG.jpg')";
    greeting.textContent = "Good Afternoon, ";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundImage = "url('../images/eveningBG.jpg')";
    greeting.textContent = "Good Evening, ";
    document.body.style.color = "white";
  }
}

yourName.addEventListener("keypress", setName);
yourName.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Get & Set Name
function getName() {
  if (localStorage.getItem("yourName") === null) {
    yourName.textContent = "[Enter Name]";
  } else {
    yourName.textContent = localStorage.getItem("yourName");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("yourName", e.target.innerText);
      yourName.blur();
    }
  } else {
    localStorage.setItem("yourName", e.target.innerText);
  }
}

// Get & Set Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

showTime();
setBgGreet();
getName();
getFocus();

// For Todo List
const addToDoButton = document.getElementById("addToDo");
const toDos = document.getElementById("toDos");
const inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add;
  paragraph.innerText = inputField.value;
  toDos.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDos.removeChild(paragraph);
  });
});

// For Random Quotes
document.querySelector("#generate").addEventListener("click", generate);

function generate() {
  const quotes = {
    "- Carol Burnett":
      "“When you have a dream, you’ve got to grab it and never let go.”",
    "- Winston Churchill":
      '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    "- Oprah Winfrey":
      '"You define your own life. Don’t let other people write your script."',
    "- Malala Yousafzai":
      '"You are never too old to set another goal or to dream a new dream."',
    "- Lady Gaga":
      '"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."',
    "- Mandy Hale":
      '"You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."',
    "- Aristotle":
      '"It is during our darkest moments that we must focus to see the light."',
    "- Marie Forleo":
      '"Not having the best situation, but seeing the best in your situation is the key to happiness."',
    "- Earl Nightingale":
      '"All you need is the plan, the road map, and the courage to press on to your destination."',
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}
