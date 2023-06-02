import { createContext, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GameScreen from "./pages/game-screen/GameScreen";
import MainScreen from "./pages/main-screen/MainScreen";
import PreGame from "./pages/pre-game/PreGame";
import SoundEffectPlayer from "./components/AudioManager/SoundEffectPlayer";
import BgMusicPlayer from "./components/AudioManager/BgMusicPlayer";

export const categoryContext = createContext();
export const soundStateContext = createContext();

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const selectedOptionObject = {
    selectedOption: selectedOption,
    setSelectedOption: setSelectedOption,
  };

  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isSoundEffectEnabled, setIsSoundEffectEnabled] = useState(true);
  const [currentSoundId, setCurrentSoundId] = useState("");
  const [currentMusicId, setCurrentMusicId] = useState("");
  const location = useLocation();
  const routePath = location.pathname;


  useEffect(() => {
    handleBgMusicToggle();
  }, [routePath]);

  const handleBgMusicToggle = () => {
    setIsMusicEnabled(true);
    if (routePath === "/pre-game") {
      setCurrentMusicId("PreGame");
    } else if (routePath === "/game") {
      setCurrentMusicId("InGame");
    } else {
      setCurrentMusicId("");
    }
  };
  
  const handleSoundEffect = (musicId) => {
    if (currentSoundId === musicId) {
      setIsSoundEnabled(!isSoundEnabled);
    } else {
      setIsSoundEnabled(true);
      setCurrentSoundId(musicId);
    }
  };




  return (
    <categoryContext.Provider value={selectedOptionObject}>
      <soundStateContext.Provider
        value={{
          setIsSoundEffectEnabled,
          isSoundEffectEnabled,
          handleSoundEffect,
          handleBgMusicToggle,
          currentSoundId,
          currentMusicId,
          isMusicEnabled,
          setIsMusicEnabled,
        }}
      >
        {isMusicEnabled && (
          <BgMusicPlayer
            isMusicEnabled={isMusicEnabled}
            musicId={currentMusicId}
          />
        )}

        <Routes>
          <Route path="/pre-game" element={<PreGame />} />
          <Route path="/" element={<MainScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>

        {isSoundEnabled && (
          <SoundEffectPlayer
            isSoundEnabled={isSoundEnabled}
            musicId={currentSoundId}
            isSoundEffectEnabled={isSoundEffectEnabled}
          />
        )}
      </soundStateContext.Provider>
    </categoryContext.Provider>
  );
}

export default App;
