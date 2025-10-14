import {db} from "../config/db.js";

export const getUserByEmail = (email, call) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], call);
};