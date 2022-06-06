import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    button: document.querySelector("button[data-start]"),
    timer: document.querySelector(".timer"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
    seconds: document.querySelector("span[data-seconds]"),
    input: document.querySelector("input#datetime-picker"),
    currentData:null,
}
const START_KEY = "key-data-stsrt"

refs.days.textContent += ':';
refs.hours.textContent += ':';
refs.minutes.textContent += ':';

refs.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      // console.log(selectedDates[0].getTime());
      const currentData = Date.now();
      // console.log(currentData);
    if (currentData < selectedDates[0].getTime()) {
      refs.button.disabled = false;
      sessionStorage.setItem(START_KEY, selectedDates[0].getTime()); 

      return;
    } else {
     Notiflix.Notify.warning('Please choose a date in the future');
    };
  },
};

const fp = flatpickr(refs.input, options);

refs.button.addEventListener("click", () => { timer.start() });

const timer = {
  intervalId: null,
  start() {
      this.intervalId = setInterval(() => {
      
      const intervalTime = Date.now();
        const deltaTime = sessionStorage.getItem(START_KEY) - intervalTime;
        if (deltaTime >= 0) {
          const timeComponets = convertMs(deltaTime);
          updateClockFace(timeComponets);
        } else {
          clearInterval(this.intervalId);
          sessionStorage.removeItem(START_KEY);
        } 
       }, 1000);
  },
 
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addingZeroToNumber(Math.floor(ms / day));
  const hours = addingZeroToNumber(Math.floor((ms % day) / hour));
  const minutes = addingZeroToNumber(Math.floor(((ms % day) % hour) / minute));
  const seconds = addingZeroToNumber(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addingZeroToNumber(value) {
  return String(value).padStart(2, '0');
}