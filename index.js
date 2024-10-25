const express = require('express');
const path = require('path');
const app = express();

// Set folder statis (misal: public atau src) untuk menyajikan file HTML
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk halaman /my-wa
app.get('/my-wa', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'my-wa.html'));
});

// Menjalankan server di port 4000
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
