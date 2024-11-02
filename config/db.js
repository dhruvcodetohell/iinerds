import {MONGO_DB_URI} from "./config.js" 

export const mongoConfig={
    mongoURI:MONGO_DB_URI,
    options:{
        useNewUrlParser:true
    }
}