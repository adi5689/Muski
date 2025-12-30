import { Heart } from "lucide-react";

const PoemSection = () => {
  return (
    <div className="min-h-screen h-screen flex items-center justify-center px-6 bg-gradient-to-br from-rose-300 via-pink-400 to-purple-300 overflow-hidden">
      <div className="max-w-3xl text-center text-white animate-fade-in-up">
        {/* Decorative Hearts */}
        <div className="mb-6 flex justify-center gap-2 opacity-90">
          <Heart className="w-6 h-6 fill-white/70 text-white/80" />
          <Heart className="w-8 h-8 fill-white text-white" />
          <Heart className="w-6 h-6 fill-white/70 text-white/80" />
        </div>

        {/* Poem */}
        <p className="font-display text-lg sm:text-xl md:text-2xl leading-relaxed italic">
          I love the way your eyes look at the world,
          <br />
          As if kindness was the first thing they learned.
          <br />
          They don’t just see—they understand,
          <br />
          They soften storms without a word spoken.
          <br />
          <br />
          I love your hair, the way it falls and listens,
          <br />
          How it frames your thoughts before your face,
          <br />
          Sometimes wild with laughter,
          <br />
          Sometimes tied back while you chase your dreams.
          <br />
          <br />
          I love your waist, not for its shape alone,
          <br />
          But for how it carries both strength and grace—
          <br />
          The quiet confidence of someone
          <br />
          Who knows she does not need to prove herself.
          <br />
          <br />
          I love the way you exist,
          <br />
          As if being yourself is already enough.
          <br />
          Your presence fills rooms without trying,
          <br />
          Your absence leaves echoes behind.
          <br />
          <br />
          I love your heart—how it remembers others,
          <br />
          How it gives without keeping count,
          <br />
          How it holds space for pain and hope together,
          <br />
          Never choosing one over the other.
          <br />
          <br />
          I love your ambitions, the fire you protect,
          <br />
          The dreams you whisper only to yourself.
          <br />
          I watch you reach for more,
          <br />
          Not to escape who you are,
          <br />
          But to become even more of it.
          <br />
          <br />
          And in the end, it is not your eyes,
          <br />
          Or your hair, or your beauty I love most—
          <br />
          <span className="block mt-3 font-semibold not-italic">
            It is you.
          </span>
          The way you are made of softness and strength,
          <br />
          Of courage and care,
          <br />
          Of all the things that make my heart feel
          <br />
          Like it has finally found its home.
        </p>

        {/* Bottom Hearts */}
        <div className="mt-8 flex justify-center gap-3 opacity-80">
          <Heart className="w-5 h-5 fill-white/60" />
          <Heart className="w-6 h-6 fill-white/80" />
          <Heart className="w-5 h-5 fill-white/60" />
        </div>
      </div>
    </div>
  );
};

export default PoemSection;
