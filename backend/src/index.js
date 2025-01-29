import express from "express";
// import dotenv from "dotenv";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectDB } from "./lib/db.js";
import cookieparser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";
config();
// const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve();
console.log(__dirname);
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on port:", PORT + "!!");
  connectDB();
});
