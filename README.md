# FlashCard Final Project GUI

## Description
This project is a FlashCard application with a graphical user interface that allows users to create, manage, and review flashcards organized into decks. It is built using Node.js with Express for the backend, PostgreSQL for the database, and EJS templating for the frontend views.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd FlashCardFinalProjectGUI
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a database.
   - Run the SQL schema and seed files if available (e.g., `all.sql`).

4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add your database connection string and other necessary environment variables.

## Usage

1. Start the application:
   ```
   node app.js
   ```
   or if you have a start script:
   ```
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Use the web interface to create decks, add flashcards, and manage them.

## Project Structure

- `app.js` - Main application entry point.
- `config/` - Configuration files including database connection.
- `controllers/` - Express route handlers and business logic.
- `models/` - Database query functions for decks and flashcards.
- `public/` - Static files such as CSS.
- `routes/` - Express route definitions.
- `views/` - EJS templates for rendering HTML pages.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- EJS templating
- CSS for styling

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.
