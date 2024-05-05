const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const alumnosRoutes = require('./routes/alumnosRoutes');
const tutoresRoutes = require('./routes/tutoresRoutes');
const materiasRoutes = require('./routes/materiasRoutes');

app.use(bodyParser.json());

app.use('/alumnos', alumnosRoutes);
app.use('/tutores', tutoresRoutes);
app.use('/materias', materiasRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
