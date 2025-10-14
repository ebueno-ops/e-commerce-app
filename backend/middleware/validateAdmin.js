
export const validateAdmin = (req, res, next) => {
    if(req.body.role !== "admin") {
        return res.json({ error: "Access denied."});
    }
    next();
}