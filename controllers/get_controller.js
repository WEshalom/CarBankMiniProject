exports.getGets = (req, res) => {
    res.json({
        gets:[
            { title: 'first get' },
            { title: 'second get' }
        ]
    });
};

exports.getGetsFromDB = (req, res) => {
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost',
        database: 'SchoolDB'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
};