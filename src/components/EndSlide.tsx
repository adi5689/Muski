import { Heart, RotateCcw, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface EndSlideProps {
  onReplay: () => void;
  onReadLetter: () => void;
}

const EndSlide = ({ onReplay, onReadLetter }: EndSlideProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "25 Reasons Why I Love You",
          text: "A special birthday surprise made with love 💕",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied! 💕",
        description: "Share this memory with someone special",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-romantic relative overflow-hidden">
      {/* Sparkle decorations */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gold rounded-full animate-sparkle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div className="max-w-lg w-full mx-auto text-center">
        {/* Hearts */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in-up">
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart
              key={i}
              className="text-primary fill-primary animate-pulse-soft"
              style={{
                width: i === 2 ? "40px" : "28px",
                height: i === 2 ? "40px" : "28px",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Message */}
        <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 animate-fade-in-up animation-delay-100">
          Happy Birthday
        </h2>
        <p className="font-cursive text-3xl sm:text-4xl text-primary mb-8 animate-fade-in-up animation-delay-200">
          My Love
        </p>

        <p className="font-display text-lg sm:text-xl text-muted-foreground italic mb-12 animate-fade-in-up animation-delay-300">
          Thank you for being the reason behind my smiles.
          <br />
          Here's to many more years of love and laughter together.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
          <Button
            variant="default"
            size="lg"
            onClick={onReadLetter}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-romantic"
          >
            <Mail className="w-4 h-4" />
            Read My Letter
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onReplay}
            className="gap-2 border-primary/30 text-foreground hover:bg-primary/10"
          >
            <RotateCcw className="w-4 h-4" />
            Replay
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleShare}
            className="gap-2 border-primary/30 text-foreground hover:bg-primary/10"
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EndSlide;
