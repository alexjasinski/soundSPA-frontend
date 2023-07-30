import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import styles from "../AddTrack.module.css";
import styles from "../NavBar.module.css"
 
function Navbar() {
    const { 
      isLoggedIn,
      user,                
      logOutUser            
    } = useContext(AuthContext);
   
    return (
      <div>
      <img id={styles.logo} src="./src/images/soundspa_logo.jpg" alt="logo_img" />
      <br />
      <br />
      <nav className={styles.NavBar}>
        <Link to="/">
          <button className={styles.Navbar_btn}>About</button>
        </Link>
        
        {isLoggedIn && (
          <>
            <Link to="/tracklist">
              <button className={styles.Navbar_btn}>Tracklist</button>
            </Link>
            <Link to="/tracklist/search"> <button className={styles.Navbar_btn}>Search</button> </Link>
            <button className={styles.Navbar_btn} onClick={logOutUser}>Logout</button>
            <span>{user && user.name}</span>
          </>
        )}
   
        {!isLoggedIn && (
          <>
            <Link to="/signup"> <button className={styles.Navbar_btn}>Signup</button> </Link>
            <Link to="/login"> <button className={styles.Navbar_btn}>Login</button> </Link>
           
            
          </>
        )}      
   
      </nav>
      </div>
    );
  }
   
  export default Navbar;