class UI {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;

    this.outputSecond = document.getElementById("outputSecond");
    this.outputResult = document.getElementById("outputResult");
  }

  changeSecond() {
    this.outputSecond.textContent =this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent;
  }

  displayResult(result){
    this.outputResult.value = result
  }
}
