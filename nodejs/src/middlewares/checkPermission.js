import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // ["Bearer", "xxx"]
    if (!authHeader) {
        return res.status(401).json({
            message: "Bạn chưa đăng nhập",
        });
    }

    jwt.verify(token, "phanvanloi", async (err, payload) => {
        if (err === "JsonWebTokenError") {
            return res.status(400).json({
                message: "Token không hợp lệ",
            });
        }
        if (err === "TokenExpiredError") {
            return res.status(400).json({
                message: "Token đã hết hạn",
            });
        }
        const user = await User.findById(payload.id);
        if (user.role !== "admin") {
            return res.status(403).json({
                message: "Bạn không có quyền thực hiện hành động này",
            });
        }
        next();
    });
};
