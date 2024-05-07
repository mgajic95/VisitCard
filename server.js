import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, 'static', 'files', 'Milan.pdf');
    res.download(filePath);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});