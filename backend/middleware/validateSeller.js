export const validateSeller = (req, res, next) => {
    const role = req.body.role || req.query.role;
    if(role !== "seller") {
        return res.json({ error: "Access denied."});
    }
    next();
}