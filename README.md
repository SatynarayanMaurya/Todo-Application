# Todo Application



Description

This is a Todo application that allows users to manage their tasks efficiently. Users can log in with their email and password, and their session is saved in localStorage. Without logging in, users cannot create or manage todos. Once logged in, users can create, delete, and mark todos as completed or important. Todos are categorized into incomplete and completed sections, ensuring easy task management. All todos are saved in localStorage, so they persist even after the user refreshes the page or returns later. The application also features a logout functionality that clears the user's session and returns them to the home page.

#Features

User Authentication: Users must log in with an email and password to access the todo functionalities.

#Todo Management:

Create new todos

Delete existing todos

Mark todos as completed

Mark todos as important

#Todo Organization:

Incomplete todos are displayed at the top.

Completed todos are moved to a separate section at the bottom.

Persistent Storage: All todos are saved in localStorage, ensuring they persist across sessions.

Logout Functionality: Users can log out, which removes their email from localStorage and redirects them to the home page.

Private Route: Ensures that only authenticated users can access the todo management route.

#Technologies Used

Frontend: React.js

State Management: useState, useEffect

Icons: react-icons

Storage: localStorage

#Installation

Navigate to the project directory:

cd todo-app

Install the dependencies:

npm install

Start the development server:

npm start

#Usage

Open the application in your browser at http://localhost:3000.

Log in using your email and password.

Navigate to the /todos route to manage your tasks.

Create, delete, or mark your todos as completed or important.

Log out when done to clear your session.

#Components

Login: Handles user authentication.

TodoList: Displays the list of todos.

TodoItem: Represents a single todo item with options to mark as completed or important.

PrivateRoute: Ensures routes are accessible only to logged-in users.

#LocalStorage Structure

email: Stores the logged-in user's email.

todos: Stores the array of todos, each with properties such as id, task, completed, and important.

#Future Enhancements

Add support for user registration.

Implement a backend for storing todos on a server.

Add due dates and reminders for todos.

Improve the UI/UX with additional styling and animations.

#Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

#License

This project is licensed under the MIT License. See the LICENSE file for details.

#Acknowledgments

Inspired by various task management applications.

Thanks to the React and open-source community for their contributions.

#Contact

For any questions or suggestions, please reach out at satynaryanmaurya989@gmail.com.


