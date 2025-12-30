import { ChevronDown, Heart } from "lucide-react";

interface CoverSlideProps {
  onStart: () => void;
}

const CoverSlide = ({ onStart }: CoverSlideProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.jpg"
          alt="Romantic couple illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Decorative Hearts */}
        <div className="flex justify-center gap-4 mb-6 animate-fade-in-up">
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
          <Heart className="w-8 h-8 text-accent fill-accent animate-pulse-soft animation-delay-200" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft animation-delay-500" />
        </div>

        {/* Title */}
        <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-4 animate-fade-in-up animation-delay-100">
          25 Reasons Why
        </h1>
        <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600 mb-6 animate-fade-in-up animation-delay-200">
          I Love You
        </h2>
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-300">
          <Heart className="w-10 h-10 text-red-600 fill-primary animate-float-gentle" />
        </div>

        {/* Subtitle */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-white italic mb-12 animate-fade-in-up animation-delay-500">
          Happy Birthday, My Love
        </p>

        <div className="flex justify-center items-center mt-48">
          {/* CTA */}
          <button
            onClick={onStart}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in-up animation-delay-700"
          >
            <span className="font-body text-sm text-white tracking-wider uppercase">
              Click to begin your surprise
            </span>
            <ChevronDown className="w-6 h-6 text-white animate-bounce" />
          </button>
        </div>
      </div>

      {/* Sparkle decorations */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-sparkle" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold-light rounded-full animate-sparkle animation-delay-300" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-sparkle animation-delay-500" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-gold rounded-full animate-sparkle animation-delay-700" />
    </div>
  );
};

export default CoverSlide;
