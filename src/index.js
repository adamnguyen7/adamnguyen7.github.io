const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = `${scrolled}%`;
}

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
// eslint-disable-next-line func-names
window.onscroll = function () {
  // eslint-disable-next-line no-sequences, no-unused-expressions
  myFunction(), myFunction2();
};

let p = 0;
document.getElementById('myBtn').addEventListener('click', () => {
  p += 1;
  const element = document.body;
  element.classList.toggle('dark-mode');
  const x = document.getElementsByClassName('title');
  const m = document.getElementsByClassName('text1');
  let i;
  if (p % 2 === 1) {
    document.getElementById('myBtn').className = 'button is-black';
    document.getElementById('myBtn').innerHTML = 'Light Mode';
    for (i = 0; i < x.length; i += 1) {
      x[i].style.color = 'purple';
    }
    for (i = 0; i < m.length; i += 1) {
      m[i].style.color = 'purple';
    }
  } else {
    document.getElementById('myBtn').className = 'button is-white';
    document.getElementById('myBtn').innerHTML = 'Dark Mode';

    for (i = 0; i < x.length; i += 1) {
      x[i].style.color = '#363636';
    }
    for (i = 0; i < m.length; i += 1) {
      m[i].style.color = '#363636';
    }
  }
});
