const mongoose=require('mongoose')

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    items:[
        {
            name:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            }
        }
    ]

})

const menus=new mongoose.model("menus",menuSchema)
module.exports=menus