import express from "express";
import { getProducts } from "../controllers/ProductController.js";
import {validateAdmin} from "../middleware/validateAdmin.js";
import {validateSeller} from "../middleware/validateSeller.js";
import {addProduct, editProduct, deleteProduct, setAvailability} from "../models/ProductModel.js";



const router = express.Router();

router.get("/", getProducts);
router.get("/admin-item-list", getProducts);

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

//admin edit
router.put("/edit/:id", validateAdmin, async (req,res) => {
    const {id} = req.params;
    const {name, price, promo_price, image} = req.body;

    editProduct({name, price, promo_price, image, id}, (err) =>{
        if (err) return res.json(err);
        return res.json({message: "Product: " + name + " edited successfully"});
    });
});

//admin delete
router.delete("/delete/:id", validateAdmin, async (req,res) => {
    const {id} = req.params;

    deleteProduct([id], (err) =>{
        if (err) return res.json(err);
        return res.json({message: "Product deleted successfully"});
    });
});


//seller set availability
router.put("/availability/:id", validateSeller, async (req,res) => {
    const {id} = req.params;
    const {available, role} = req.body;

    setAvailability({id,available,role}, (err) =>{
        if (err) return res.json(err);
        return res.json({message: "Product availability has been updated"});
    });
});

export default router;