const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Student123', {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'None', 
    secure:true
  });
  res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  res.send(`Cookie Retrieved! Username: ${username}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
