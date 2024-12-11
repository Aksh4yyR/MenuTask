const express=require('express')
require('dotenv').config()
const cors=require('cors')
require('./database/dbConnection')
const router=require('./routes/router')
const MenuServer=express()
MenuServer.use(cors())
MenuServer.use(express.json())
MenuServer.use(router)

const PORT=3000 || process.env.PORT

MenuServer.listen(PORT,()=>{
    console.log(`Menu server is running in Port ${PORT}`);
    
})
MenuServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>MenuServer started at port and waiting for client request</h1>`)
})