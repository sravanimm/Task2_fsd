const client = require('./connectDB');

const runContestantTable = client.query("CREATE TABLE IF NOT EXISTS contestants (id INT AUTO_INCREMENT PRIMARY KEY, email varchar(255) UNIQUE NOT NULL, fullname VARCHAR(200) NOT NULL, party VARCHAR(200) NOT NULL, state VARCHAR(200), reg_time VARCHAR(100) NOT NULL);", (err, res) =>
{
    console.log(err, res);
});

module.exports = runContestantTable;