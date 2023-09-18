import { useState } from "react";
import axios from "axios";
import styles from "../AddTrack.module.css";

const API_URL = "http://localhost:5005";

function AddTrack(props) {
  const [artistName, setArtistName] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const storedToken = localStorage.getItem("authToken");

  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    uploadData.append("audioURL", e.target.files[0]);

    axios
      .post(`${API_URL}/api/upload`, uploadData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        // setAudioURL(response.data.file);
        console.log(response.data.file);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const trackBody = { artistName, trackTitle, audioURL };
    console.log("trackBody is doing great", trackBody);

    axios
      .post(`${API_URL}/api/createTrack`, trackBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        console.log("added new track: ", res);

        // Reset the form
        setArtistName("");
        setTrackTitle("");

        setAudioURL("");

        // navigate to another page
        // navigate("/");
      })
      .catch((err) => console.log("Error while adding the new track: ", err));
  };

  return (
    <div className={styles.AddTrack}>
      <h3>AddTrack</h3>
      <br />
      <form className={styles.AddTrackForm} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={trackTitle}
          onChange={(e) => setTrackTitle(e.target.value)}
        />
        <br />
        <label>Artist:</label>
        <input
          type="text"
          name="artist"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <br />
        <label>Choose file:</label>
        <br />
        <input
          id={styles.file_btn}
          type="file"
          onChange={(e) => handleFileUpload(e)}
        />
        <br />
        <button id={styles.submit_btn} type="submit">
          Submit
        </button>
      </form>
      <br />
    </div>
  );
}

export default AddTrack;
