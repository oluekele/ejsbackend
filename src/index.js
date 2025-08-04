import express from 'express';

const app = express();
const PORT = process.env.PORT || 5020;

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
const middleware = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
}

app.use(middleware);

// app.get('/', (req, res) => {
//   res.send(`<div> <h1>Welcome to the Home Page!<h1><a href="/homepage">Login</a></div>`);
// })

app.get('/', (req, res) => {
  res.render('homepage', { title: 'Home Page' });
});
app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  console.log('Form submitted successfully!');
  res.render('submit', { name, email });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 