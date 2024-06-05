import app from "./app.js";
import connectDb from "./db/database_connection.js";
import dotenv from 'dotenv'

dotenv.config()



connectDb()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Database Connection Error ${err}`)
    process.exit(1)
})