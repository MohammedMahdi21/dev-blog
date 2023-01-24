import { db } from "../db.js"
import bcrypt from "bcryptjs"
import { json } from "express"
export const register = (req, res) => {

  //Check existing user

  const q = "SELECT * FROM users WHERE email = ? OR username = ?"

  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err)

    if (data.length) return res.status(409).json("User already exists!")

    //Hash the password and create a user

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("B4c0/\/", salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
    const valuse = [
      req.body.username,
      req.body.email,
      hash,
    ]

    db.query(q, [valuse], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    })
  })

}
export const login = (req, res) => {

}
export const logout = (req, res) => {

}