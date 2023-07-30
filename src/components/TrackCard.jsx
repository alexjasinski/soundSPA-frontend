import { Link } from "react-router-dom";
import styles from "../TrackCard.module.css";
// import styles from "../TracklistPage.module.css";

function TrackCard({ trackTitle, artistName, _id }) {
  console.log("lalala", trackTitle);
  return (
    <div>
      <Link to={`/tracklist/${_id}`}>
        <div className={styles.trackcardContainer}>
          <h2>{trackTitle}</h2>
          <h1>{artistName}</h1>
          
        </div>
      </Link>
      <p style={{ maxWidth: "400px" }}> </p>
    </div>
  );
}

export default TrackCard;
