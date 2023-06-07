import { createContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BgMusicPlayer from "./components/AudioManager/BgMusicPlayer";
import SoundEffectPlayer from "./components/AudioManager/SoundEffectPlayer";
import GameScreen from "./pages/game-screen/GameScreen";
import MainScreen from "./pages/main-screen/MainScreen";
import PreGame from "./pages/pre-game/PreGame";

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
  const [isMusicEffectEnabled, setIsMusicEffectEnabled] = useState(true);
  const [isSoundEffectEnabled, setIsSoundEffectEnabled] = useState(true);
  const [currentSoundId, setCurrentSoundId] = useState("");
  const [currentMusicId, setCurrentMusicId] = useState("");
  const [isStopAllSounds, setIsStopAllSounds] = useState(false);
  const [loseStopper, setLoseStopper] = useState(false);

  const location = useLocation();
  const routePath = location.pathname;

  useEffect(() => {
    handleBgMusicToggle();
  }, []);

  const handleBgMusicToggle = () => {
    setIsMusicEnabled(true);
    if (routePath === "/pre-game") {
      setCurrentMusicId("PreGame");
    } else if (routePath === "/game") {
      setCurrentMusicId("InGame");
    } else {
      setCurrentMusicId("Home");
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
  const handleChangeBG = (musicId) => {
    setIsMusicEnabled(true);
    setCurrentMusicId(musicId);
  };

  const soundEffectStopper = () => {
   setIsStopAllSounds(true);
  };

  const soundEffectEnabler = () => {
    setIsStopAllSounds(false);
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
          setIsStopAllSounds,
          handleChangeBG,
          isMusicEffectEnabled,
          setIsMusicEffectEnabled,
          soundEffectStopper,
          soundEffectEnabler,
          setLoseStopper,
        }}
      >
        {isMusicEnabled && (
          <BgMusicPlayer
            isMusicEnabled={isMusicEnabled}
            musicId={currentMusicId}
            isMusicEffectEnabled={isMusicEffectEnabled}
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
            isStopAllSounds={isStopAllSounds}
            loseStopper={loseStopper}
          />
        )}
      </soundStateContext.Provider>
    </categoryContext.Provider>
  );
}


export default App;
