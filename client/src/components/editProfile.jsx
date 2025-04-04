import React from "react";
import {useState, useEffect} from "react"
import "./editProfile.css"


const UpdateArtist = ( {artist} ) => {
  const [artistName, setArtistName] = useState(artist.artist_name);
  const [yearsTogether, setYearsTogether] = useState(artist.years_together);
  const [musicType, setMusicType] = useState(artist.music_type);
  const [spotifyLink, setSpotifyLink] = useState(artist.spotify_link);
  const [bandcampLink, setBandcampLink] = useState(artist.bandcamp_link);
  const [instagramLink, setInstagramLink] = useState(artist.instagram_link);
  const [youtubeLink, setYoutubeLink] = useState(artist.youtube_link);
  const [facebookLink, setFacebookLink] = useState(artist.facebook_link);
  const [tiktokLink, setTiktokLink] = useState(artist.tiktok_link);
  const [websiteLink, setWebsiteLink] = useState(artist.website_link);
  const [aboutInfo, setAboutInfo] = useState(artist.about_info);

  useEffect(() => {
    setArtistName(artist.artist_name);
  }, [artist]);

const updateDatabase = async e => {
  e.preventDefault();

  const body = {
    artistName,
    yearsTogether,
    musicType,
    spotifyLink,
    bandcampLink,
    instagramLink,
    youtubeLink,
    facebookLink,
    tiktokLink,
    websiteLink,
    aboutInfo,
  };

  try{
    // const body = { newinfo };
    const response = await fetch(`http://localhost:5001/yourartist/${artist.id}`,{
      method:"PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body),
    })
    window.location = "/profile"
    console.log(response)
  }catch (err){
  console.error(err.message);
  }
};

    return( 
<> 
<button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${artist.id}`}>
  Edit Profile
</button>


<div className="modal" id={`id${artist.id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-header">
        <h4 className="modal-title"></h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

     
      <div className="modal-body">Artist Name<input type = "text" value={artistName} onChange={ e => setArtistName(e.target.value)}/>
      </div>

      <div className="modal-body">Years Together<input type = "text" value={yearsTogether} onChange={ e => setYearsTogether(e.target.value)}/>
      </div>

      <div className="modal-body">Genre<input type = "text" value={musicType} onChange={ e => setMusicType(e.target.value)}/>
      </div>

      <div className="modal-body">Spotify Link<input type = "text" value={spotifyLink} onChange={ e => setSpotifyLink(e.target.value)}/>
      </div>

      <div className="modal-body">Instagram Link<input type = "text" value={instagramLink} onChange={ e => setInstagramLink(e.target.value)}/>
      </div>

      <div className="modal-body">TikTok Link<input type = "text" value={tiktokLink} onChange={ e => setTiktokLink(e.target.value)}/>
      </div>

      <div className="modal-body">Youtube Link<input type = "text" value={youtubeLink} onChange={ e => setYoutubeLink(e.target.value)}/>
      </div>

      <div className="modal-body">Facebook Link<input type = "text" value={facebookLink} onChange={ e => setFacebookLink(e.target.value)}/>
      </div>
      
      <div className="modal-body">Bandcamp Link<input type = "text" value={bandcampLink} onChange={ e => setBandcampLink(e.target.value)}/>
      </div>

      <div className="modal-body">Website Link<input type = "text" value={websiteLink} onChange={ e => setWebsiteLink(e.target.value)}/>
      </div>

      <div className="modal-body">About Us<input type = "text" value={aboutInfo} onChange={ e => setAboutInfo(e.target.value)}/>
      </div>




  
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={updateDatabase}>Save</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</>
    )
}

export default UpdateArtist;