# CryptoPlace

CryptoPlace is a cryptocurrency application built with Vite and React, providing users with detailed information and historical data about various cryptocurrencies. Users can log in as a guest to access the application.

## Features

- View detailed information about various cryptocurrencies.
- Access historical data and view charts for selected cryptocurrencies.
- User authentication with the option to log in as a guest.

## Technologies Used

- **Frontend:**
  - [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [React Router](https://reactrouter.com/): A library for routing in React applications.

- **Backend:**
  - [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.

- **User Authentication:**
  - [Passport.js](http://www.passportjs.org/): An authentication middleware for Node.js.
  - [passport-local](http://www.passportjs.org/packages/passport-local/): Passport strategy for authenticating with a username and password.
  - [passport-google-oauth20](http://www.passportjs.org/packages/passport-google-oauth20/): Passport strategy for authenticating with Google OAuth 2.0.
  - [Express-Session](https://www.npmjs.com/package/express-session): Middleware for managing sessions in Express.


## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cryptoplace.git
   cd cryptoplace
2. Install dependencies for the frontend:

    ```bash
    cd frontend
    npm install
3. Install dependencies for the backend:

    ```bash
    cd ../backend
    npm install
4. Create a .env file in the backend directory and add your API key and session secret:

    ```bash
    VITE_API_KEY=your_coingecko_api_key
    SESSION_SECRET=your_session_secret
5. Run the backend server:

    ```bash
    cd backend
    node server.js
6. Run the frontend development server:

    ```bash
    cd frontend
    npm run dev
7. Open your browser and navigate to http://localhost:5173

### Usage

- Use the Home Page to explore different cryptocurrencies.
- Click on any cryptocurrency to view its details and historical data.
- Log in as a guest to access details of any cryptocurrency.


