import { useEffect, useState } from "react";
import useSound from "use-sound";
import Carl from "../../assets/soundFx/TANDA.mp3";
import Russell from "../../assets/soundFx/BATA.mp3";
import Bird from "../../assets/soundFx/IBON.mp3";
import Click from "../../assets/soundFx/SettingsClick.mp3";
import ClickNext from "../../assets/soundFx/SettingsClick.mp3";
import ClickPrev from "../../assets/soundFx/SettingsClick.mp3"
import ClickX from "../../assets/soundFx/SettingsClick.mp3";
import CorrectA from "../../assets/soundFx/Correct.mp3"
import CorrectB from "../../assets/soundFx/Correct.mp3"
import WrongA from "../../assets/soundFx/Wrong.mp3"
import WrongB from "../../assets/soundFx/Wrong.mp3"
import Winner from "../../assets/soundFx/Winner.mp3"
import Loser from "../../assets/soundFx/Loser.mp3"
import Countdown from "../../assets/soundFx/CountDown.mp3"




const soundSources = {
  Click: Click,
  ClickX: ClickX,
  ClickNext: ClickNext,
  ClickPrev: ClickPrev,
  Carl: Carl,
  Russell: Russell,
  Bird: Bird,
  CorrectA: CorrectA,
  CorrectB: CorrectB,
  WrongA: WrongA,
  WrongB: WrongB,
  Winner: Winner,
  Loser: Loser,
  Countdown: Countdown,
};

const soundVolumes = {
  Click: 1,
  ClickX: 1,
  ClickNext: 1,
  ClickPrev: 1,
  CategoryA: 1,
  CategoryB: 1,
  CategoryC: 1,
  CategoryD: 1,
  CategoryE: 1,
  Carl: 1,
  Russell: 1,
  Bird: 1,
  CorrectA: 1,
  CorrectB: 1,
  WrongA: 0.3,
  WrongB: 0.3,
  Winner: 1,
  Loser: 0.5,
  Countdown: 1,
};



export default function SoundEffectPlayer({ isSoundEnabled, musicId, isSoundEffectEnabled }) {
  const [play, { stop }] = useSound(soundSources[musicId], {
    volume: soundVolumes[musicId],
    preload: true,
  });
  
 
  useEffect(() => {
    // Preload sound sources
    Object.values(soundSources).forEach((source) => {
      const audio = new Audio(source);
      audio.preload = "auto";
    });
  }, []);

  useEffect(() => {
    if (isSoundEnabled && isSoundEffectEnabled) {
      play();
    } else {
      stop();
    }

    return () => {
      stop();
    };
  }, [isSoundEnabled, musicId, play, stop, isSoundEffectEnabled]);

  return null;
}
