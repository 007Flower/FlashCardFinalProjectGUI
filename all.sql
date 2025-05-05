-- Database setup commands
CREATE DATABASE flashcard;
CREATE ROLE flashcard WITH LOGIN PASSWORD '12345';
CREATE EXTENSION IF NOT EXISTS citext;

GRANT CREATE ON DATABASE flashcard TO flashcard;

-- Corrected table creation syntax
CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE flashcards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    deckid INTEGER REFERENCES decks(id) ON DELETE CASCADE
);
