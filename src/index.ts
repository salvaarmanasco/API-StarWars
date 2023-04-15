import app from "./app";
import "./database";
const port = 3000;

/**
 * Connection to the database and server uprising.
 */
app.listen(port);
console.log("Server on port ", port);
