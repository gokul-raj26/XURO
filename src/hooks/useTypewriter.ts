import { useEffect, useState } from "react";

interface Options {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export const useTypewriter = (texts: string[], options: Options = {}) => {
  const {
    typingSpeed = 75,
    deletingSpeed = 40,
    pauseDuration = 1500,
    loop = true,
  } = options;

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) =>
          loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)
        );
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        if (loop || currentIndex < texts.length - 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            setCharIndex(0);
          }, pauseDuration);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, displayedText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return displayedText;
};
