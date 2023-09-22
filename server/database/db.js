import mongoose from "mongoose"
const  Connection = async() =>{
const  URL=`mongodb://hanna29mary30:mongodb123@ac-cbj0e2l-shard-00-00.eijwjdg.mongodb.net:27017,ac-cbj0e2l-shard-00-01.eijwjdg.mongodb.net:27017,ac-cbj0e2l-shard-00-02.eijwjdg.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-8x0nfe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`;
try{
   await mongoose.connect(URL,{useunifiedTopology:true, useNewUrlParser:true});
   console.log("database connected succesfully")
}
catch(error){
    console.log("error connecting to database",error)
}
}

export default Connection;