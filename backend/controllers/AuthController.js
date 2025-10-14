import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {getUserByEmail} from "../models/UserModel.js";

export const login = (req, res) => {
    //sets email, password received from the request
    const { email, password, role } = req.body;

    //executes query above in the db
    getUserByEmail(email, async (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });
        //checks for users in db for matching email
        if (results.length === 0) return res.status(401).json({ error: "No users found" });

        const user = results[0];

        //hash user input password
        const hashedPassword = await bcrypt.hash(user.password, 10);

        //compare hashed password to db password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if(email === user.email && passwordMatch && role === user.role) {
            //create jwt token
            const token = jwt.sign(
                //payload
                {id: user.id, email: user.email, role: user.role},
                //jwt key
                process.env.JWT_KEY,
                //options
                {expiresIn: "7d"}
            );
            //returns jwt token and the user role
            return res.json({
                message: "Login Successful",
                token,
                role: user.role
            });
        } else {
            return res.json({
                error: "Invalid email/password or role type"
            });
        }


    });
};