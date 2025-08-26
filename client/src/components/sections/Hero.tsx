import { useState, useEffect } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/lib/stores/useAudio";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { backgroundMusic, isMuted, toggleMute } = useAudio();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePlayMusic = () => {
    if (backgroundMusic && !isMuted) {
      backgroundMusic.play().catch(console.error);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-transparent to-black/50" />

      {/* Floating Jhola bags (CSS animated) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 float-animation"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`
            }}
          >
            🛍️
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`text-center z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
          <span className="text-green-400 text-sm font-medium">
            🌱 11+ Years of Environmental Impact
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Jhola:</span>
          <br />
          <span className="text-white">India's</span>
          <br />
          <span className="gradient-text-green">Green Identity</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We broke the cycle of plastic, not with rules—but with relationships, 
          awareness, and action. The habit has changed. The future has begun.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">11+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1000+</div>
            <div className="text-sm text-gray-400">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
            <div className="text-sm text-gray-400">Mindsets Changed</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={() => scrollToAbout()}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full smooth-animation"
          >
            Discover Our Mission
          </Button>
          <Button
            onClick={handlePlayMusic}
            variant="outline"
            size="lg"
            className="glass border-green-500/50 text-white hover:bg-green-500/20 px-8 py-4 text-lg rounded-full smooth-animation"
          >
            {isMuted ? <Play className="w-5 h-5 mr-2" /> : <Pause className="w-5 h-5 mr-2" />}
            {isMuted ? "Play Experience" : "Pause Music"}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400 mx-auto cursor-pointer" onClick={scrollToAbout} />
        </div>
      </div>

      {/* Floating quote */}
      <div className="absolute bottom-20 left-8 max-w-xs glass p-4 rounded-lg opacity-80">
        <p className="text-sm text-gray-300 italic">
          "One Jhola. A Thousand Mindsets. Infinite Impact."
        </p>
        <p className="text-xs text-green-400 mt-2">- Raghukul Aryawart</p>
      </div>
    </section>
  );
};

export default Hero;
