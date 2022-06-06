const refs = {
    start: document.querySelector("button[data-start]"),
    stop: document.querySelector("button[data-stop]"),
    body: document.querySelector("body"),
    timerId: null,
};
const timeForInterval = 1000;


refs.start.addEventListener("click", onClickStart);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onClickStart() {
    refs.start.disabled = true;
    refs.stop.disabled = false;
    refs.timerId = setInterval(() => {
    const getRandomColor = getRandomHexColor();
    refs.body.style.backgroundColor= getRandomColor;
    // console.log("Привет");
}, timeForInterval);
};

refs.stop.addEventListener("click", onStopClick)
function onStopClick() {
    refs.stop.disabled = true;
    refs.start.disabled = false;
    if (refs.timerId) {
        clearInterval(refs.timerId)
    };
};


