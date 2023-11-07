const sql = require('mssql');
//esto ya lo tenes que tener confurado en sqlserver
const config = {
  user: '<srodriguez>',
  password: '<mYR7*6ybGVfc>',
  server: '<solcomp-tests.database.windows.net>', // Puedes usar 'localhost' si SQL Server está en tu máquina.
  database: '<srodriguez-test>',
  options: {
    encrypt: false, // Establece como 'true' si estás usando una conexión segura (por ejemplo, con Azure SQL).
  },
};


const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

poolConnect.then(() => {
  console.log('Conexión a SQL Server exitosa');
}).catch((err) => {
  console.error('Error de conexión:', err);
});