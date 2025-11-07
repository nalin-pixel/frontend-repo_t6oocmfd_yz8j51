import { PlayCircle, Heart } from "lucide-react";

const mockSongs = [
  {
    id: 1,
    title: "Neon Skyline",
    artist: "Synth Lab",
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Midnight Drive",
    artist: "Aero",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    duration: "4:05",
  },
  {
    id: 3,
    title: "Golden Hour",
    artist: "Luna",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    duration: "2:58",
  },
  {
    id: 4,
    title: "Echoes",
    artist: "Waveform",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    duration: "3:28",
  },
];

export default function TrendingSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Trending now</h2>
          <p className="text-zinc-400 text-sm">Handpicked tracks youll love</p>
        </div>
        <button className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold">
          View all
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {mockSongs.map((song) => (
          <article
            key={song.id}
            className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition"
          >
            <img src={song.cover} alt="" className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="text-white font-semibold truncate">{song.title}</h3>
              <p className="text-zinc-400 text-sm truncate">{song.artist}</p>
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400 text-zinc-900 font-medium">
                <PlayCircle className="w-4 h-4" /> Play
              </button>
              <button className="inline-flex items-center p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
