import express from 'express';
import {
  getAddPage,
  getManagePage,
  getDecksPage,
  getFlashcardsByDeckPage,
  postAddFlashcard,
  postAddDeck,
  postUpdateFlashcard,
  postDeleteFlashcard,
  postUpdateDeck,
  postDeleteDeck,
  updateevery,
  getUpdateDeckPage
} from '../controllers/flashcardController.js';

const router = express.Router();

router.get('/', getAddPage); // Make add page default
router.get('/add', getAddPage);
router.post('/add', postAddFlashcard);
router.get('/manage', getManagePage);
router.get('/decks', getDecksPage);
router.post('/decks', postAddDeck);
router.get('/deck/:deckid', getFlashcardsByDeckPage);
router.post('/update/:id', postUpdateFlashcard);
router.post('/delete/:id', postDeleteFlashcard);
// POST /update-deck/:deckId
router.post('/update-deck/:deckId',updateevery);

// New routes for deck update and delete
router.post('/decks/update/:id', postUpdateDeck);
router.post('/decks/delete/:id', postDeleteDeck);

// Add GET route for update deck page
router.get('/deck/update/:id', getUpdateDeckPage);

// New routes for manageall page
import { getManageAllPage, postUpdateAllFlashcards } from '../controllers/flashcardController.js';

router.get('/manageall', getManageAllPage);
router.post('/manageall/update', postUpdateAllFlashcards);

export default router;
