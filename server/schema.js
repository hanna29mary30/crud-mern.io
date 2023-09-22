import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment"
const userschema = mongoose.Schema({
  id: Number,
  email: String,
  first_name: String,
  last_name: String,
  ip: String,
  latitude: String,
  longitude: String,
  created_at: String,
  updated_at: String,
});
// autoIncrement.initialize(mongoose.connection);
// userschema.plugin(autoIncrement.plugin,'user');
const user = mongoose.model("user", userschema);

export default user;
