# React Health Benefits Application

This is a React-based web application that helps users explore various health benefits related to specific diseases and nutrients. The app is structured using React Router for navigation and contains the following pages:

- **HomePage**: The main landing page.
- **Disease Specific Health Benefits**: A page focused on health benefits for various diseases.
- **Nutrient Specific Pairings**: A page detailing health pairings based on specific nutrients.
- **FAQ**: A page providing answers to frequently asked questions.
- **Myth**: A page dedicated to debunking common health myths.

## Features

- **Responsive Navigation**: Easy-to-use navigation menu with React Router to switch between pages.
- **Active Links**: The navigation links highlight when active, providing clear feedback to users.
- **Footer**: A footer component that stays consistent across pages.

## Project Structure

- **`src/`**: Contains all the source code files.
  - **`pages/`**: Contains different React components for individual pages (`HomePage`, `DiseaseSpecificHealthBenefits`, `NutrientSpecificPairings`, `FAQ`, and `Myth`).
  - **`Footer.js`**: The footer component used across all pages.
  - **`App.css`**: Custom styles for the application.
  - **`App.js`**: Main application file where routing and page structure are set up.

## Setup

To get started with this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/roshanG-dev/health-app.git
   cd health-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

   This will start the app on `http://localhost:3000/` by default.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: A library for handling routing within the React app.
- **CSS**: For styling the app, with custom styles in `App.css`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 