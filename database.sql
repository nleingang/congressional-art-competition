-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "voters"
(
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR,
    "zip" INT
);

CREATE TABLE "admin"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR,
    "password" VARCHAR
);

CREATE TABLE "artwork"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "artist" VARCHAR,
    "image_url" VARCHAR
);

CREATE TABLE "votes"
(
    "id" SERIAL PRIMARY KEY,
    "first_place" INT REFERENCES artwork(id) ON DELETE CASCADE,
    "second_place" INT REFERENCES artwork(id) ON DELETE CASCADE,
    "third_place" INT REFERENCES artwork(id) ON DELETE CASCADE
);

INSERT INTO artwork
    (title, artist, image_url)
VALUES
    ('Stonehenge', 'Steve Johnson', 'https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=796&q=80'),
    ('Dreamy Tree', 'JR Korpa', 'https://images.unsplash.com/photo-1550294791-ee0b62b14ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'),
    ('Untitled', 'Geordanna Cordero', 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=808&q=80'),
    ('Melbourne Mural', 'Annie Spratt', 'https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'),
    ('Mural of Vintage Woman', 'Aman Ravi', 'https://images.unsplash.com/photo-1463277261818-d24c3cdbe40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'),
    ('Paintings from my 12-year-old nephew', 'Markus Spiske', 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80'),
    ('Untitled', 'Jeremy Lishner', 'https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
