const mongoose=require('mongoose')
const connectionString=process.env.DBCONNECTIONSTRING
mongoose.connect(connectionString).then((res)=>{console.log('Database connection successfull')}).catch(err=>{console.log('Database connection failed');
})