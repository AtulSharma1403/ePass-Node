const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfTravelling: { type: Date, required: true },
  allocatedDays: {
    type: Number,
    required: true,
  },
  purpose: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("travelData", travelSchema);
