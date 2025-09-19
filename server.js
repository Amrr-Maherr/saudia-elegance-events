import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from Vite build
app.use(express.static(join(__dirname, "dist")));

// Fallback for SPA (Vue/React/etc.)
app.use((req, res) => {
    res.sendFile(join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
