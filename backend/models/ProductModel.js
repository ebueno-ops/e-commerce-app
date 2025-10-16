import {db} from "../config/db.js";

export const getAllProducts = (call) => {
    const query = "SELECT * FROM items";
    db.query(query, call);
};

export const addProduct = (productData, call) =>{
    const query = "INSERT INTO items (name, price, promo_price, image) VALUES (?, ?, ?, ?)";
    const {name, price, promo_price, image } = productData;
    db.query(query,[name, price, promo_price, image], call);
}
export const editProduct = (productData, call) =>{
    const query = "UPDATE items SET name =?, price=?, promo_price=?, image=? WHERE id = ?;";
    const {name, price, promo_price, image, id } = productData;
    db.query(query,[name, price, promo_price, image, id], call);
}
export const deleteProduct = (productData, call) =>{
    const query = "DELETE FROM items WHERE id = ?;";
    const id = productData;
    db.query(query,[id], call);
}