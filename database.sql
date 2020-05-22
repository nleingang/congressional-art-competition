--copy/paste this to your postgresql database

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
