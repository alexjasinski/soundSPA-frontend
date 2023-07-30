import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddTrack from "../components/AddTrack";
import TrackCard from "../components/TrackCard";
import styles from "../TrackCard.module.css";
// import styles from "../TracklistPage.module.css";

const API_URL = "http://localhost:5005";

function TracklistPage() {
  const [tracklist, setTracklist] = useState([]);
  // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");

  const getAllTracks = () => {
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/tracklist`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setTracklist(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTracks();
  }, []);

  console.log("tracks", tracklist);
  /*
  useEffect(() => {
    fetch("/tracklist")
      .then((response) => response.json())
      .then((data) => {
        setTracklist(data); // Update the state with the received tracklist data
      })
      .catch((error) => console.error("Error fetching tracklist:", error));
  }, []);
*/
  return (
    <div>
      <div> {<AddTrack refreshTracks={getAllTracks} />}</div>

      <div className={styles.tracklistContainer}>
        {tracklist &&
          tracklist.map((track) => {
            return <TrackCard key={track._id} {...track} />;
          })}
      </div>
      <footer>
        (C) 2023 Alexander Jasinski
      </footer>
    </div>
  );
}

export default TracklistPage;
