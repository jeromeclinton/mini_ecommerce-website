const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MD_URL).then((con) => {
    console.log("MongoDB Connected to host: " + con.connection.host);
  });
};

module.exports = connectDatabase;
