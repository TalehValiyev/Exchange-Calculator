let iusd = document.querySelector(".i-usd");

let orub = document.querySelector(".o-rub");

let input1 = document.querySelector(".input1");

let input2 = document.querySelector(".input2");

let leftbtns = document.querySelectorAll(".input button");

let rightbtns = document.querySelectorAll(".output button");

let span1 = document.querySelector(".span1");

let span2 = document.querySelector(".span2");

let base = "USD";

let simbol = "AZN";

let inputvalue;

let result;
let rate;

fetchData(base, simbol).then((data) => {
  span2.innerText = ` ${simbol}: ${data}`;
  rate = data;
});

leftbtns.forEach((item) => {
  item.addEventListener("click", () => {
    leftbtns.forEach((e) => {
      e.classList.remove("active");
    });
    base = item.innerText;

    item.classList.add("active");
    fetchData(base, simbol).then((data) => {
      inputvalue = input1.value;
      input2.value = (data * inputvalue).toFixed(2);
      span1.innerText = ` ${base}:${data}`;
      rate = data;
    });
  });
});

rightbtns.forEach((item) => {
  item.addEventListener("click", () => {
    rightbtns.forEach((e) => {
      e.classList.remove("active");
    });

    simbol = item.innerText;

    item.classList.add("active");
    fetchData(base, simbol).then((data) => {
      inputvalue = input1.value;
      input2.value = (data * inputvalue).toFixed(2);
      span2.innerText = ` ${simbol}:${data}`;
      rate = data;
    });
  });
});

input1.addEventListener("input", function () {
  console.log(this.value);
  this.value = this.value
    .replace(",", ".")
    .replace(/[^0-9,.]/g, "")
    .replace(/^00+/, "0");
  let input2data = rate * this.value;
  input2.value = input2data.toFixed(2);
});

input2.addEventListener("input", function () {
  console.log(this.value);
  this.value = this.value
    .replace(",", ".")
    .replace(/[^0-9,.]/g, "")
    .replace(/^00+/, "0");
  let input1data = this.value / rate;
  input1.value = input1data.toFixed(2);
});
