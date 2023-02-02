import bcrypt from "bcryptjs";
import db from "../db/index.js";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const login = (req, res) => {};
export const register = (req, res) => {
  const { name, password, email } = req.body;
  db.query("select * from user where email = ?", [email], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error.", data: {} });
    if (result.length !== 0) {
      return res
        .status(409)
        .json({ error: true, message: "User already exists.", data: {} });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      db.query(
        "insert into user values(?, ?, ?, ?)",
        [uuidv4(), name, email, hashedPassword],
        (err, result) => {
          if (err)
            return res.status(500).json({
              error: true,
              message: "Internal Server Error.",
              data: {},
            });
          return res.status(200).json({
            error: false,
            data: {},
            message:
              "You have successfully registered. Redirecting you to Login page.",
          });
        }
      );
    }
  });
};
