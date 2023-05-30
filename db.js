//Connnects us to MONGODB
const mongoose = require("mongoose");

const mongooseConnect = async () => {
  try {
    console.log("Hello line 6 db.js");
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { mongooseConnect };
