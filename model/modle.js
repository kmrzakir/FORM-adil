import mongoose from 'mongoose';
const UserSchema= new mongoose.Schema({     

Name:{type:String,},
  Email:{type:String,},
  Phone:{type:String,},
  Address:{type:String,},
},
{
  timestamps:true
});
const User=mongoose.model('User',UserSchema);
export default User;