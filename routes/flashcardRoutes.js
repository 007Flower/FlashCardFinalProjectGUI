import express from 'express';
import {
  getAddPage,
  getManagePage,
  postAddFlashcard,
  postUpdateFlashcard,
  postDeleteFlashcard
} from '../controllers/flashcardController.js';

const router = express.Router();

router.get('/', getAddPage); // Make add page default
router.get('/add', getAddPage);
router.post('/add', postAddFlashcard);
router.get('/manage', getManagePage);
router.post('/update/:id', postUpdateFlashcard);
router.post('/delete/:id', postDeleteFlashcard);

export default router;
