const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const morgan = require('morgan');
const express = require('express');
const helmet = require('helmet');

const { createServer } = require('http');

const PORT = process.env.PORT || 8000;
const app = express();
const server = createServer(app);

// securing req headers
app.use(helmet());

// setup the logger
app.use(morgan('tiny'));

// Parse incoming requests with JSON payloads.
app.use(express.json({ limit: '30kb' }));

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello World!',
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
      message: 'failed',
      error,
    });
  }
});

app.all('*', (req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

// Global error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
