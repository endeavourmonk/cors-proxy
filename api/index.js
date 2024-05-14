const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const { createServer } = require('http');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors()); // Enable All CORS Requests
app.use(helmet()); // securing req headers
app.use(morgan('tiny')); // setup the logger
app.use(express.json({ limit: '30kb' })); // Parse incoming requests with JSON payloads.

app.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Hello World!',
    data: {
      link: 'https://github.com/endeavourmonk/cors-proxy/blob/master/README.md',
    },
    timestamp: new Date().toLocaleString(),
  });
});

app.get('/fetch', async (req, res, next) => {
  try {
    let url = '';
    for (key in req.query) {
      url += key + '=' + req.query[key] + '&';
    }

    url = url.slice(0, -1);
    // console.log(url);

    const result = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });

    const data = await result.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      code: 500,
      message: 'failed fetching data',
      data: {
        link: 'https://github.com/endeavourmonk/cors-proxy/blob/master/README.md',
      },
      error,
      timestamp: new Date().toLocaleString(),
    });
  }
});

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'failed',
    message: 'Route not found',
    code: 500,
    data: {
      link: 'https://github.com/endeavourmonk/cors-proxy/blob/master/README.md',
    },
    timestamp: new Date().toLocaleString(),
  });
});

// Global error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    code: err.status || 500,
    data: {
      link: 'https://github.com/endeavourmonk/cors-proxy/blob/master/README.md',
    },
    timestamp: new Date().toLocaleString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
