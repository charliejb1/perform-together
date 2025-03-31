import { useEffect, useState} from "react"
import "./profile.css"
import React from "react";



function Profile() {

    const [artists, setArtist] = useState([]);

    const getArtist = async () => {
         try {
            const fetchData = await fetch("http://localhost:5001/artists")
            const jsonArtists = await fetchData.json()

          
                setArtist(jsonArtists)
       

        } catch (err) {
            console.error(err.message)
        }
    };
    useEffect(() => {
        getArtist();
    }, []);

    console.log(artists)





    return (
        <>
        
            {artists.map(artist => (
                <div>{artist.id}</div>
            ))}
            
            <div id="profile-container">
                <div>
                    <h1>Name</h1>
                </div>

                <div>
                    <h2>Showcase</h2>
                </div>

                <div>
                    <h2>Years Together</h2>
                </div>

                <div>
                    <h2>Genre</h2>
                </div>

                <div>
                    <h2>Music and Social Media</h2>
                </div>

                <div>
                    <h2>About Us</h2>
                </div>

            </div>
        </>
    )
}

export default Profile;
