# CORS Proxy API

This CORS proxy API is designed to bridge the gap between your frontend application and 3rd-party APIs that have CORS restrictions. It acts as an intermediary, allowing your frontend to make requests to these APIs without encountering CORS (Cross-Origin Resource Sharing) errors.

## Production Link

[https://cors-proxyy.vercel.app/](https://cors-proxyy.vercel.app/)

## How It Works ?

1. **Frontend Request:** Your frontend application makes a request to this proxy API endpoint.
2. **Proxy Forwards:** The proxy API receives the request and forwards it (including any headers) to the desired 3rd-party API.
3. **Response Retrieval:** The proxy captures the response from the 3rd-party API.
4. **CORS Fix (Optional):** If necessary, the proxy modifies the response headers to include the appropriate Access-Control-Allow-\* headers, allowing your frontend to access the data.
5. **Frontend Response:** The proxy forwards the processed response back to your frontend application.

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
npm dev
```

## API Endpoints

- `GET /`: Returns Hello World!
- `GET /fetch`: Fetches data from a provided URL. The URL should be passed as query parameters.

## Build With

- Node.js
- Express
- CORS
- Helmet
- Morgan

### Error Handling

The API includes a global error handler for handling all errors that occur while running the server.

### Authors

Ujjawal Kumar

### License

This project is licensed under the MIT License.
