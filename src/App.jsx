import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GameScreen from "./pages/game-screen/GameScreen";
import MainScreen from "./pages/main-screen/MainScreen";
import PreGame from "./pages/pre-game/PreGame";

export const categoryContext = createContext();
function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const selectedOptionObject = {
    selectedOption: selectedOption,
    setSelectedOption: setSelectedOption,
  };
  return (
    <categoryContext.Provider value={selectedOptionObject}>
      <Routes>
        <Route path="/pre-game" element={<PreGame />} />

        <Route path="/" element={<MainScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </categoryContext.Provider>
  );
}

export default App;
