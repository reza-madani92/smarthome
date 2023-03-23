function onload() {
  document.getElementById("smart").src = "images/" + "smart" + "-orange.png";
  const start = localStorage.getItem('begin');
  if (start == "home") {
    let el = document.getElementById("body");
    el.classList.add('right');
  } else if (start == "user") {
    let el = document.getElementById("body");
    el.classList.add('left')
  } else if (start == "scenario") {
    let el = document.getElementById("body");
    el.classList.add('left')
  } else {
    let el = document.getElementById("body");
    el.classList.add('same')
  }
  localStorage.clear();
  document.getElementById("body").style.visibility = "visible";
}


function openPage(begin, dest) {
  const start = begin;
  const end = dest;
  localStorage.setItem('begin', start);
  localStorage.setItem('dest', end);
  if (dest == "home") {
    window.location.href = "../../index.html";
  } else {
    window.location.href = "../" + dest + "/index.html";
  }
}