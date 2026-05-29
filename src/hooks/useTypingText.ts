import { useEffect, useState } from "react";

export function useTypingText(text: string, speed = 6) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      return;
    }

    setDisplayed("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += Math.max(1, Math.floor(text.length / 260));
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed]);

  return displayed;
}
