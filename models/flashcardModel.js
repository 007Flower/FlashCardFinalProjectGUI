import { query } from '../config/db.js';

export const getAllFlashcards = async () => {
  const result = await query('SELECT DISTINCT ON (id) * FROM flashcards ORDER BY id DESC');
  return result.rows;
};

export const addFlashcard = async (name, description) => {
  await query('INSERT INTO flashcards (name, description) VALUES ($1, $2)', [name, description]);
};

export const updateFlashcard = async (id, name, description) => {
  await query('UPDATE flashcards SET name = $1, description = $2 WHERE id = $3', [name, description, id]);
};

export const deleteFlashcard = async (id) => {
  await query('DELETE FROM flashcards WHERE id = $1', [id]);
};
