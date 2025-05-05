import express from 'express';
import path from 'path';
import flashcardRoutes from './routes/flashcardRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use('/', flashcardRoutes); // '/' now maps to /add

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
