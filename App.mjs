//core module
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// const { hostRouter } = require('./rotes/host.js');
import { hostRouter } from './rotes/host.js';
import { userRouter } from './rotes/user.js';
import path, { dirname } from 'path';
import express from 'express';
import connectDB from './db.js';
// const rooPath = require('./utils/path.js');
import rooPath from './utils/path.js';

const app = express();

app.use(userRouter); // home page kei liya ha yei 
app.use(express.urlencoded()); // Replaced bodyParser with express
app.use(hostRouter);

app.use(express.static(path.join(rooPath, "public"))); //css

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My App</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>Welcome to My App</header>
      <div class="container">
        <!-- Your content here -->
      </div>
    </body>
    </html>
  `);
});

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(rooPath, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  connectDB();
  console.log("MongoDB connected successfully"); // Fixed typo in "successfully"
  console.log(`Server is running on address http://localhost:${PORT}`); // Fixed "adrsess" and corrected URL format
});

