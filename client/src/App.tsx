import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import "@fontsource/inter";

// Import components
import Navigation from "./components/ui/Navigation";
import LoadingScreen from "./components/ui/LoadingScreen";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WorkAreas from "./components/sections/WorkAreas";
import Testimonials from "./components/sections/Testimonials";
import PledgeSystem from "./components/sections/PledgeSystem";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";
import Scene3D from "./components/3d/Scene3D";

// Audio hook
import { useAudio } from "./lib/stores/useAudio";

// Define control keys for interactive elements
const controls = [
  { name: "interact", keys: ["KeyE", "Space"] },
  { name: "navigate", keys: ["Enter"] },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCanvas, setShowCanvas] = useState(false);
  const { setBackgroundMusic } = useAudio();

  // Initialize audio and loading
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load background music
        const music = new Audio("/sounds/background.mp3");
        music.loop = true;
        music.volume = 0.3;
        setBackgroundMusic(music);

        // Simulate loading time for premium experience
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        setIsLoading(false);
        setTimeout(() => setShowCanvas(true), 500);
      } catch (error) {
        console.error("Error initializing app:", error);
        setIsLoading(false);
        setShowCanvas(true);
      }
    };

    initializeApp();
  }, [setBackgroundMusic]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <KeyboardControls map={controls}>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-orange-950">
        {/* Fixed 3D Canvas Background */}
        {showCanvas && (
          <div className="fixed inset-0 z-0">
            <Canvas
              shadows
              camera={{
                position: [0, 5, 10],
                fov: 50,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                powerPreference: "high-performance",
                alpha: true
              }}
            >
              <color attach="background" args={["#0a0f0a"]} />
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </Canvas>
          </div>
        )}

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <WorkAreas />
          <Testimonials />
          <PledgeSystem />
          <Blog />
          <Footer />
        </main>
      </div>
    </KeyboardControls>
  );
}

export default App;
