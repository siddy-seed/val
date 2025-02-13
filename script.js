function moveRandomEl(ele) {
    ele.style.position = "absolute";
    ele.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    ele.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#nomove");
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });