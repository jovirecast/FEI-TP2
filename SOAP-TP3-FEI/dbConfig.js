import mysql from "mysql2/promise";

// Configuración de base de datos
export const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ikmtyfei"
});
