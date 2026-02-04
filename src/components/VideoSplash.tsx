import { useState, useEffect, useRef } from "react";
import introVideo from "@/assets/656.mp4";

interface VideoSplashProps {
  onComplete: () => void;
}

const VideoSplash = ({ onComplete }: VideoSplashProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // wait for fade-out animation
    }, 7000); // fallback duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[100] bg-burgundy animate-fade-out pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-burgundy flex items-center justify-center">
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-contain object-center"
      />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-2 text-ivory/80 hover:text-ivory text-sm tracking-wide border border-ivory/30 hover:border-ivory/60 rounded-full transition-all duration-300"
      >
        Skip
      </button>
    </div>
  );
};

export default VideoSplash;
