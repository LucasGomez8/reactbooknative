import { pool } from "../server/db.js";

/* SELECTS */

export const getAllPosts = async (req, res) => {
  const { id } = req.body;
  if (id != undefined) {
    try {
      const [result] = await pool.query(
        "Select * from posts p inner join post_x_users pxu on pxu.post_id = p.post_id inner join users u on u.user_id = pxu.user_id where u.user_id = ?",
        [id]
      );
      res.send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const [result] = await pool.query(
        "Select * from posts p inner join post_x_users pxu on pxu.post_id = p.post_id inner join users u on u.user_id = pxu.user_id"
      );
      res.send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
