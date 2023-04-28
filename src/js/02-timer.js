import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
btnStart.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
};

flatpickr('input#datetime-picker', options);

btnStart.addEventListener('click', onBtnStart);

function onBtnStart() {
  const countdownDate = new Date(datePicker.value).getTime();

  const countdownInterval = setInterval(() => {
    const now = Date.now();
    console.log(now);
    const distance = countdownDate - now;
    if (distance < 0) {
      clearInterval(countdownInterval);
    } else {
      textClock(convertMs(distance));
    }
  }, 1000);
}

function textClock({ days, hours, minutes, seconds }) {
  daysEl.textContent = mathCount(days);
  hoursEl.textContent = mathCount(hours);
  minutesEl.textContent = mathCount(minutes);
  secondsEl.textContent = mathCount(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function mathCount(value) {
  return String(value).padStart(2, '0');
}
