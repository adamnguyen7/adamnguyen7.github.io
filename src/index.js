window.onscroll = function () { myFunction(), myFunction2(); };

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = `${scrolled}%`;
window.onscroll = function () {
  myFunction(), myFunction2();
};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
let p = 0;
document.getElementById('myBtn').addEventListener('click', () => {
  p++;
  const element = document.body;
  element.classList.toggle('dark-mode');
  const x = document.getElementsByClassName('title');
  const m = document.getElementsByClassName('text1');
  let i;
var p = 0;
document.getElementById('myBtn').addEventListener('click', function () {
  p++;
  var element = document.body;
  element.classList.toggle('dark-mode');
  var x = document.getElementsByClassName('title');
  var m = document.getElementsByClassName('text1');
  var i;
  if (p % 2 == 1) {
    document.getElementById('myBtn').className = 'button is-black';
    document.getElementById('myBtn').innerHTML = 'Light Mode';
    for (i = 0; i < x.length; i++) {
      x[i].style.color = 'purple';
    }
    for (i = 0; i < m.length; i++) {
      m[i].style.color = 'purple';
    }
  } else {
    document.getElementById('myBtn').className = 'button is-white';
    document.getElementById('myBtn').innerHTML = 'Dark Mode';

    for (i = 0; i < x.length; i++) {
      x[i].style.color = '#363636';
    }
    for (i = 0; i < m.length; i++) {
      m[i].style.color = '#363636';
    }
  }
})})}