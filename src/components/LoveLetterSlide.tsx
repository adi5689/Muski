import { Heart, Mail } from "lucide-react";

interface LoveLetterSlideProps {
  letter: string;
}

const LoveLetterSlide = ({ letter }: LoveLetterSlideProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-romantic relative overflow-hidden">
      {/* Floating decorative hearts */}
      <div className="absolute top-20 left-10 animate-float-gentle">
        <Heart className="w-8 h-8 text-primary/30 fill-primary/20" />
      </div>
      <div className="absolute top-40 right-16 animate-float-gentle animation-delay-300">
        <Heart className="w-6 h-6 text-accent/30 fill-accent/20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-gentle animation-delay-500">
        <Heart className="w-10 h-10 text-primary/20 fill-primary/10" />
      </div>
      <div className="absolute bottom-32 right-10 animate-float-gentle animation-delay-700">
        <Heart className="w-7 h-7 text-accent/25 fill-accent/15" />
      </div>

      <div className="max-w-2xl w-full mx-auto">
        {/* Title */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              A Letter From My Heart
            </span>
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-primary">
            💌
          </h2>
        </div>

        {/* Letter Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-card animate-fade-in-up animation-delay-200">
          <div className="relative">
            {/* Decorative corner */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />

            {/* Letter Content */}
            <div className="font-display text-lg sm:text-xl leading-relaxed text-foreground/90 whitespace-pre-line italic">
              {letter}
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center mt-10 animate-fade-in-up animation-delay-500">
          <p className="font-cursive text-3xl sm:text-4xl text-primary mb-4">
            Forever Yours
          </p>
          <div className="flex justify-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-soft" />
            <Heart className="w-6 h-6 text-accent fill-accent animate-pulse-soft animation-delay-200" />
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-soft animation-delay-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetterSlide;
