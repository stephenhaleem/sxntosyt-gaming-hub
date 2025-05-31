import React, { createContext, useState, useContext, useEffect } from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playHoverSound: () => void;
  playClickSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem("soundEnabled");
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [hoverSound, setHoverSound] = useState<HTMLAudioElement | null>(null);
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio elements once the component mounts
    const hover = new Audio("/sounds/hover-button-287656.mp3");
    const click = new Audio("/sounds/click-21156.mp3");

    hover.volume = 0.3;
    click.volume = 0.4;

    setHoverSound(hover);
    setClickSound(click);

    return () => {
      // Cleanup
      hover.pause();
      click.pause();
    };
  }, []);

  useEffect(() => {
    // Save sound preference to localStorage
    localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const playHoverSound = () => {
    if (soundEnabled && hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound
        .play()
        .catch((e) => console.error("Error playing hover sound:", e));
    }
  };

  const playClickSound = () => {
    if (soundEnabled && clickSound) {
      clickSound.currentTime = 0;
      clickSound
        .play()
        .catch((e) => console.error("Error playing click sound:", e));
    }
  };

  useEffect(() => {
    const handleSoundHover = () => {
      playHoverSound();
    };

    const handleSoundClick = () => {
      playClickSound();
    };

    // Add global event listeners
    const soundHoverElements = document.querySelectorAll(".sound-hover");
    const soundClickElements = document.querySelectorAll(".sound-click");

    soundHoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleSoundHover);
    });

    soundClickElements.forEach((el) => {
      el.addEventListener("click", handleSoundClick);
    });

    return () => {
      // Cleanup event listeners
      soundHoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleSoundHover);
      });

      soundClickElements.forEach((el) => {
        el.removeEventListener("click", handleSoundClick);
      });
    };
  }, [soundEnabled, hoverSound, clickSound]);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playHoverSound,
        playClickSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};
