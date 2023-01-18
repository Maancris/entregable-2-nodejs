//importabamos express
const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/initmodel');
const userRoutes = require ('./routes/users.routes');
const todosRoutes = require ('./routes/todos.routes');
const cors = require('cors');
const authRoutes = require ('./routes/auth.routes.js');
require( 'dotenv').config();

console.log(process.env.PORT)

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

//probanso la conexion a la base de dato
db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error))

initModels();

db.sync({ force: false })//sincronizar la base de datos
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));
//
app.get('/', (req, res) => {

  res.status(200).json({ message: "Bienvenido Al servidor" })
});

app.use ('/api/v1', userRoutes);
app.use ('/api/v1', todosRoutes);
app.use ('/api/v1', authRoutes);


app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`)
});