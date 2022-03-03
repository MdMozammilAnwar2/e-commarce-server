const BigPromise =require('../middlewares/BigPromise');
exports.home=BigPromise(
   async (req,res)=>{
       //await db connection
        res.status(200).json({
            success:true,
            greeting:"Hello from API"
        });
    }
)

exports.homeDummy=(req,res)=>{
    try{
        res.status(200).json({
            success:true,
            greeting:"Hello from dummy"
        });
    }
    catch(error){
        console.log(error);
    }
}