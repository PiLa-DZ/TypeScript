class DB {
  connect() {
    console.log("Connected to MariaDB");
  }
}

function initialize1(conn: InstanceType<typeof DB>) {
  conn.connect();
}

const myDB = new DB();

initialize1(myDB); // ✅ Works perfectly

// ------------------------------------------------------------
// Like this using Generic
function initialize2<T extends DB>(conn: T) {
  conn.connect();
}
initialize2(myDB); // ✅ Works perfectly
