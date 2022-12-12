function fetchData(base, simbol) {
  return fetch(
    `https://api.exchangerate.host/latest?base=${base}&symbols=${simbol}`
  )
    .then((response) => response.json())
    .then((data) => data.rates[simbol].toFixed(2));
}
