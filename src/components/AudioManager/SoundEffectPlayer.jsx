import { useEffect, useState } from "react";
import { Howl } from "howler";

import Click from "../../assets/soundFx/SettingsClick.mp3";
import ClickNext from "../../assets/soundFx/SettingsClick.mp3";
import ClickPrev from "../../assets/soundFx/SettingsClick.mp3";
import ClickX from "../../assets/soundFx/SettingsClick.mp3";
import CorrectA from "../../assets/soundFx/Correct.mp3";
import CorrectB from "../../assets/soundFx/Correct.mp3";
import WrongA from "../../assets/soundFx/Wrong.mp3";
import WrongB from "../../assets/soundFx/Wrong.mp3";
import Winner from "../../assets/soundFx/Winner.mp3";
import Loser from "../../assets/soundFx/Loser.mp3";
import Countdown from "../../assets/soundFx/CountDown.mp3";

const soundSources = {
  Click: Click,
  ClickX: ClickX,
  ClickNext: ClickNext,
  ClickPrev: ClickPrev,
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
  CorrectA: 1,
  CorrectB: 1,
  WrongA: 0.3,
  WrongB: 0.3,
  Winner: 1,
  Loser: 0.5,
  Countdown: 1,
};

export default function SoundEffectPlayer({
  isSoundEnabled,
  musicId,
  isSoundEffectEnabled,
}) {
  const [sounds, setSounds] = useState({});
  const [playingSounds, setPlayingSounds] = useState([]);

  useEffect(() => {
    const loadedSounds = {};
    Object.keys(soundSources).forEach((key) => {
      const sound = new Howl({
        src: [soundSources[key]],
        volume: soundVolumes[key],
      });
      loadedSounds[key] = sound;
    });
    setSounds(loadedSounds);

    return () => {
      Object.values(loadedSounds).forEach((sound) => sound.unload());
    };
  }, []);

  useEffect(() => {
    if (isSoundEnabled && isSoundEffectEnabled) {
      const sound = sounds[musicId];
      if (sound) {
        const soundId = sound.play();
        setPlayingSounds((prevSounds) => [...prevSounds, soundId]);
      }
    }
  }, [sounds, musicId, isSoundEnabled, isSoundEffectEnabled]);

  useEffect(() => {
    if (!isSoundEffectEnabled) {
      stopAllSounds();
    }
  }, [isSoundEffectEnabled]);

  const stopAllSounds = () => {
    playingSounds.forEach((soundId) => {
      const sound = sounds[musicId];
      if (sound) {
        sound.stop(soundId);
      }
    });
    setPlayingSounds([]);
  };
  
  return null;
}
