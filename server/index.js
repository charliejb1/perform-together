require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./database')


// allows for websites(routes) to access the server
app.use(cors());
//   allows us access to the req.body
app.use(express.json());
//  allows us to parse the form data being sent in
app.use(express.urlencoded({ extended: true }));

app.listen(5001, () => {
  console.log('server started on port 5001')
});

// Get artists
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create artist
app.post('/signup', async (req, res) => {
  try {
    const { artistName, yearsTogether, musicType, spotifyLink, bandcampLink, instagramLink, youtubeLink, facebookLink, tiktokLink, aboutInfo } = req.body;
    const newArtist = await pool.query(
      "INSERT INTO artists (artist_name, years_together, music_type, spotify_link, bandcamp_link, instagram_link, youtube_link, facebook_link, tiktok_link, about_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [artistName, yearsTogether, musicType, spotifyLink, bandcampLink, instagramLink, youtubeLink, facebookLink, tiktokLink, aboutInfo]);

      res.json(newArtist)
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/artists', async (req, res) => {
  try{
    const allArtists = await pool.query("SELECT * FROM artists")
    res.json(allArtists);
  } catch (err) {
    console.error(err.message)
  }
  })

// Update artist 

// Delete Artist

