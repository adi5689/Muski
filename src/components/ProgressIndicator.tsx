interface ProgressIndicatorProps {
    current: number;
    total: number;
  }
  
  const ProgressIndicator = ({ current, total }: ProgressIndicatorProps) => {
    const progress = (current / total) * 100;
  
    return (
      <div className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
        {/* Vertical progress bar */}
        <div className="h-32 w-1.5 bg-border/30 rounded-full overflow-hidden relative">
          <div
            className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-500 ease-out rounded-full absolute bottom-0"
            style={{ height: `${progress}%` }}
          />
        </div>
        
        {/* Counter */}
        <div className="glass-card px-3 py-2 rounded-full shadow-romantic">
          <span className="font-display text-xs text-foreground/80">
            <span className="text-primary font-semibold">{current}</span>
            <span className="text-foreground/70">/{total}</span>
          </span>
        </div>
      </div>
    );
  };
  
  export default ProgressIndicator;
  