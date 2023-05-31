import { Route, Routes } from "react-router-dom";
import MainScreen from "./pages/main-screen/MainScreen";
import PreGame from "./pages/pre-game/PreGame";
import SoundProvider from "./SoundContext";

function App() {
  return (

    <SoundProvider>
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/pre-game" element={<PreGame />} />
      <Route path="/game" element={<GameScreen />} />
    </Routes>
    </SoundProvider>

  );
}

export default App;
