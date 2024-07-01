const currencyNames = {
  USD: "US Dollar",
  EUR: "European Euro",
  CNY: "Chinese Yuan",
  RUB: "Russian Ruble"
};

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const apiKey = "your_api_key"; // Replace with your actual API key

  try {
      const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apiKey=${apiKey}`
      );
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const result = amount * rate;

      document.getElementById("result").innerText = `${result.toFixed(2)}`;
  } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      document.getElementById("result").innerText =
          "Error fetching exchange rate.";
  }
}

document.querySelector('.arrow').addEventListener('click', convertCurrency);

document.getElementById('fromCurrency').addEventListener('change', function() {
  const selectedCurrency = this.value;
  document.querySelector('.base .name').innerText = currencyNames[selectedCurrency];
  convertCurrency();
});

document.getElementById('toCurrency').addEventListener('change', function() {
  const selectedCurrency = this.value;
  document.querySelector('.converted .name').innerText = currencyNames[selectedCurrency];
  convertCurrency();
});
