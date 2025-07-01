const creditValue = document.querySelector("#amount");
const currentAmount = document.querySelector("#amount-value");
const period = document.querySelector("#period");
const resultPeriod = document.querySelector("#period-value");
const resultAmount = document.getElementById("result-amount");
const resultPercent = document.getElementById("result-percent");
let value = 0;
let wholeAmount = 0;
let periodRange = 1;
let interest = 0;
creditValue.addEventListener("input", () => {
  value = creditValue.value;
  currentAmount.innerHTML = value;
  wholeAmount = parseInt(value) + (value * interest) / 100;
  resultAmount.innerHTML = wholeAmount;
  console.log(typeof value);
});
period.addEventListener("input", () => {
  periodRange = period.value;
  resultPeriod.innerHTML = periodRange;
  if (periodRange >= 24) {
    interest = 8;
  } else if (periodRange > 18) {
    interest = 8.5;
  } else if (periodRange > 12) {
    interest = 9;
  } else if (periodRange > 6) {
    interest = 9.5;
  } else {
    interest = 10;
  }
  wholeAmount = parseInt(value) + (value * interest) / 100;
  resultAmount.innerHTML = wholeAmount;
  resultPercent.innerHTML = interest;
});
