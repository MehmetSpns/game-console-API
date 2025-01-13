const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const gameRoutes = require('./routes/gameRoutes');
const consoleRoutes = require('./routes/consoleRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/games', gameRoutes);
app.use('/api/consoles', consoleRoutes);

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
