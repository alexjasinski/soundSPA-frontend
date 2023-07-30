import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditTrackPage(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [description, setDescription] = useState("");

  const { trackId } = useParams;

  useEffect(() => {
    axios
      .get(`$API_URL}/api/tracklist/${trackId}`)
      .then((response) => {
        const oneTrack = response.data;
        setTitle(oneTrack.title);
        setArtist(oneTrack.artist);
        setDescription(oneTrack.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, artist, description };

    axios
      .put(`${API_URL}/api/tracklist/${trackId}`, requestBody)
      .then((response) => {
        Navigate(`/tracklist/${trackId}`);
      });
  };

  const deleteTrack = () => {
    axios
      .delete(`${API_URL}/api/tracklist/${trackId}`)
      .then(() => {
        navigate("/tracklist");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="EditTrackPage">
      <h3>Edit track</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Artist:</label>
        <label>Artist:</label>
        <input
          type="text"
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <label>Artist:</label>
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Track</button>
      </form>
      <button onClick={deleteTrack}>Delete Track</button>
    </div>
  );
}

export default EditTrackPage;
