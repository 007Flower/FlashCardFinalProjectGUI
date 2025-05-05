import { query } from '../config/db.js';

export const getAllFlashcards = async () => {
  const result = await query('SELECT DISTINCT ON (id) * FROM flashcards ORDER BY id DESC');
  return result.rows;
};

export const getFlashcardsByDeck = async (deckId) => {
  const result = await query('SELECT * FROM flashcards WHERE deckid = $1 ORDER BY id DESC', [deckId]);
  return result.rows;
};

export const addFlashcard = async (name, description, deckid) => {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Invalid flashcard name: must be a non-empty string');
  }
  if (typeof description !== 'string' || description.trim() === '') {
    throw new Error('Invalid flashcard description: must be a non-empty string');
  }
 await query('INSERT INTO flashcards (name, description, deckid) VALUES ($1, $2, $3)', [name, description, deckid]);
};

export const updateFlashcard = async (id, name, description) => {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Invalid flashcard name: must be a non-empty string');
  }
  if (typeof description !== 'string' || description.trim() === '') {
    throw new Error('Invalid flashcard description: must be a non-empty string');
  }
  await query('UPDATE flashcards SET name = $1, description = $2 WHERE id = $3', [name, description, id]);
};

export const deleteFlashcard = async (id) => {
  await query('DELETE FROM flashcards WHERE id = $1', [id]);
};
