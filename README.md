# React API App

This is a simple React app that interacts with an API to perform email verification and user authentication. It demonstrates how to manage API calls with `axios`, handle errors, and display user-friendly messages. The app uses the `POST` method to send verification and authentication data to a local server.

## Features
- **Email Verification**: Allows the user to input an email address and receive a verification code.
- **User Authentication**: Allows the user to input credentials and a verification code to log in.
- **Error Handling**: Displays detailed error messages for server errors and network timeouts.
- **Timeout Handling**: Handles slow responses from the API by increasing the timeout duration for requests.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (for running the development server)
- [npm](https://www.npmjs.com/) (for managing dependencies)

### Setting up the Backend (API)
Make sure that your API server is up and running at `http://localhost:3458/api`. The app expects two API endpoints:
- **Verification endpoint**: `POST /verification` to verify the email.
- **Authentication endpoint**: `POST /authentication` to authenticate the user with email, password, and verification code.

Ensure the server is correctly configured to accept requests from `http://localhost:3000` (the default React app port) and handles CORS properly.

---

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/your-username/react-api-app.git
cd react-api-app

### 2. Install Dependencies
Navigate to the project folder and install the required dependencies using npm:

```bash
npm install
```

This will install all the necessary libraries, including React, axios, and others.

### 3. Set Up Your API Base URL
Ensure that the backend API server is running at http://localhost:3458. If your server is on a different port, update the base URL in the src/config/apiConfig.js file:

```javascript
const apiConfig = {
  base_url: 'http://localhost:3458/api',  // Modify this URL if your API is running on a different port or URL
};
```

### 4. Start the Development Server
Once the dependencies are installed and the backend API server is set up, you can start the development server:

```bash
npm start
```
This will start the React development server, and the app will be accessible at http://localhost:3000 by default.

### Usage
Enter your email: On the main page, you will see a form where you can input your email address for verification.
Verify your email: Once you submit the email, the app will make a request to the verification API endpoint, and a verification message will be displayed if the email is verified successfully.
Authenticate: After email verification, you will be prompted to enter a password and verification code. Once you submit the form, it will make a request to the authentication API endpoint.
View the Response: If authentication is successful, you'll see the user's access token and other details.
Error Handling
Timeout Errors: The app has a 10-second timeout for API requests. If the server takes longer than this to respond, a timeout error will be shown.
Server Errors: If the server returns an error (such as a 500 Internal Server Error or 400 Bad Request), the app will display the appropriate message.
Network Errors: If there is no network connection or other issues with the API, the app will show a generic error message.


### Files of Interest:
src/components/Verification.js: Handles email verification.
src/components/AuthenticationForm.js: Handles user authentication.
src/config/apiConfig.js: Contains the base URL for API calls.
src/App.js: The main component where the app logic resides.

### Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Ensure that you follow the style and include tests where appropriate.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Troubleshooting
If the app doesn't load: Ensure your backend API is running and accessible. The frontend app relies on the API being available at http://localhost:3458/api.
Timeout errors: If you experience timeouts, ensure that the API is not under heavy load and is responsive. You can also increase the timeout in the axios configuration if needed.
