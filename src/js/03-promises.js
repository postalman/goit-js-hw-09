import Notiflix from 'notiflix';

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const submitEl = document.querySelector('[type="submit"]');

submitEl.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const firstDelay = delayEl.value;
  const delayStep = stepEl.value;
  const amount = amountEl.value;

  let position = 0;
  let delay = +firstDelay;

  setTimeout(() => {
    const timerId = setInterval(() => {
      position += 1;
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      delay += +delayStep;
      if (position === +amount) {
        clearInterval(timerId);
      }
    }, delayStep);
  }, delay);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
