import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencyRates: {},
      amountToConvert: 1,
      selectedCurrencyCode: "",
      convertedAmount: 0
    },

    mounted: function() {
      this.fetchRates()
    },

    methods: {
      fetchRates: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currenciesData => this.currencyRates = currenciesData.rates)
      },

      convert: function () {
        this.convertedAmount = this.amountToConvert * this.currencyRates[this.selectedCurrencyCode]
      },

    }
  
})
});