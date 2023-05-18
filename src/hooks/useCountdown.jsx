import { useEffect, useState } from "react";

const useCountdown = () => {
  const [secondsLeft, setSecondsLeft] = useState(null);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds) {
    setSecondsLeft(seconds);
  }

  return { secondsLeft, start };
};
export default useCountdown;
