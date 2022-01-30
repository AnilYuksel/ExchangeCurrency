const amountinput = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");

const currency = new Currency("EUR","TRY");

const ui = new UI(firstCurrency, secondCurrency)

eventListener();

function eventListener() {
  amountinput.addEventListener("input", currencyConverter);

  secondCurrency.onchange = function () {
    currency.changeSecondMoney(
      secondCurrency.options[secondCurrency.selectedIndex].textcontent
    );
    ui.changeSecond()
  };
}



function currencyConverter() {
  currency.changeAmount(amountinput.value);

  currency
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err));
}
