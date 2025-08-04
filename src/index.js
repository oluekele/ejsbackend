// api/index.js
import express from 'express';
// import serverless from 'serverless-http';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5020;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Adjust path

app.use(express.urlencoded({ extended: false }));

// Middleware
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('homepage', { title: 'Home Page' });
});

app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  res.render('submit', { name, email });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// ✅ EXPORT AS SERVERLESS FUNCTION
// export const handler = serverless(app);
