import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Weaving sustainable futures...",
    "Empowering communities...",
    "Growing green dreams...",
    "Creating eco-friendly solutions...",
    "Building a plastic-free world..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-green-950 via-gray-900 to-black flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500/30 rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Leaf className="h-16 w-16 text-green-500 float-animation" />
            <div className="absolute inset-0 h-16 w-16 bg-green-500/20 rounded-full animate-ping" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          Raghukul Aryawart
        </h1>
        <p className="text-xl text-green-300 mb-8">India's Green Identity</p>

        {/* Loading Text */}
        <div className="h-8 mb-8">
          <p className="text-white/80 text-lg animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="glass rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">{progress}%</p>
        </div>

        {/* Jhola Bag Animation */}
        <div className="mt-12">
          <div className="text-6xl animate-bounce">🛍️</div>
          <p className="text-green-300 mt-2">Sustainable. Reusable. Responsible.</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
