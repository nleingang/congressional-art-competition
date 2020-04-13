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
    "image_url" VARCHAR,
    "first_place_votes" INT,
    "second_place_votes" INT,
    "third_place_votes" INT
);
