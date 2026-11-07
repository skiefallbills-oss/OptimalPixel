
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "OptimalPixel fonctionne !"
  });
});

app.get("/test", (req, res) => {
  res.send("OptimalPixel fonctionne !");
});

app.listen(PORT, () => {
  console.log(`OptimalPixel is listening on port ${PORT}`);
});
