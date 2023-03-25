function changeIcon(name1, name2, name3, name4) {
    document.getElementById(name1).src = "images/" + name1 + "-orange.png";
    document.getElementById(name2).src = "images/" + name2 + "-black.png";
    document.getElementById(name3).src = "images/" + name3 + "-black.png";
    document.getElementById(name4).src = "images/" + name4 + "-black.png";
}


function openTab(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.border = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.borderBottom = "2px solid rgb(32, 32, 32)";
    
}

function onload() {
  document.getElementById("home").src = "images/" + "home" + "-orange.png";
  const start = localStorage.getItem('begin');
  if (start == "smart" || start == "user" || start == "scenario") {
    let el = document.getElementById("body");
    el.classList.add('left');
  } else {
    let el = document.getElementById("body");
    el.classList.add('same');
  }
  localStorage.clear();
  document.getElementById("defaultOpen").click;
  document.getElementById("defaultOpen").style.borderBottom = "2px solid rgb(32, 32, 32)";
  document.getElementById("home").src = "images/" + "home" + "-orange.png";
  document.getElementById("body").style.visibility = "visible";
}


function openPage(begin, dest) {
  const start = begin;
  const end = dest;
  localStorage.setItem('begin', start);
  localStorage.setItem('dest', end);
  if (dest == "user" || dest == "smart" || dest == "scenario") {
    window.location.href = "pages/" + dest + "/index.html";
  } else {
    window.location.href = "index.html";
  }
}
