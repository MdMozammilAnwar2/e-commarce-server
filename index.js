const app=require("./app");
const connectWithDB = require("./config/db");
//connect with Database
connectWithDB();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running at PORT ${process.env.PORT}`);
});