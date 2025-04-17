import {
  getAllFlashcards,
  addFlashcard,
  updateFlashcard,
  deleteFlashcard
} from '../models/flashcardModel.js';

export const getAddPage = (req, res) => {
  res.render('add');
};

export const postAddFlashcard = async (req, res) => {
  const { name, description } = req.body;
  await addFlashcard(name, description);
  res.redirect('/add'); // Redirect back to Add page
};

export const getManagePage = async (req, res) => {
  const flashcards = await getAllFlashcards();
  res.render('manage', { flashcards });
};

export const postUpdateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await updateFlashcard(id, name, description);
  res.redirect('/manage');
};

export const postDeleteFlashcard = async (req, res) => {
  const { id } = req.params;
  await deleteFlashcard(id);
  res.redirect('/manage');
};
