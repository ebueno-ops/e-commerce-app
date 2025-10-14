import {getAllProducts} from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    getAllProducts((err,data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    });

};