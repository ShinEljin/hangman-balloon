import { useEffect, useRef } from "react";
import useSound from "use-sound";
import Home from "../../assets/soundFx/Homebgmusic.mp3";
import PreGame from "../../assets/soundFx/Pregame.mp3";
import InGame from "../../assets/soundFx/Ingame.mp3";

const soundSources = {
  Home: {
    src: Home,
    volume: 0.3
  },
  PreGame: {
    src: PreGame,
    volume: 0.5
  },
  InGame: {
    src: InGame,
    volume: 0.2
  },
  Remove: {
    src: "",
  }
};

export default function BgMusicPlayer({ isMusicEnabled, musicId }) {
  const { src, volume } = soundSources[musicId] || {}; 

  const [play, { pause }] = useSound(src, {
    volume,
    loop: true,
    interrupt: true
  });

  const currentMusicIdRef = useRef(null);

  useEffect(() => {
    Object.values(soundSources).forEach(({ src }) => {
      const audio = new Audio(src);
      audio.preload = "auto";
    });
  }, []);

  useEffect(() => {
    if (isMusicEnabled) {
      if (currentMusicIdRef.current && currentMusicIdRef.current !== musicId) {
        pause(); 
      }
      currentMusicIdRef.current = musicId; 
      play();
    } else {
      pause();
    }


    return () => {
      pause();
      currentMusicIdRef.current = null; 
    };
  }, [isMusicEnabled, musicId, play, pause]);

  return null;
}
