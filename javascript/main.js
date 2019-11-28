
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  console.log("Here");
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-5em";
  }
  prevScrollpos = currentScrollPos;
}
