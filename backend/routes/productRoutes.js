import express from "express";
import { getProducts } from "../controllers/ProductController.js";
import {validateAdmin} from "../middleware/validateAdmin.js";
import {addProduct} from "../models/ProductModel.js";
import {editProduct} from "../models/ProductModel.js"


const router = express.Router();

router.get("/", getProducts);

//admin add product
router.post("/add", validateAdmin, async (req,res) => {
    const {name, price, promo_price, image} = req.body;
    if (!name || !price || !image){
        return res.json({ error: "Name, price, and image URL are required."});
    }
    addProduct({name, price, promo_price, image}, (err, result) =>{
       if (err) return res.json(err);
       return res.json({message: "Product: " + name + " has been added", id: result.id });
    });
});

// //admin edit
router.post("/edit", validateAdmin, async (req,res) => {
    const {name, price, promo_price, image} = req.body;
    if (!name || !price || !image){
        return res.json({ error: "Name, price, and image URL are required."});
    }
    addProduct({name, price, promo_price, image}, (err, result) =>{
        if (err) return res.json(err);
        return res.json({message: "Product: " + name + " has been added", id: result.id });
    });
});
// //admin delete
// router.delete();
//
// //seller set availability
// router.put();

export default router;