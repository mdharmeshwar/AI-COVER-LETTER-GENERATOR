import dotenv from "dotenv";
import express from "express";
import path from "node:path";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.AI_API_KEY;

app.use(express.json());

app.post("/api/chat", async (req, res) => {
  if (!apiKey) {
    res.status(500).json({
      success: false,
      error: "Missing AI_API_KEY in environment. Add it in Render environment variables.",
    });
    return;
  }

  try {
    const response = await fetch("https://apifreellm.com/api/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(req.body),
    });

    const body = await response.text();
    res.status(response.status).send(body);
  } catch (error) {
    console.error("Proxy request failed:", error);
    res.status(502).json({ success: false, error: "AI proxy request failed." });
  }
});

const distPath = path.resolve("dist");
app.use(express.static(distPath));

app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
