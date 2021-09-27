var sql = require('mysql')
var connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

})
connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('MySQL connected')
    }
})
module.exports = connection;