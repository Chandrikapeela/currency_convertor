function convert() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Define exchange rates (manually or use a more sophisticated source)
    var exchangeRates = {
        'USD': {
            'USD': 1,
            'EUR': 0.85,
            'INR': 74.85,
            'KRW': 1150.16,
            'JPY': 109.83,
            'CNY': 6.46
        },
        'EUR': {
            'USD': 1.18,
            'EUR': 1,
            'INR': 88.38,
            'KRW': 1355.13,
            'JPY': 129.06,
            'CNY': 7.61
        },
        'INR': {
            'USD': 0.013,
            'EUR': 0.011,
            'INR': 1,
            'KRW': 15.34,
            'JPY': 14.60,
            'CNY': 0.86
        },
        'KRW': {
            'USD': 0.00087,
            'EUR': 0.00074,
            'INR': 0.065,
            'KRW': 1,
            'JPY': 9.51,
            'CNY': 0.056
        },
        'JPY': {
            'USD': 0.0091,
            'EUR': 0.0078,
            'INR': 0.068,
            'KRW': 0.105,
            'JPY': 1,
            'CNY': 0.059
        },
        'CNY': {
            'USD': 0.15,
            'EUR': 0.13,
            'INR': 1.16,
            'KRW': 17.92,
            'JPY': 16.99,
            'CNY': 1
        }
    };

    // Calculate converted amount
    var rate = exchangeRates[fromCurrency][toCurrency];
    var convertedAmount = amount * rate;

    // Display result
    document.getElementById('result').textContent = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
}
