import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector("input[name=delay]"),
  inputDelayStep: document.querySelector("input[name=step]"),
  inputAmount: document.querySelector("input[name=amount]"),
  button: document.querySelector("button"),
};

refs.button.addEventListener("click", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delayFirst = Number(refs.inputDelay.value);
  const delayStep = Number(refs.inputDelayStep.value);
  const amountAll = Number(refs.inputAmount.value);

  creatPromiseFor({ delayFirst, amountAll, delayStep })
  
};

function creatPromiseFor({delayFirst, amountAll, delayStep}) {
  for (let i = 1; i <= amountAll; i += 1)
    {
      createPromise(i, delayFirst).
        then(({ position, delay }) => { succes({ position, delay }); }).
        catch((({ position, delay }) => { failure({ position, delay }); }));
    delayFirst += delayStep;
  };
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
  if (shouldResolve) {
  resolve({ position, delay })
  } else {
  reject({ position, delay }) 
    }  
  })
};
  
function succes({ position, delay }) {
  setTimeout(() => { Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); }, delay);
};
function failure({ position, delay }) {
  setTimeout(() => { Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); }, delay);
}

