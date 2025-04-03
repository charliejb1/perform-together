import { useEffect, useState} from "react"
import "./profile.css"
import React from "react";
import UpdateArtist from "./editProfile"


function Profile() {

    
    const [artist, setArtist] = useState([]);

    const getArtist = async () => {
        try {
            const fetchData = await fetch("http://localhost:5001/yourartist")
            const jsonArtists = await fetchData.json()


            setArtist(jsonArtists)


        } catch (err) {
            console.error(err.message)
        }
    };
    useEffect(() => {
        getArtist();
    }, []);

    console.log(artist)


    return (
        <>
            <h1 id="connect-header">Profile</h1>

            {artist.map(artist => (
                <>

                    <div id="basics-container">

                        <p id="artist-name">{artist.artist_name}</p>

                        <p id="years-together">Years Together: {artist.years_together}</p>

                        <p id="genre">Genre: {artist.music_type}</p>

                    </div>

                    <div id="profile-container">

                
                        <h3 id="social-media">Social Media</h3>

                        <a href={artist.spotify_link}>< img src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png' id="spotify-image" /></a>

                        <a href={artist.instagram_link}>< img src='https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_INSTAGRAM.png' id="instagram-image" /></a>

                        <a href={artist.tiktok_link}>< img src='https://static.vecteezy.com/system/resources/previews/023/986/492/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png' id="tiktok-image" /></a>

                        <a href={artist.youtube_link}>< img src='https://static.vecteezy.com/system/resources/previews/018/930/575/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' id="youtube-image" /></a>

                        <a href={artist.facebook_link}>< img src='https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png' id="facebook-image" /></a>

                        <a href={artist.bandcamp_link}>< img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Bandcamp-button-circle-green.svg' id="bandcamp-image" /></a>

                        <a href={artist.website_link}>< img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png' id="website-image" /></a>

                        <h3 id="about-header">About Us</h3>

                        <p id="about-us"> {artist.about_info} </p>

                    
                    </div>
                    <div>
                    <UpdateArtist artist={artist}/>
                    </div>
                </>
            ))}

        </>
    )

}

export default Profile;
