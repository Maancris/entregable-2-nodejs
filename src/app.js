//importabamos express
const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/initmodel');
const Users = require('./models/users.model');

const app = express();
app.use(express.json())

const PORT = 8000;

//probanso la conexion a la base de dato
db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error))

initModels();

db.sync({ alter: false })//sincronizar la base de datos
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));
//
app.get('/', (req, res) => {
  res.status(200).json({ message: "Bienvenido al sevidor" });
})

//obtener usuario por id
app.get('users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//buscar con username
app.get('users/username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = iannacus
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//creamos un usario
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});



// actualizar un usuario, solo podemos cambiar password
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // { id: 2 }
    const field = req.body;
    const result = await Users.update(field, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});


//eliminar un usuario id

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});


app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});


app.get('/users', async (req, res) => {
  try {
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }

})