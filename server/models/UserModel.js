const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  
  phoneNumber: {
    type: String,
    required: [true, "Your phonenumber is required"],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  // Add more fields as needed for user profile
});

// Hash password before saving to database
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("Userss", userSchema);
