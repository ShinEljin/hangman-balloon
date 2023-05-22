import { Route, Routes } from "react-router-dom";
import MainScreen from "./pages/main-screen/MainScreen";
import PreGame from "./pages/pre-game/PreGame";
import GameScreen from "./pages/game-screen/GameScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/pre-game" element={<PreGame />} />
      <Route path="/game" element={<GameScreen />} />
    </Routes>
  );
}

export default App;
