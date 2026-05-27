const countryCodes = {
  USD: "US",
  INR: "IN", 
  EUR: "FR", 
  GBP: "GB", 
  AUD: "AU", 
  CAD: "CA", 
};

const apiKey = "e759f92560e41c99ee6213a2";

const dropdowns = document.querySelectorAll("form select"),
      fromDropdown = document.querySelector(".currency-from select"),
      toDropdown = document.querySelector(".currency-to select"),
      convertButton = document.querySelector("form button");

// Populate currency dropdowns
dropdowns.forEach((dropdown, index) => {
  for (let code in countryCodes) {
    const isSelected = (index === 0 && code === "USD") || (index === 1 && code === "INR") ? "selected" : "";
    dropdown.insertAdjacentHTML("beforeend", `<option value="${code}" ${isSelected}>${code}</option>`);
  }

  dropdown.addEventListener("change", (e) => updateFlag(e.target));
});

// Update flag based on selected currency
function updateFlag(selectElement) {
  const code = selectElement.value;
  const imgTag = selectElement.parentElement.querySelector("img");
  imgTag.src = `https://flagcdn.com/48x36/${countryCodes[code].toLowerCase()}.png`;
}

// Get elements and add listeners
document.querySelector("form .switch-icon").addEventListener("click", () => {
  const temp = fromDropdown.value;
  fromDropdown.value = toDropdown.value;
  toDropdown.value = temp;
  updateFlag(fromDropdown);
  updateFlag(toDropdown);
  fetchExchangeRate();
});

convertButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchExchangeRate();
});

window.addEventListener("load", fetchExchangeRate);

// Fetch exchange rate and update display
function fetchExchangeRate() {
  const amountInput = document.querySelector("form input");
  const rateDisplay = document.querySelector(".rate-display");
  let amount = amountInput.value;

  if (amount === "" || amount === "0") {
    amount = 1;
    amountInput.value = "1";
  }

  rateDisplay.innerText = "Fetching exchange rate...";
  const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromDropdown.value}`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rates[toDropdown.value];
      const converted = (amount * rate).toFixed(2);
      rateDisplay.innerText = `${amount} ${fromDropdown.value} = ${converted} ${toDropdown.value}`;
    })
    .catch(() => {
      rateDisplay.innerText = "Error fetching data.";
    });
}