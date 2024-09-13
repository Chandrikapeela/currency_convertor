# Currency Converter

## Overview

The Currency Converter is a simple web application that allows users to convert an amount from one currency to another. The application provides a user-friendly interface where you can enter an amount, select the source and target currencies, and then see the converted amount.

## Features

- **Amount Input**: Enter the amount you wish to convert.
- **Currency Selection**: Choose the source currency and the target currency from a predefined list.
- **Conversion Button**: Click to perform the currency conversion.
- **Result Display**: View the converted amount after conversion.

## Installation

To set up and run the Currency Converter application, follow these steps:

1. **Download or Clone the Repository**

   You can download the source code as a ZIP file or clone the repository using Git:
   ```bash
   git clone https://github.com/Chandrikapeela/currency_convertor.git
   ```

2. **Navigate to the Project Directory**

   Change to the project directory:
   ```bash
   cd currency-converter
   ```

3. **Set Up Dependencies**

   There are no external dependencies for this project. It uses standard HTML, CSS, and JavaScript.

4. **Open the Application**

   Open the `index.html` file in a web browser to view and use the application:
   ```bash
   open index.html
   ```

## Usage

1. **Enter Amount**: Input the amount you wish to convert in the "Amount" field.
2. **Select Currencies**: Choose the source currency from the "From" dropdown and the target currency from the "To" dropdown.
3. **Convert**: Click the "Convert" button to perform the conversion.
4. **View Result**: The converted amount will be displayed in the "Result" section.

## Code Explanation

- **HTML**: Defines the structure of the currency converter interface.
  - `input` for entering the amount.
  - `select` elements for choosing currencies.
  - `button` to trigger the conversion.
  - `div` to display the result.

- **CSS**: (In `style.css`) Used for styling the user interface. Customize this file to change the appearance of the application.

- **JavaScript**: (In `script.js`) Handles the conversion logic. Implement the conversion functionality in this file.

## Example

Here’s a brief example of how the conversion might be implemented in `script.js`:

```javascript
function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    // Example conversion rates
    const rates = {
        'USD': 1,
        'EUR': 0.85,
        'INR': 82.73,
        'KRW': 1335.20,
        'JPY': 148.23,
        'CNY': 7.19
    };
    
    const result = (amount * rates[toCurrency] / rates[fromCurrency]).toFixed(2);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}
```



**Note:** For real-world applications, you would typically fetch live exchange rates from an API instead of using static rates.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact peelachandrika@gmail.com

---

