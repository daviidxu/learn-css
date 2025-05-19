const itemList = document.querySelectorAll("li");

function toggleItem(event) {
  if (!event.target.className) {
    event.target.className = "done";
  } else {
    event.target.className = "";
  }
}

itemList.forEach((item) => {
  item.addEventListener("click", toggleItem);
});

const myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");

myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
