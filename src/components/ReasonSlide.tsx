import { Heart, ImageIcon } from "lucide-react";

interface ReasonSlideProps {
  number: number;
  reason: string;
  image?: string;
}

const ReasonSlide = ({ number, reason, image }: ReasonSlideProps) => {
  return (
    <div
      className="min-h-screen h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-pink-200 via-rose-300 to-purple-200
 overflow-hidden"
    >
      <div className="max-w-lg w-full mx-auto text-center">
        {/* Reason Number */}
        <div className="mb-4 sm:mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 font-body text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">
            <Heart className="w-3 h-3 fill-primary text-primary" />
            Reason #{number}
            <Heart className="w-3 h-3 fill-primary text-primary" />
          </span>
        </div>

        {/* Image */}
        <div className="relative mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
          <div className="aspect-[4/5] max-h-[52vh] mx-auto rounded-2xl overflow-hidden shadow-card bg-card border-4 border-card">
            {image ? (
              <img
                src={image}
                srcSet={`
                ${image} 1x,
                ${image} 2x
              `}
                sizes="(max-width: 768px) 80vw, 420px"
                alt={`Reason ${number}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-rose-light via-lavender-light to-cream flex flex-col items-center justify-center gap-3 p-6">
                <div className="relative">
                  <Heart className="w-14 h-14 sm:w-16 sm:h-16 text-primary/40 fill-primary/25 animate-pulse-soft" />
                  <ImageIcon className="w-5 h-5 text-primary/50 absolute bottom-0 right-0" />
                </div>
                <p className="text-xs text-muted-foreground/60 font-body">
                  Add your photo here
                </p>
              </div>
            )}
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-2 border-2 border-primary/20 rounded-3xl pointer-events-none" />
        </div>

        {/* Reason Text */}
        <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic animate-fade-in-up animation-delay-300 px-2">
          "{reason}"
        </p>

        {/* Decorative hearts */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-3 animate-fade-in-up animation-delay-500">
          <Heart className="w-4 h-4 text-primary/40 fill-primary/30" />
          <Heart className="w-5 h-5 text-primary/60 fill-primary/50" />
          <Heart className="w-4 h-4 text-primary/40 fill-primary/30" />
        </div>
      </div>
    </div>
  );
};

export default ReasonSlide;
