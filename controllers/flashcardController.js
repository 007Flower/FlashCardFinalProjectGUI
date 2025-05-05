
import {
  getAllFlashcards,
  getFlashcardsByDeck,
  addFlashcard,
  updateFlashcard,
  deleteFlashcard
} from '../models/flashcardModel.js';

import {
  getAllDecks,
  addDeck,
  updateDeck,
  deleteDeck,
  getDeckById
} from '../models/deckModel.js';

export const getAddPage = async (req, res) => {
  const decks = await getAllDecks();
  res.render('add', { decks });
};

export const getDecksPage = async (req, res) => {
  const decks = await getAllDecks();
  res.render('decks', { decks });
};

export const getManageAllPage = async (req, res) => {
  const decks = await getAllDecks();
  const flashcards = await getAllFlashcards();
  res.render('manageall', { decks, flashcards });
};

export const postUpdateAllFlashcards = async (req, res) => {
  const { cardIds, cardNames, cardDescriptions } = req.body;

  if (cardIds && cardNames && cardDescriptions) {
    for (let i = 0; i < cardIds.length; i++) {
      await updateFlashcard(cardIds[i], cardNames[i], cardDescriptions[i]);
    }
  }
  res.redirect('/manageall');
};

export const postAddDeck = async (req, res) => {
  const { name } = req.body;
  if (name && name.trim() !== '') {
    await addDeck(name.trim());
  }
  res.redirect('/decks');
};

export const postUpdateDeck = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (name && name.trim() !== '') {
    await updateDeck(id, name.trim());
  }
  res.redirect('/decks');
};

export const postDeleteDeck = async (req, res) => {
  const { id } = req.params;
  await deleteDeck(id);
  res.redirect('/decks');
};

export const postAddFlashcard = async (req, res) => {
  const { name, description, deckid } = req.body;
  try {
    await addFlashcard(name, description, deckid);
    res.redirect('/add'); // Redirect back to Add page
  } catch (error) {
    const decks = await getAllDecks();
    const { name, description, deckid } = req.body;
    res.status(400).render('add', { decks, error: error.message, name, description, deckid });
  }
};

export const getManagePage = async (req, res) => {
  const flashcards = await getAllFlashcards();
  res.render('manage', { flashcards });
};

export const getFlashcardsByDeckPage = async (req, res) => {
  const { deckid } = req.params;
  const flashcards = await getFlashcardsByDeck(deckid);
  const deck = await getDeckById(deckid);
  res.render('manage', { flashcards, deck });
};

export const postUpdateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await updateFlashcard(id, name, description);
  res.redirect('/manage');
};

export const postDeleteFlashcard = async (req, res) => {
  const { id } = req.params;
  const { deckId } = req.body;

  await deleteFlashcard(id);
  res.redirect(`/deck/update/${deckId}`);
};


export const updateevery = async (req, res) => {
  const deckId = req.params.deckId;
  const { deckName, cardIds, cardNames, cardDescriptions } = req.body;

  // Update deck name
  await updateDeck(deckId, deckName);
if(cardIds){
  for (let i = 0; i < cardIds.length; i++) {
    await updateFlashcard(cardIds[i], cardNames[i], cardDescriptions[i]);
  }
}
  res.redirect(`/deck/update/${deckId}`);
};

export const getUpdateDeckPage = async (req, res) => {
  const { id } = req.params;
  const deck = await getDeckById(id);
  if (!deck) {
    return res.status(404).send('Deck not found');
  }
  const cards = await getFlashcardsByDeck(id);
  res.render('update', { deck, cards });
};
