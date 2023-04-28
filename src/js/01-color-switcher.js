function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const btnStart = document.querySelector('[data-start]');
  const btnStop = document.querySelector('[data-stop]');

  btnStart.addEventListener('click', onBtnStart);
  btnStop.addEventListener('click', onBtnStop);

  btnStop.setAttribute('disabled', 'disabled');

  function randomBodyColor () {
    document.body.style.background = getRandomHexColor();
  };

    let intervalId;

  function onBtnStart () {
    intervalId = setInterval(randomBodyColor, 1000);
    btnStart.setAttribute('disabled', 'disabled');
    btnStop.removeAttribute('disabled');
  };

  function onBtnStop () {
    clearInterval(intervalId);
    btnStop.setAttribute('disabled', 'disabled');
    btnStart.removeAttribute('disabled');
  };
