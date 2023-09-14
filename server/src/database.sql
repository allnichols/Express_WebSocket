CREATE DATABASE chat_app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE chat_rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    visibility BOOLEAN DEFAULT TRUE,
    creator_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE chat_room_members (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    room_id INTEGER REFERENCES chat_rooms(id),
    joined_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    room_id INTEGER REFERENCES chat_rooms(id),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- alter table to change table users  name column to not unique
ALTER TABLE users ALTER COLUMN name DROP UNIQUE;
```