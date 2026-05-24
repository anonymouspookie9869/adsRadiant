import app from "./server-app";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

async function startLocalServer() {
  const PORT = 3000;

  // Vite middleware for development or Static Assets for production (local container use cases only)
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in PRODUCTION mode. Serving pre-compiled static files...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Serve index.html for Single Page App routing fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[AdsRadiant Local Instance] Running on http://localhost:${PORT}`);
  });
}

startLocalServer().catch((err) => {
  console.error("Critical: Failed to boot AdsRadiant Express Server", err);
  process.exit(1);
});
