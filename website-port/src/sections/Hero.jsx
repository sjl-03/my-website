import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom.jsx";

const Hero = () => {
  return (
    <section className="min-h-screen border-2 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, <span className="waving-hand">👋</span> I am
        </p>
        <p className="hero_tag text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">
          Shenjun Lu
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
