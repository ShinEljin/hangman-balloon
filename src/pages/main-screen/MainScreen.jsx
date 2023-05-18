import "./MainScreen.css";
import balloon from "../../assets/Balloon_0.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function MainScreen() {
  return (
    <div className="cloud__class__1">
      <div className="app-bg">
        <div>
          {/* WELCOME TEXT */}
          <div className="wel__text">
            <br />
            Welcome to Hangman
            <br />
            Click to begin!
          </div>

          <div className="balloon">
            <img
              src={balloon}
              height="350px"
              width="220px"
              alt="img not found"
            />
          </div>

          <div id="buttonContainer">
            <Button id="sp">
              <Link to="/pre-game" style={{ textDecoration: "none" }}>
                🕹️ Start 🕹️
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
