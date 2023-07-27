const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'skynet'
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  const { email, temat, wiadomosc } = req.body;
  console.log(req.body);
  const query = 'INSERT INTO messages (msg_user_id, msg_temat, msg_wiadomosc) VALUES (?, ?, ?)';
  
  db.query(query, [email, temat, wiadomosc], (error, result) => {
    if (error) {
      console.log("ERROR"+error);
      res.status(500).json({ message: 'Błąd podczas zapisywania wiadomości.' });
      console.log("ERROR"+message);
    } else {
      res.json({ message: 'Wiadomość została pomyślnie zapisana.' });
      console.log("ERROR"+message);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});