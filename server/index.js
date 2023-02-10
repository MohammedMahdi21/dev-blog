import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

const app = express()
app.use(cors());

app.use(express.json())
app.use(cookieParser())

const upload = multer({ dest: 'uploads/' })
app.post('/upload', upload.single('avatar'), function (req, res, next) {
  res.status(200).json("Img has been uploaded.")
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800, () => {
  console.log("Connected on port 8800!")
})