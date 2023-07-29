const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const SYSTEM = 'SYSTEM :';
const validator = require('validator');

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
  const { email, temat, wiadomosc } = req.body;

  if (!validator.isEmail(email)) {
      res.json({ message: `${ SYSTEM } E-mail jest nieprawidłowy` });  
      return;  
    }
  if (!email||!wiadomosc) {
    res.json({ message: `${ SYSTEM } Uzupełnij Dane` });
    return;
  }

  const query = 'INSERT INTO messages (msg_user_id, msg_temat, msg_wiadomosc) VALUES (?, ?, ?)';
  db.query(query, [email, temat, wiadomosc], (error, result) => {
    if (error) {
      res.status(500).json({ message: `${ SYSTEM } Błąd podczas zapisywania wiadomości.` });
    } else {
      res.json({ message: `${ SYSTEM } Wiadomość została pomyślnie wysłana.` });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});