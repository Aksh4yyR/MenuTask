const express=require('express')
const router=new express.Router()
const menusController=require('../Controllers/menusController')

//for adding menu

router.post('/add-menu',menusController.createMenuController)

// add menu item

router.post('/add-item/:id',menusController.addItemsToMenuController)

//view menus
router.get('/view-menu',menusController.viewMenuController)

router.get('/all-menus',menusController.AllMenusController)
module.exports=router