import { useEffect } from "react";
import { Howl } from "howler";
import Carl from "../../assets/soundFx/TANDA.mp3"
import Russell from "../../assets/soundFx/BATA.mp3"
import Bird from "../../assets/soundFx/IBON.mp3"
import Click from "../../assets/soundFx/SettingsClick.mp3"


const musicSources = {
  Click: {
    src: [Click],
    volume: 1,
    preload: true,
    html5: true,
  },
  Carl: {
    src: [Carl],
    volume: 1,
    preload: true,
    html5: true,
  },
  Russell: {
    src: [Russell],
    volume: 1,
    preload: true,
    html5: true,
  },
  Bird: {
    src: [Bird],
    volume: 1,
    preload: true,
    html5: true,
  },
 
};

export default function SoundEffectPlayer({ isSoundEnabled, musicId, }) {
  useEffect(() => {
    const music = new Howl(musicSources[musicId]);

    if (isSoundEnabled) {
      music.play();
    } else {
      music.pause();
    }

    return () => {
      music.stop();
      music.unload();
    };
  }, [isSoundEnabled, musicId]);

  return null;
}
