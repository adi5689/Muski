import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  drift: number;
}

const HEART_COUNT = 32; // ⬅️ increased intensity (was 15)

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];

      for (let i = 0; i < HEART_COUNT; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 10 + Math.random() * 10, // slower = romantic
          size: 10 + Math.random() * 24, // varied sizes
          opacity: 0.25 + Math.random() * 0.35,
          drift: (Math.random() - 0.5) * 40, // gentle sideways drift
        });
      }

      setHearts(newHearts);
    };

    generateHearts();

    // Regenerate periodically so pattern doesn't feel static
    const interval = setInterval(generateHearts, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            animation: `
              floatUp ${heart.duration}s linear ${heart.delay}s infinite
            `,
            transform: `translateX(${heart.drift}px)`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-primary fill-primary"
            style={{ opacity: heart.opacity }}
          />
        </div>
      ))}

      {/* Animations */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(110vh);
              opacity: 0;
            }
            10% {
              opacity: 0.35;
            }
            50% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-130vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingHearts;
