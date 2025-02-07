// server.js
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Middleware to log every request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    if (Object.keys(req.query).length) {
      console.log(`  Query Params:`, req.query);
    }
    if (Object.keys(req.body).length) {
      console.log(`  Body:`, req.body);
    }
    next();
  });

// Handle GET /preparedata/{job_id}
app.get('/preparedata/:job_id', (req, res) => {
    res.json({
      request_uri: req.originalUrl,
      request_parameters: req.query,
      job_id: req.params.job_id
    });
  });

// Handle POST /preparedata
app.post('/preparedata', (req, res) => {
    res.json({
      request_uri: req.originalUrl,
      request_parameters: req.query,
      request_body: req.body
    });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
