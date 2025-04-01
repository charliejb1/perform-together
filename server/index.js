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
    const { artistName, yearsTogether, musicGenre, spotifyLink, bandcampLink, instagramLink, youtubeLink, facebookLink, tiktokLink, websiteLink, aboutUs } = req.body;
    const newArtist = await pool.query(
      "INSERT INTO artists (artist_name, years_together, music_type, spotify_link, bandcamp_link, instagram_link, youtube_link, facebook_link, tiktok_link, website_link, about_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [artistName, yearsTogether, musicGenre, spotifyLink, bandcampLink, instagramLink, youtubeLink, facebookLink, tiktokLink, websiteLink, aboutUs]);

    res.json(newArtist)
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/artists', async (req, res) => {
  try {
    const allArtists = await pool.query("SELECT * FROM artists")
    res.json(allArtists.rows);
  } catch (err) {
    console.error(err.message)
  }
})

app.put('/artist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { artistName, yearsTogether, musicType, spotifyLink, bandcampLink, instagramLink, youtubeLink, facebookLink, tiktokLink, aboutInfo } = req.body;
    const updateArtist = await pool.query("UPDATE artists SET artist_name = $1, years_together = $2, music_type = $3, spotify_link = $4, bandcamp_link = $5, instagram_link =$6, youtube_link = $7, facebook_link = $8, tiktok_link = $9, about_info = $10 WHERE id = $11", [artistName, yearsTogether, musicType, spotifyLink, bandcampLink, instagramLink, youtubeLink, facebookLink, tiktokLink, aboutInfo, id]);
    res.json("Artist updated")
  } catch (err) {
    console.error(err.message)
  }
});


app.delete('/artist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteArtist = await pool.query("DELETE FROM artists WHERE id = $1", [id])
    res.json("Artist deleted")
  } catch (err) {
    console.error(err.message)
  }
});

