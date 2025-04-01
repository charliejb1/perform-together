import { useState} from "react"
import React from "react";
import "./signup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Signup() {

    
    // creating separate values of state for each input in form. Basically telling useState to have multiple empty string placeholders than just a regular empty string.
    const emptyInputs = {
        artistName: "",
        yearsTogether: "",
        musicGenre: "",
        spotifyLink: "",
        instagramLink: "",
        tiktokLink: "",
        youtubeLink: "",
        facebookLink: "",
        bandcampLink: "",
        websiteLink: "",
        aboutUs: ""
    };

    const [input, setInput] = useState(emptyInputs)

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const SubmitArtist = async e => {
        e.preventDefault();
       
        try {
            const response = await fetch("http://localhost:5001/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input)
            });
            
            window.location.href = "/profile";
        } catch (err) {
            console.error(err.message)
        }

        // try {
        //     const fetchData = await fetch("http://localhost:5001/artists")
        //     const jsonArtists = await fetchData.json()

        //     console.log(jsonArtists)
        // } catch (err) {
        //     console.error(err.message)
        // }

    }



return (
    <>
        <div id="sign-up-container">
            <h1 id="sign-up">Sign Up</h1>
            {/* form starts */}
            <form id="sign-up-form" onSubmit={SubmitArtist}>
                <div id="general-info">
                    <h3 id="who-are-you">Who are you?</h3>
                    <label id="artist-name-form">Artist Name:
                        <input className="top-input" name="artistName" type="text" value={input.artistName} onChange={handleChange}/>
                    </label>

                    <label id="years-together-form">Years Together:
                        <input className="top-input" name="yearsTogether" type="text" value={input.yearsTogether} onChange={handleChange}/>
                    </label>

                    <label id="music-genre">Music Genre:
                        <input className="top-input" name="musicGenre" type="text" value={input.musicGenre} onChange={handleChange}/>
                    </label>
                </div>


                <div id="images-section">
                    <h3 id="images-header">Images</h3>
                </div>


                <div id="links">
                    <h3 id="links-heading">Music and Social Media</h3>

                    <label id="spotify-label"> <FontAwesomeIcon icon={faSpotify} size="lg" style={{ color: "#1edc70", }}/>
                        <input type="text" placeholder="Spotify Link" name="spotifyLink" value={input.spotifyLink} onChange={handleChange}/>
                    </label>

                    <label id="instagram-label"> <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ff0088", }}/>
                        <input type="text" placeholder="Intagram Link" name="instagramLink" value={input.instagramLink} onChange={handleChange}/>
                    </label>

                    <label id="tiktok-label"> <FontAwesomeIcon icon={faTiktok} size="lg" style={{ color: "#000000", }}/>
                        <input type="text" placeholder="TikTok Link" name="tiktokLink" value={input.tiktokLink} onChange={handleChange}/>
                    </label>

                    <label id="youtube-label"> <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#ff0000", }}/>
                        <input type="text" placeholder="Youtube Link" name="youtubeLink" value={input.youtubeLink} onChange={handleChange}/>
                    </label>

                    <label id="facebook-label"> <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#2671f2", }}/>
                        <input type="text" placeholder="Facebook Link" name="facebookLink" value={input.facebookLink} onChange={handleChange}/>
                    </label>

                    <label id="bandcamp-label"> <FontAwesomeIcon icon={faBandcamp} size="lg" style={{ color: "#02aad4", }}/>
                        <input type="text" placeholder="Bandcamp Link" name="bandcampLink" value={input.bandcampLink} onChange={handleChange}/>
                    </label>

                    <label id="website-label"> <FontAwesomeIcon icon={faGlobe} style={{color: "#213659",}} />
                        <input type="text" placeholder="Website Link" name="websiteLink" value={input.websiteLink} onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <h3 id="tell-us-more">Tell us more</h3>
                    <input id="about-us-input" placeholder="Tell others about who you are and the music you create!" type="text" name="aboutUs" value={input.aboutUs} onChange={handleChange}/>
                </div>

                <button id="form-submit">Submit</button>
            </form>
        </div>
    </>

)
}

export default Signup;
