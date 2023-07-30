import "./App.css";
import "./TrackCard.module.css";
import "./TracklistPage.module.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TracklistPage from "./pages/TracklistPage";
import TrackDetailsPage from "./pages/TrackDetailsPage";
import EditTrackPage from "./pages/EditTrackPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="about" element={<AboutPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/tracklist" element={<TracklistPage />} />
        <Route
          path="/tracklist/:trackId"
          element={
            <IsPrivate>
              {" "}
              <TrackDetailsPage />{" "}
            </IsPrivate>
          }
        />
        <Route path="/tracklist/edit/:trackId" element={<EditTrackPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
