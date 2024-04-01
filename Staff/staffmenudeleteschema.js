var mongoose = require("mongoose");
var staffmenudelete = new mongoose.Schema({
  foodid: { type: mongoose.Types.ObjectId, required: true, ref: "menuschema" }
});
module.exports = new mongoose.model("staffmenudelete", staffmenudelete);
