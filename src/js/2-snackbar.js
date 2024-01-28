// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


document.getElementById("promiseForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateInput = document.querySelector('input[name="state"]:checked');

  const delay = parseInt(delayInput.value, 10);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput.value === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: "Fulfilled promise",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Rejected promise",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
