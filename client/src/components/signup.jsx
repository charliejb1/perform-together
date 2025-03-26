import React from "react";
import "./components.css";

function Signup() {
    return (
        <>
            <h1>Sign Up</h1>

            <div id="sign-up-container">
                <form id="sign-up-form">
                    <div id="general-info">
                        <h3 id="who-are-you">Who are you?</h3>
                        <label>Artist Name:
                            <input></input>
                        </label>

                        <label>Years Together:
                            <input></input>
                        </label>

                        <label>Music Genre:
                            <input></input>
                        </label>

                        <label>About Us:
                            <input></input>
                        </label>

                        <label>Images:
                            <input></input>
                        </label>
                    </div>

                    <div id="links">
                        <h3 id="links-heading">Music and Social Media</h3>

                        <label id="spotify-label"> Spotify Link:
                            <input></input>
                        </label>

                        <label id="instagram-label"> Instagram Link:
                            <input></input>
                        </label>

                        <label id="tiktok-label"> TikTok Link:
                            <input></input>
                        </label>

                        <label id="youtube-label"> Youtube Link:
                            <input></input>
                        </label>

                        <label id="facebook-label"> Facebook Link:
                            <input></input>
                        </label>

                        <label id="bandcamp-label"> Bandcamp Link:
                            <input></input>
                        </label>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </>

    )
}

export default Signup;
