import React from "react";
import "./signup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';


function Signup() {
    return (
        <>
            <div id="sign-up-container">
                <h1 id="sign-up">Sign Up</h1>
                {/* form starts */}
                <form id="sign-up-form">
                    <div id="general-info">
                        <h3 id="who-are-you">Who are you?</h3>
                        <label id="artist-name">Artist Name:
                            <input classname="top-input"></input>
                        </label>

                        <label id="years-together">Years Together:
                            <input classname="top-input"></input>
                        </label>

                        <label id="music-genre">Music Genre:
                            <input classname="top-input"></input>
                        </label>
                    </div>


                    <div id="images-section">
                        <h3 id="images-header">Images</h3>
                    </div>


                    <div id="links">
                        <h3 id="links-heading">Music and Social Media</h3>

                        <label id="spotify-label"> <FontAwesomeIcon icon={faSpotify} size="lg" style={{ color: "#1edc70", }} />
                            <input></input>
                        </label>

                        <label id="instagram-label"> <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ff0088", }} />
                            <input></input>
                        </label>

                        <label id="tiktok-label"> <FontAwesomeIcon icon={faTiktok} size="lg" style={{ color: "#000000", }} />
                            <input></input>
                        </label>

                        <label id="youtube-label"> <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#ff0000", }} />
                            <input></input>
                        </label>

                        <label id="facebook-label"> <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#2671f2", }} />
                            <input></input>
                        </label>

                        <label id="bandcamp-label"> <FontAwesomeIcon icon={faBandcamp} size="lg" style={{ color: "#02aad4", }} />
                            <input></input>
                        </label>
                    </div>

                    <div>
                        <h3 id="tell-us-more">Tell us more</h3>
                        <input id="about-us-input" placeholder="Tell others about who you are and the music you create!"></input>
                    </div>

                    <button id="form-submit">Submit</button>
                </form>
            </div>
        </>

    )
}

export default Signup;
