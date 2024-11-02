import "./config/config.js" // this is for initilizing or loading env variables 
import app from "./app.js"
import { connectDb } from "./initializers/database.js" 
import {PORT} from "./config/config.js"
connectDb()  // initilize and connect your database 

app.listen(PORT,()=>{
    console.log("server running at ",PORT)
})
