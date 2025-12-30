import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LoveCarousel from "@/components/LoveCarousel";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <>
      <Helmet>
        <title>25 Reasons Why I Love You ❤️ | Happy Birthday My Love</title>
        <meta
          name="description"
          content="A romantic birthday surprise celebrating 25 reasons why I love you."
        />
        <meta property="og:title" content="25 Reasons Why I Love You ❤️" />
        <meta
          property="og:description"
          content="A romantic birthday surprise made with love."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative overflow-hidden min-h-screen">
        {/* Floating Hearts Background */}
        <FloatingHearts />

        {/* Music Toggle (🌻 sunflower loop + helper text handled inside) */}
        <MusicToggle onPlay={() => setMusicStarted(true)} />

        {/* Main Carousel */}
        <LoveCarousel />
      </main>
    </>
  );
};

export default Index;
