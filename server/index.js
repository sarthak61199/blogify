import express from "express";
import cors from "cors";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("server is running");
});
