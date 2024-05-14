# CORS Proxy API

This is a simple CORS Proxy API built with Node.js and Express.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository: `git clone https://github.com/endeavourmonk/cors-proxy`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and set your environment variables (e.g., `PORT`)

## Running the Server

Run the server using the following command:

```bash
npm start
```

## API Endpoints

- `GET /api/cors-proxy/`: Returns Hello World!
- `GET /api/cors-proxy/fetch`: Fetches data from a provided URL. The URL should be passed as query parameters.

## Build With

- Node.js
- Express
- Helmet
- express-mongo-sanitize

### Error Handling

The API includes a global error handler for handling all errors that occur while running the server.

### Authors

Ujjawal Kumar

### License

This project is licensed under the MIT License.
