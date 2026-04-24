const express = require('express');
const app = express();

app.use(express.json());

const personajesRoutes = require('./routes/personajes');
const batallaRoutes = require('./routes/batalla');

app.use('/api/personajes', personajesRoutes);
app.use('/api/batalla', batallaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});