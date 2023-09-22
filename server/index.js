import express from "express";
import Connection from "./database/db.js";
import routes from "./routes.js"
import cors from "cors";
import bodyParser from "body-parser"; 
const app = express();
app.use(bodyParser.json({extended:true})); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 
app.use("/",routes)
Connection(); 
app.listen(8000,(req,res)=>{
    console.log("server running succesfully")
})
 