import { useEffect } from "react";
import { Howl } from "howler";
import BgMusic from "../../assets/soundFx/bgmusic.mp3";

const bgMusic = new Howl({
  src: [BgMusic],
  volume: 0.3,
  loop: true,
});

export default function BgMusicPlayer({ isMusicEnabled }) {
  useEffect(() => {
    if (isMusicEnabled) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  }, [isMusicEnabled]);

  return null;
}
