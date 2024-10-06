# Currency Converter Project

## Project Overview

This project is a **currency converter** that allows users to convert a specific amount between two currencies. It uses **two APIs** to fetch the latest exchange rates and the details of currencies, such as their symbols. The primary purpose of this project was to practice **async/await** functions in JavaScript and handle API requests effectively.

## Features

- Converts a specified amount from one currency to another.
- Fetches the latest exchange rates using the **Fixer.io API**.
- Retrieves currency symbols and additional details using the **REST Countries API**.
- Handles asynchronous requests with **async/await**.

## Technologies Used

- **Vanilla JavaScript**: Core functionality, async/await practice.
- **Node.js**: JavaScript runtime environment.
- **Axios**: Promise-based HTTP client to handle API requests.
- **Fixer.io API**: To retrieve the latest exchange rates.
- **REST Countries API**: To get currency details and country-specific information.

## APIs Used

1. **Fixer.io API**:
   - Endpoint: `https://data.fixer.io/api/latest`
   - Purpose: Fetches the most up-to-date exchange rates.

2. **REST Countries API**:
   - Endpoint: `https://restcountries.com/v3.1/name/{country}`
   - Purpose: Retrieves currency information (such as the currency symbol) for specific countries.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:
   ```bash
    cd your-repo-name


3. Install the required dependencies (Axios in this case):
   ```bash
    npm install axios
   
4. Run the project: Since this is a simple JavaScript project, you can use Node.js to run the script directly:
   ```bash
   node index.js

## Usage

1. Open the project and modify the convertCurrency function to input the desired fromCurrency, toCurrency, and amount.

2. The program will display the converted amount as well as details about the target currency (such as the symbol).

3. Example call:
 ```JavaScript
  convertCurrency("USD", "SAR", 50)
```

4.The output will display the converted amount from USD to SAR, as well as relevant details about the Saudi Riyal.

## Project Structure
```bash
├── node_modules/     # Contains installed project dependencies
├── index.js          # Main project file containing async/await logic
├── package.json      # Lists dependencies and project metadata
├── package-lock.json # Locks the installed versions of dependencies
└── README.md         # Project documentation
```

## Learning Goals
This project was created to practice the following concepts:

- Async/Await: Handling asynchronous operations effectively without callback hell.
- API integration: Working with external APIs to fetch data.
- Axios: Making HTTP requests with a clean and readable interface.

## Future Enhancements
- Add more error handling for network issues or invalid currency codes.
- Add a user interface (UI) to make the currency converter more interactive for users.
- Implement unit tests to ensure the accuracy of conversions.

  ## License
This project is open source and available under the MIT License.

