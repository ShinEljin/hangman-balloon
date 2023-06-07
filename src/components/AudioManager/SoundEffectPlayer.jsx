import { Howl } from "howler";
import { useEffect, useState } from "react";

import {
  default as CorrectA,
  default as CorrectB,
  default as CorrectC,
} from "../../assets/soundFx/Correct.mp3";
import Countdown from "../../assets/soundFx/CountDown.mp3";
import Loser from "../../assets/soundFx/Loser.mp3";
import {
  default as Click,
  default as ClickNext,
  default as ClickPrev,
  default as ClickX,
  default as ClickSelect,
  default as ClickSelectB,
} from "../../assets/soundFx/SettingsClick.mp3";
import Winner from "../../assets/soundFx/Winner.mp3";
import {
  default as WrongA,
  default as WrongB,
 default as WrongC,
} from "../../assets/soundFx/Wrong.mp3";

const soundSources = {
  Click: Click,
  ClickSelect: ClickSelect,
  ClickSelectB: ClickSelectB,
  ClickX: ClickX,
  ClickNext: ClickNext,
  ClickPrev: ClickPrev,
  CorrectA: CorrectA,
  CorrectB: CorrectB,
  CorrectC: CorrectC,
  WrongA: WrongA,
  WrongB: WrongB,
  WrongC: WrongC,
  Winner: Winner,
  Loser: Loser,
  Countdown: Countdown,
  Remove: "",
};

const soundVolumes = {
  Click: 1,
  ClickX: 1,
  ClickSelect: 1,
  ClickSelectB: 1,
  ClickNext: 1,
  ClickPrev: 1,
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
  isStopAllSounds,
  loseStopper,
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
    if (isStopAllSounds === true) {
      stopAllSounds();
    } 
    if (loseStopper == true) {
      stopLoseSound();
    }
  }, [isSoundEffectEnabled, isStopAllSounds, loseStopper]);

  const stopAllSounds = () => {
    playingSounds.forEach((soundId) => {
      Object.values(sounds).forEach((sound) => {
        sound.stop(soundId);
      });
    });
    setPlayingSounds([]);
  };

  const stopLoseSound = () => {
    Object.values(sounds).forEach((sound) => {
      sound.stop(); // Stop the sound
    });
    setPlayingSounds([]); // Clear the playingSounds array
  };

  return null;
}