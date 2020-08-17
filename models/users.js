const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  active: { type: Boolean, require: true },
  email: { type: String, require: false },
});
// model(exportName, schema, collectionName)
module.exports = mongoose.model("UsersModel", usersSchema, "misc");
