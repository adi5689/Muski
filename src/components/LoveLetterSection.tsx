import { Heart, Mail, X } from "lucide-react";

interface LoveLetterSectionProps {
  letter: string;
  onClose: () => void;
}

const LoveLetterSection = ({ letter, onClose }: LoveLetterSectionProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-romantic overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-3 rounded-full glass-card hover:bg-card transition-all duration-300 group shadow-romantic"
        aria-label="Close letter"
      >
        <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Floating Hearts */}
      <div className="fixed top-20 left-10 animate-float-gentle pointer-events-none">
        <Heart className="w-8 h-8 text-primary/30 fill-primary/20" />
      </div>
      <div className="fixed bottom-32 right-10 animate-float-gentle animation-delay-500 pointer-events-none">
        <Heart className="w-7 h-7 text-accent/25 fill-accent/15" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-start px-4 py-20">
        <div className="max-w-2xl w-full mx-auto space-y-20">

          {/* ================= POEM SECTION ================= */}
          <section className="text-center animate-fade-in-up">
            <div className="mb-6 flex justify-center gap-2 opacity-80">
              <Heart className="w-6 h-6 fill-primary/50" />
              <Heart className="w-8 h-8 fill-primary" />
              <Heart className="w-6 h-6 fill-primary/50" />
            </div>

            <p className="font-display text-lg sm:text-xl md:text-2xl leading-relaxed italic text-foreground/90">
              I love the way your eyes look at the world,<br />
              As if kindness was the first thing they learned.<br />
              They don’t just see—they understand,<br />
              They soften storms without a word spoken.<br /><br />

              I love your hair, the way it falls and listens,<br />
              How it frames your thoughts before your face,<br />
              Sometimes wild with laughter,<br />
              Sometimes tied back while you chase your dreams.<br /><br />

              I love your waist, not for its shape alone,<br />
              But for how it carries both strength and grace—<br />
              The quiet confidence of someone<br />
              Who knows she does not need to prove herself.<br /><br />

              I love the way you exist,<br />
              As if being yourself is already enough.<br />
              Your presence fills rooms without trying,<br />
              Your absence leaves echoes behind.<br /><br />

              I love your heart—how it remembers others,<br />
              How it gives without keeping count,<br />
              How it holds space for pain and hope together,<br />
              Never choosing one over the other.<br /><br />

              I love your ambitions, the fire you protect,<br />
              The dreams you whisper only to yourself.<br />
              I watch you reach for more,<br />
              Not to escape who you are,<br />
              But to become even more of it.<br /><br />

              And in the end, it is not your eyes,<br />
              Or your hair, or your beauty I love most—<br />
              <span className="block mt-3 font-semibold not-italic">
                It is you.
              </span>
              The way you are made of softness and strength,<br />
              Of courage and care,<br />
              Of all the things that make my heart feel<br />
              Like it has finally found its home.
            </p>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 opacity-50">
            <span className="h-px w-24 bg-primary/40" />
            <Heart className="w-4 h-4 fill-primary/60" />
            <span className="h-px w-24 bg-primary/40" />
          </div>

          {/* ================= LETTER SECTION ================= */}
          <section>
            {/* Title */}
            <div className="text-center mb-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  A Letter From My Heart
                </span>
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-cursive text-5xl sm:text-6xl text-primary">
                💌
              </h2>
            </div>

            {/* Letter Card */}
            <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl shadow-card animate-fade-in-up">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />

                <div className="font-display text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/90 whitespace-pre-line py-4">
                  {letter}
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-center mt-12 animate-fade-in-up">
              <p className="font-cursive text-4xl sm:text-5xl text-primary mb-6">
                Forever Yours
              </p>
              <div className="flex justify-center gap-3">
                <Heart className="w-6 h-6 fill-primary animate-pulse-soft" />
                <Heart className="w-7 h-7 fill-accent animate-pulse-soft animation-delay-200" />
                <Heart className="w-6 h-6 fill-primary animate-pulse-soft animation-delay-500" />
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-16">
              <button
                onClick={onClose}
                className="font-body text-sm text-muted-foreground hover:text-primary transition"
              >
                ← Back to the surprise
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LoveLetterSection;