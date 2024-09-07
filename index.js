const conversionBtn = document.getElementById("conversion-btn");
const input = document.getElementById("input");

let lengthEl = document.getElementById("p-length");
let volumeEl = document.getElementById("p-volume");
let massEl = document.getElementById("p-mass");

function convert() {
  let num = Number(input.value);

  let feet = (((num / 3.281) * 1000) / 1000).toFixed(3);
  let meters = ((num * 3.281 * 1000) / 1000).toFixed(3);

  let gallons = (((num / 3.785) * 1000) / 1000).toFixed(3);
  let liters = ((num * 3.785 * 1000) / 1000).toFixed(3);

  let pounds = ((num * 2.205 * 1000) / 1000).toFixed(3);
  let kilos = (((num / 2.205) * 1000) / 1000).toFixed(3);

  lengthEl.innerHTML = `${num} meters = ${meters} feet | ${num} feet = ${feet} meters`;
  volumeEl.innerHTML = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`;
  massEl.innerHTML = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`;
}
