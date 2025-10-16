
export const validateAdmin = (req, res, next) => {
    const role = req.body.role || req.query.role;
    if(role !== "admin") {
        return res.json({ error: "Access denied."});
    }
    next();}