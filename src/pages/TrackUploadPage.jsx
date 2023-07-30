import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
   // const uploadData = new FormData();
    // uploadData.append("audioURL", e.target.files[0]);
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
   
    // Send the token through the request "Authorization" Headers
    axios
      .post(
      `${API_URL}/api/trackupload`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
      // Reset the state
      setTitle("");
      setDescription("");
      // setAudioURL(response.data.file); 
      props.refreshTrackupload();
    })
      .catch((error) => console.log(error));
  };

export default TrackUploadPage;
