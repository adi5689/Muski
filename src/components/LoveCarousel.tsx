import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import CoverSlide from "./CoverSlide";
import ReasonSlide from "./ReasonSlide";
import LoveLetterSection from "./LoveLetterSection";
import EndSlide from "./EndSlide";
import ProgressIndicator from "./ProgressIndicator";
import { reasons, loveLetter } from "@/data/reasons";

const LoveCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [showLetterSection, setShowLetterSection] = useState(false);

  const totalSlides = 1 + reasons.length + 1; // Cover + 25 reasons + End

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setCurrentSlide(index);
    setShowProgress(index > 0 && index <= reasons.length);
    
    // Show letter section when reaching the end slide
    if (index === totalSlides - 1) {
      setShowLetterSection(true);
    }
  }, [emblaApi, totalSlides]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleStart = () => {
    scrollTo(1);
  };

  const handleReplay = () => {
    setShowLetterSection(false);
    scrollTo(0);
  };

  const handleReadLetter = () => {
    setShowLetterSection(true);
  };

  const handleCloseLetter = () => {
    setShowLetterSection(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="h-full w-full overflow-hidden touch-pan-y">
        <div className="flex flex-col h-full">
          {/* Cover Slide */}
          <div className="flex-[0_0_100%] min-h-0 h-screen">
            <CoverSlide onStart={handleStart} />
          </div>

          {/* Reason Slides */}
          {reasons.map((reason) => (
            <div key={reason.number} className="flex-[0_0_100%] min-h-0 h-screen">
              <ReasonSlide
                number={reason.number}
                reason={reason.text}
                image={reason.image}
              />
            </div>
          ))}

          {/* End Slide */}
          <div className="flex-[0_0_100%] min-h-0 h-screen">
            <EndSlide onReplay={handleReplay} onReadLetter={handleReadLetter} />
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Positioned on the right side */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {currentSlide > 0 && (
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full glass-card hover:bg-card transition-all duration-300 group shadow-romantic"
            aria-label="Previous slide"
          >
            <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        )}

        {currentSlide < totalSlides - 1 && (
          <button
            onClick={scrollNext}
            className="p-3 rounded-full glass-card hover:bg-card transition-all duration-300 group shadow-romantic"
            aria-label="Next slide"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        )}
      </div>

      {/* Progress Indicator - Positioned on the left side */}
      {showProgress && (
        <ProgressIndicator current={currentSlide} total={reasons.length} />
      )}

      {/* Love Letter Section - Full screen overlay */}
      {showLetterSection && (
        <LoveLetterSection letter={loveLetter} onClose={handleCloseLetter} />
      )}
    </div>
  );
};

export default LoveCarousel;
