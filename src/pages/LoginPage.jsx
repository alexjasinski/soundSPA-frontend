import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styles from "../AddTrack.module.css";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  

  const navigate = useNavigate();

  /*  UPDATE - get authenticateUser from the context */
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        // Save the token in the localStorage.
        storeToken(response.data.authToken);
        navigate('/tracklist');
        // Verify the token by sending a request
        // to the server's JWT validation endpoint.
        authenticateUser().then(() => {
        navigate("/tracklist")})
        
    })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          // If the API returned an error message, set it as the errorMessage state.
          setErrorMessage(error.response.data.message);
        } else {
          // If there's no specific error message from the API, handle the generic error.
          setErrorMessage("An error occurred during login.");
        }
      });
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form className={styles.AddTrackForm} onSubmit={handleLoginSubmit}>

        <label>Username:</label>
        <input type="username" name="username" value={username} onChange={handleUsername} ></input>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button id={styles.submit_btn}  type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
