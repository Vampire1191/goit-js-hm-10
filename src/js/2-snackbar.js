import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(document.querySelector('input[name="delay"]').value);
  const state = document.querySelector('input[name="state"]:checked').value;

  console.log(`Delay: ${delay}`);
  console.log(`State: ${state}`);

  createPromise(delay, state)
    .then(ms => {
      console.log(`✅ Fulfilled promise in ${ms}ms`);
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${ms}ms`,
      });
    })
    .catch(ms => {
      console.log(`❌ Rejected promise in ${ms}ms`);
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${ms}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}