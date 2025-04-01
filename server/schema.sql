DROP DATABASE IF EXISTS artist_db;
CREATE DATABASE artist_db;

DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    artist_name VARCHAR(50) NOT NULL,
    years_together INTEGER NOT NULL,
    music_type VARCHAR(50) NOT NULL,
    spotify_link VARCHAR(250), 
    bandcamp_link VARCHAR(250), 
    instagram_link VARCHAR(250), 
    youtube_link VARCHAR(250), 
    facebook_link VARCHAR(250), 
    tiktok_link VARCHAR(250), 
    website_link VARCHAR(250),
    about_info VARCHAR(1500) 
);

