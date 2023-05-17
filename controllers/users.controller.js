import { pool } from "../server/db.js";

/* SELECTS */

export const getAllUsers = async (req, res) => {
  try {
    const [result] = await pool.query("select * from users");
    res.send(result);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const checkLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const [result] = await pool.query(
      `select u.*, count(pxu.user_id) as num_postings from users u inner join post_x_users pxu on pxu.user_id = u.user_id where u.user_email like ? and u.user_password like ?
      group by u.user_id, u.user_firstname, u.user_lastname, u.user_email, u.user_password, u.user_image_photo`,
      [email, password]
    );
    console.log("result from checklogin:", result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserToFollow = async(req, res) => {
  const { id } = req.body;
  try {
    const [result] = await pool.query(`call return_not_follows(?)`, [id]);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
