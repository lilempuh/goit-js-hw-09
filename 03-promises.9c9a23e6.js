function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var u=i("eWCmQ");const l={inputDelay:document.querySelector("input[name=delay]"),inputDelayStep:document.querySelector("input[name=step]"),inputAmount:document.querySelector("input[name=amount]"),button:document.querySelector("button")};function r(e,t){return new Promise(((n,o)=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))}function a({position:t,delay:n}){setTimeout((()=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}),n)}function d({position:t,delay:n}){setTimeout((()=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}),n)}l.button.addEventListener("click",(function(e){e.preventDefault();let t=Number(l.inputDelay.value);const n=Number(l.inputDelayStep.value),o=Number(l.inputAmount.value);!function({delayFirst:e,amountAll:t,delayStep:n}){for(let o=1;o<=t;o+=1)r(o,e).then((({position:e,delay:t})=>{a({position:e,delay:t})})).catch((({position:e,delay:t})=>{d({position:e,delay:t})})),e+=n}({delayFirst:t,amountAll:o,delayStep:n})}));
//# sourceMappingURL=03-promises.9c9a23e6.js.map
