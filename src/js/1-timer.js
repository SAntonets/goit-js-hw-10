import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;

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


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  static: true,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    userSelectedDate = selectedDate;

    if (selectedDate < new Date()) {
      // Вибрана дата в минулому
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      document.querySelector('[data-start]').disabled = true;
    } else {
      // Вибрана валідна дата
      document.querySelector('[data-start]').disabled = false;
    }
  },
};


flatpickr("#datetime-picker", options);

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

document.querySelector('[data-start]').addEventListener('click', () => {
  document.querySelector('[data-start]').disabled = true;

  const intervalId = setInterval(() => {
    const timeDiff = userSelectedDate - new Date();

    if (timeDiff <= 0) {
      clearInterval(intervalId);
      updateTimerUI(0, 0, 0, 0);
      iziToast.success({
        title: 'Success',
        message: 'Countdown complete!',
      });
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDiff);
      updateTimerUI(days, hours, minutes, seconds);
    }
  }, 1000);
});

function updateTimerUI(days, hours, minutes, seconds) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

