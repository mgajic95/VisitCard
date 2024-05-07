import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, 'static', 'files', 'Milan.pdf');
    res.download(filePath);
});

app.get('/static/assets/csss/main.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'static', 'assets', 'css', 'main.css'));
});
app.get('/static/assets/csss/font-awesome.min.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'static', 'assets', 'css', 'font-awesome.min.css'));
});
app.get('/static/images/avatar.jpg', (req, res) => {
    res.sendFile(path.join(__dirname,  'static', 'images', 'avatar.jpg'));
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
