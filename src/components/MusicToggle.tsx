import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
// @ts-ignore
import loveSong from "../assets/love-song.mp3";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(loveSong);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-10 lg:top-[100px] right-4 z-50 flex flex-col items-center gap-2">
      {/* 🌻 Looping Sunflower */}
      {!isPlaying && (
        <div className="sunflower-wrapper pointer-events-none">
          <span className="sunflower">🌻</span>
        </div>
      )}

      {/* Play / Pause Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        className="
          relative bg-card/80 backdrop-blur-sm
          hover:bg-card border border-border/50
          shadow-romantic z-10
          h-8 w-8 lg:w-16 lg:h-16
        "
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="h-12 w-12 text-primary" />
        ) : (
          <Play className="h-12 w-12 text-primary" />
        )}
      </Button>

      {/* Gentle Helper Text */}
      {!isPlaying && (
        <p className="text-sm text-white/90 mt-1 tracking-wide">
          before you scroll, play the music
        </p>
      )}

      {/* 🌬️ Styles */}
      <style>
        {`
          .sunflower-wrapper {
            position: absolute;
            top: -42px;
            animation: sunflowerLoop 4.5s ease-in-out infinite;
          }

          .sunflower {
            font-size: 34px;
            display: block;
          }

          @keyframes sunflowerLoop {
            0% {
              transform: scale(0.5) translateY(14px);
              opacity: 0;
            }
            20% {
              transform: scale(1.1) translateY(0);
              opacity: 1;
            }
            40% {
              transform: scale(0.95) translateY(8px);
              opacity: 0.9;
            }
            60% {
              transform: scale(0.85) translateY(20px);
              opacity: 0;
            }
            100% {
              transform: scale(0.5) translateY(20px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MusicToggle;
