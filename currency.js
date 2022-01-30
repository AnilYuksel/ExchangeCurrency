class Currency {
  constructor(firstMoney, secondMoney) {
    this.firstMoney = firstMoney;
    this.secondMoney = secondMoney;

    this.url =
      "http://api.exchangeratesapi.io/v1/latest?access_key=37bf95d17ed1f58af30d7e3591f648f0&format=1";

    this.inputAmount = this.inputAmount;
  }

  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          const money = data.rates[this.secondMoney];
          const money2 = Number(this.inputAmount);
          let final = money * money2;
          resolve(final);
        });
    }).catch((err) => reject(err));
  }

  changeAmount(inputAmount) {
    this.inputAmount = inputAmount;
  }

  changeSecondMoney(newSecondMoney) {
    this.secondMoney = newSecondMoney;
  }
}
