import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      allCurrencies: {},
      euros: {"EUR": 1},
      newAmount: 0,
      convertedAmount: 0,
      startCurrency: 1,
      endCurrency: 1
    },
    mounted(){
      this.getCurrency()
    },
    methods: {
      getCurrency: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.allCurrencies = data.rates)
      },
      convertMoney: function() {
        this.convertedAmount = this.newAmount / this.startCurrency * this.endCurrency
      }
    }
  });
});
