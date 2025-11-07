import Spline from "@splinetool/react-spline";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Hear every detail.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            A modern streaming experience inspired by studio-grade sound. Create playlists, follow artists, and stream without page reloads.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-zinc-900 font-semibold py-2.5 px-5 hover:bg-emerald-300 transition">
              <Play className="w-4 h-4" />
              Start Listening
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white font-semibold py-2.5 px-5 hover:bg-white/20 transition">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950" />
    </section>
  );
}
