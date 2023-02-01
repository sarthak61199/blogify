import db from "../db/index.js";

export const getAllPosts = (req, res) => {
  db.query("select * from post", (err, result) => {
    if (!err)
      return res
        .status(200)
        .json({ error: false, data: result, message: "All posts retrieved." });
    return res
      .status(409)
      .json({ error: true, message: "Something went wrong.", data: [] });
  });
};

export const getSinglePost = (req, res) => {};
