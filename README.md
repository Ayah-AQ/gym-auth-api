# Gym Auth API

The Gym Auth API is a backend application that provides authentication and authorization functionality for a gym management system. It is built using Node.js, Express.js, and Sequelize as the ORM for interacting with the PostgreSQL database. The API supports user signup and signin functionality, allowing users to create an account and authenticate themselves using basic authentication or bearer token authentication. It includes middleware functions for handling user permissions and protecting routes based on user roles. The API also provides endpoints for accessing gym-related data such as equipment, food, schedules, and trainers, with appropriate access controls in place. The application follows a modular structure, with separate files for models, routes, middleware, and error handling. The codebase incorporates best practices such as input validation, password hashing, and error handling.

## API Documentation

The Gym Auth API provides the following endpoints:

- `POST /signup`: Create a new user account.
- `POST /signin`: Authenticate user credentials and generate a token.
- `GET /api/v1/`: Get a list of gym-related data (equipment, food, schedules, trainers).
- `GET /api/v2/`: Get an extended list of gym-related data (requires admin role).
- `GET /api/v1/secret`: Access a protected route (requires bearer token authentication).


## PR
[Link to Pull Requests](https://github.com/Ayah-AQ/gym-auth-api/pulls)

## Deployed
[https://gym-g9bh.onrender.com](https://gym-g9bh.onrender.com).

