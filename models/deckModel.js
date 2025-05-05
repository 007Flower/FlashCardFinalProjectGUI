import { query } from '../config/db.js';

export const getAllDecks = async () => {
  const result = await query('SELECT * FROM decks ORDER BY id');
  return result.rows;
};

export const addDeck = async (name) => {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Invalid deck name: must be a non-empty string');
  }
  await query('INSERT INTO decks (name) VALUES ($1)', [name]);
};

export const updateDeck = async (id, name) => {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Invalid deck name: must be a non-empty string');
  }
  await query('UPDATE decks SET name = $1 WHERE id = $2', [name, id]);
};

export const deleteDeck = async (id) => {
  await query('DELETE FROM decks WHERE id = $1', [id]);
};

export const getDeckById = async (id) => {
  const result = await query('SELECT * FROM decks WHERE id = $1', [id]);
  return result.rows[0];
};

