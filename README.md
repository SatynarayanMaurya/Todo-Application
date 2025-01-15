# Todo Application

A simple Todo application where users can manage their tasks efficiently. Users must log in with their email and password to access the application, and all tasks are stored in `localStorage` to ensure they persist across sessions.

## Features

- **User Authentication**: Secure login system using email and password.
- **Todo Management**:
  - Add new todos.
  - Delete existing todos.
  - Mark todos as completed or important.
- **Task Organization**: 
  - Incomplete todos are displayed at the top.
  - Completed todos are moved to a separate section.
- **Persistent Storage**: All data is stored in `localStorage`.
- **Logout Functionality**: Clears session data and returns the user to the home page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
Optimizes the build for the best performance.

### `npm run test`

Launches the test runner in the interactive watch mode.

## Usage

1. **Login**: Users must log in with an email and password.
2. **Manage Todos**: Navigate to `/todos` to create, delete, and manage your tasks.
3. **Logout**: Click logout to end your session and clear your login information from `localStorage`.

## LocalStorage Structure

- `email`: Stores the user's email for session management.
- `todos`: Stores the user's todos with properties like `id`, `task`, `completed`, and `important`.

## Future Enhancements

- Mobile responsiveness improvements.
- Accessibility features for enhanced user experience.
- Add due dates and reminders for tasks.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please reach out at satynarayanmaurya989@gmail.com.
