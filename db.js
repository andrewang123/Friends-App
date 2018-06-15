
var mysql = require('mysql');

var pool;

exports.connect = function ConnectionHandler(done){
    pool = mysql.createPool({
        host: "localhost",
        user: "anga",
        password: "agna",
        database: "employees"
    });
    done();
}

exports.get = function GetHandler(){
    return pool;
}

