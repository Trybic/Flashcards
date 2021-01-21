const theme = document.querySelectorAll('.theme');
const themeButton = document.querySelector('.navbar__button');
const btnDay = document.querySelector('.btn-day');
const btnNight = document.querySelector('.btn-night');

function changeBtnTheme() {
  btnNight.classList.toggle('hidden');
  btnDay.classList.toggle('hidden');
}

function changePageTheme() {
  theme.forEach((elements) => {
    elements.classList.toggle('dark');
    elements.classList.toggle('light');
  });
}

themeButton.onclick = () => {
  if (localStorage.nightMode !== 'active') {
    localStorage.nightMode = 'active';
    changeBtnTheme();
    changePageTheme();
  } else {
    localStorage.nightMode = '';
    changeBtnTheme();
    changePageTheme();
  }
};

document.body.onload = () => {
  if (localStorage.flashCards) {
    document.querySelector('.delete').classList.toggle('hidden');
  }

  if (localStorage.nightMode !== 'active') {
    btnDay.classList.toggle('hidden');
    btnNight.classList.toggle('visible');
    theme.forEach((elements) => {
      elements.classList.remove('dark');
    });
  } else {
    btnDay.classList.toggle('visible');
    btnNight.classList.toggle('hidden');
    theme.forEach((elements) => {
      elements.classList.add('dark');
    });
  }
};
