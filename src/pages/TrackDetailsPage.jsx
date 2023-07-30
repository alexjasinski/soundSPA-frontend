import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function TrackDetailsPage(props) {
  const [track, setTrack] = useState(null);
  const { trackId } = useParams();


  const getTrack = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    axios
    .get(`${API_URL}/api/tracklist/${trackId}`)
    .then((response) => {
        const oneTrack = response.data;
        setTrack(oneTrack);
    })
    .catch((error) => console.log(error));
    }

    useEffect(() => {
        getTrack();
    }, [] );


    return (
        <div className="TrackDetails">
          {track && (
            <>
              <h1>{track.title}</h1>
              <h2>{track.artist}</h2>
              <p>{track.description}</p>
              
            </>
          )}
          <Link to="/tracklist">
            <button>Back to tracklist</button>
          </Link>
        
        <Link to={`/tracklist/edit/${trackId}`}>
            <button>Edit Track</button>
        </Link>
        </div>
      );

}


export default TrackDetailsPage;