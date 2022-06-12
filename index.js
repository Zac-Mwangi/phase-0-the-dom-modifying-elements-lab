function removeMain() {
  const main = document.getElementById("main");
  main.remove();
}

removeMain();

const newHeader = document.createElement("h1");
newHeader.id = "victory";

// The innerText property would technically work as well; however, the tests won't pass if you use this approach
newHeader.innerHTML = "ZACK is the champion";

