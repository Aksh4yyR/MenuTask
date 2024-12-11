const menus=require('../models/menuModel')

//create menu

exports.createMenuController = async (req, res) => {
    console.log('Inside create menu controller');
    try {
      const { name, description } = req.body;
  
    
      const existingMenu = await menus.findOne({ name });
  
      if (existingMenu) {
       
        return res.status(401).json("Menu allready exists please add a new one");
      } 
      else {
       
        const newMenu = new menus({name,description,items: []  });
  
      
        await newMenu.save();
  
        
        return res.status(200).json(newMenu);
      }
    } catch (err) {
      
      console.error('Error creating menu:', err);
      return res.status(401).json(err);
    }
  };
  

//add items to menu
exports.addItemsToMenuController=async(req,res)=>
{
    console.log('inside add items to menu controller');

   try{
    const {id}=req.params
    const { name, description, price } = req.body;

    const menu=await menus.findById(id)
    if(menu)
    {
        const newItem={name,description,price}
        menu.items.push(newItem)
        await menu.save()
        res.status(200).json(newItem)
    }
    else{
        res.status(401).json('error adding item')
    }
   }
   catch(err)
   {
    res.status(401).json(err)
   }
}

//get menu items with repect to the entered buttons
exports.viewMenuController = async (req, res) => {
  console.log('Inside view menu controller');
  try {
      const { name } = req.query; 
      if (!name) {
          return res.status(400).json({ message: 'Menu name is required' });
      }

      
      const menu = await menus.findOne({ name });

      if (menu) {
          res.status(200).json(menu.items); 
          // res.status(404).json({ message: 'Menu does not exist' });
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

//get full menus

exports.AllMenusController=async(req,res)=>
  {
      console.log('inside view menu controller');
      try{
          
  
      const existingMenus=await menus.find()
      if(existingMenus)
      {
          res.status(200).json(existingMenus)
      }
      else{
          res.status(400).json('Menu doesnt exists')
      }
  
  
      }
      catch(err)
      {
          res.status(400).json(err)
      }
  }



