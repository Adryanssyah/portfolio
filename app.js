let parentDiv = document.querySelector('.isi');
let childElements = parentDiv.children;
let body = document.querySelector('body');

const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme);

const radios = document.querySelectorAll('input[name="menu"]');
const a = document.querySelectorAll('a');
radios.forEach((radio) => {
     radio.addEventListener('click', function () {
          let radioVal;
          radioVal = radio.value;
          document.getElementById('toggle').checked = false;
          for (let i = 0; i < childElements.length; i++) {
               let classes = childElements[i].classList;
               for (let j = 1; j < 2; j++) {
                    if (radioVal == classes[j]) {
                         childElements[i].classList.add('show');
                    } else {
                         childElements[i].classList.remove('show');
                    }
               }
          }
     });
});

a.forEach((a) => {
     a.addEventListener('click', function () {
          let radioVal;
          var al = this.getAttribute('href');
          let tab = al.split('#')[1];
          console.log(tab);
          document.getElementById(tab).checked = true;
          for (let i = 0; i < childElements.length; i++) {
               let classes = childElements[i].classList;
               for (let j = 1; j < 2; j++) {
                    if (classes[j] == tab) {
                         childElements[i].classList.add('show');
                    } else {
                         childElements[i].classList.remove('show');
                    }
               }
          }
     });
});

const radios2 = document.querySelectorAll('input[name="theme"]');
radios2.forEach((radio2) => {
     radio2.addEventListener('click', function () {
          let radioVal;
          radioVal = radio2.value;
          body.setAttribute('class', '');
          body.classList.add(radioVal);
          setTheme(radioVal);
     });
});

function setTheme(theme) {
     localStorage.setItem('theme', theme);
     document.documentElement.setAttribute('data-theme', theme);
}
