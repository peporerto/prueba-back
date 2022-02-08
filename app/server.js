const express = require('express');
const app = express();
const morgan = require("morgan");
const { connection } = require('./database/db'); 
/**
 * Setting
 */
const PORT = process.env.PORT || 3000;

/**
 * Middleware
 *  */ 
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/**
 * Rutas
 */

app.use(require('./routes'));


/**
 * handling errors
 */

app.use((err, req, res, next) => {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  });


/**
 * para poder arrancar el servidor 
 * 
 */

app.listen(PORT, function () {
    console.log(`La app esta en el puerto  http://localhost:${PORT}`);
/**
 * base de datos  
 * 
 */
    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});