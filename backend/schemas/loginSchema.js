import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string()
        //input email is required
        .required()
        //displays message if email input empty
        .messages({
            "string.empty": "Email is required",
        }),
    password: Joi.string()
        //input password is required
        .required()
        //displays message if password input empty
        .messages({
            "string.empty": "Password is required",
        }),
    role: Joi.string()
        //only allow these roles
        .valid("admin", "member", "seller")
        .required()
        .messages({
            "any.required": "Role is required",
            "any.only": "Role must be either admin, member, or seller",
        })
});