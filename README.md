# Todo API

A RESTful API for managing todo items with user authentication.

## Features

- User authentication (Register/Login)
- JWT-based authorization
- CRUD operations for todos
- User-specific todo management

## API Routes

### Authentication Routes (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
- **Description**: Register a new user
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: JWT token and user data

#### Login User
- **POST** `/api/auth/login`
- **Description**: Login existing user
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: JWT token and user data

### Todo Routes (`/api/todos`)

All todo routes require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

#### Get All Todos
- **GET** `/api/todos`
- **Description**: Get all todos for the authenticated user
- **Response**: Array of todo objects

#### Create Todo
- **POST** `/api/todos`
- **Description**: Create a new todo
- **Body**:
  ```json
  {
    "task": "string",
    "completed": boolean // optional, defaults to false
  }
  ```
- **Response**: Created todo object

#### Update Todo
- **PUT** `/api/todos/:id`
- **Description**: Update an existing todo
- **Params**: `id` - Todo ID
- **Body**:
  ```json
  {
    "task": "string",
    "completed": boolean
  }
  ```
- **Response**: Updated todo object

#### Delete Todo
- **DELETE** `/api/todos/:id`
- **Description**: Delete a todo
- **Params**: `id` - Todo ID
- **Response**: Success message

## Todo Schema

```javascript
{
  task: String,        // required
  completed: Boolean,  // defaults to false
  user: ObjectId      // references User model
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. To access protected routes:

1. Register or login to get a JWT token
2. Include the token in the Authorization header:
   ```
   Authorization: Bearer <your-token>
   ```

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Environment Variables

Create a `.env` file with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
