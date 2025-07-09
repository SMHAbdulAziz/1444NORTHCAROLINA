# Landing Page App

This project is a simple landing page application designed to collect visitor information through a form. The application is built using React and includes a professional design that aligns with the specified requirements.

## Project Structure

```
landing-page-app
├── public
│   ├── index.html        # Main HTML document for the landing page
│   └── logo.png          # Logo image displayed above the form
├── src
│   ├── App.js            # Main entry point of the React application
│   ├── components
│   │   └── LeadForm.js   # Component for the lead form
│   ├── styles
│   │   └── main.css      # CSS styles for the landing page
│   └── utils
│       └── sendEmail.js  # Utility for sending email with form data
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Features

- **Form Fields**: Collects visitor's full name, email, and phone number. All fields are required.
- **Email Submission**: Upon form submission, the data is sent to `1444northcarolina@houselotandland.org` with the subject "1444 N CAROLINA Lead Submission".
- **Redirection**: After successful submission, users are redirected to a specified URL.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd landing-page-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the landing page.

## Usage

- Fill out the form with the required information.
- Click the submit button to send your details.
- You will be redirected to the property tour page after submission.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.