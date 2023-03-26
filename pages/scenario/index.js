function onload() {
  document.getElementById("scenario").src = "images/" + "scenario" + "-orange.png";
  const start = localStorage.getItem('begin');
  let el = document.getElementById("body");
  el.classList.add('right');
  let el1 = document.getElementById("scene");
  el1.classList.add('same');
  localStorage.clear();
  document.getElementById("body").style.visibility = "visible";
  document.getElementById("scene").style.visibility = "visible";
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