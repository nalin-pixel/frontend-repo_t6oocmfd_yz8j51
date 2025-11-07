import { useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

export default function StickyPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-zinc-950/80 backdrop-blur">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/10/04/audio_6e2013f28f.mp3?filename=lofi-study-112191.mp3"
        onTimeUpdate={onTimeUpdate}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop"
            alt="cover"
            className="w-10 h-10 rounded object-cover"
          />
          <div className="min-w-0">
            <p className="text-sm text-white font-medium truncate">Lofi Study</p>
            <p className="text-xs text-zinc-400 truncate">Pixabay</p>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-2 rounded hover:bg-white/10 text-zinc-200">
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="p-2 rounded bg-emerald-400 text-zinc-900 hover:bg-emerald-300"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button className="p-2 rounded hover:bg-white/10 text-zinc-200">
              <SkipForward className="w-4 h-4" />
            </button>
            <button className="p-2 rounded hover:bg-white/10 text-zinc-200">
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="h-1 mb-3 bg-white/10 rounded">
          <div
            className="h-1 rounded bg-emerald-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
