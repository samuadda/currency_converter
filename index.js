const axios = require("axios");

// Get the exchange rate
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get("https://data.fixer.io/api/latest?access_key=a525e3c427c392d71766204d6ca9e0e0&format=1");

    const rates = response.data.rates;
    const baseRate = 1 / rates[fromCurrency];
    const exchangeRate = baseRate * rates[toCurrency];

    return exchangeRate;
};

// Get the countries that use a specific currency
const getCountries = async currencyCode => {
    const response = await axios.get(`https://restcountries.com/v3.1/all?fields=name,currencies`);

    // Filter countries that use the target currency
    const countriesUsingCurrency = response.data
        .filter(country => {
            return country.currencies && country.currencies[currencyCode];
        })
        .map(country => country.name.common); // Get the common name of the country

    return countriesUsingCurrency;
};

// Convert currency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. ${toCurrency} is used in the following countries: ${countries.join(", ")}`;
};

// Calling the converter
convertCurrency("USD", "SAR", 50)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
