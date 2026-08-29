import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Hostinger Node.js environments inject the PORT environment variable
const PORT = process.env.PORT || 3000;

// Serve the static files from the React build (dist folder)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React Router (SPA routing) - direct all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
