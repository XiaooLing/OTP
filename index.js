let numbers = [1, 2, 3, 4, 5, 7, 8 ,9]

let num1 = Math.floor(Math.random() * numbers.length)
let num2 = Math.floor(Math.random() * numbers.length)
let num3 = Math.floor(Math.random() * numbers.length)
let num4 = Math.floor(Math.random() * numbers.length)
let num5 = Math.floor(Math.random() * numbers.length)
let num6 = Math.floor(Math.random() * numbers.length)

let input = document.getElementById("input")
let submit = document.getElementById("submit")

let all = `${num1}${num2}${num3}${num4}${num5}${num6}`
let button = document.getElementById("button")
let output = document.getElementById("output")
button.addEventListener('click',
function () {
output.innerText = `Your OTP is : ${all}`
});

submit.addEventListener('click',
function () {
  if (input.value == all) {
    output.innerText = "Correct OTP"
  }
  else {
    output.innerText = "Incorrect OTP"
  }
});
