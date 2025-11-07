import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingSection from "./components/TrendingSection";
import StickyPlayer from "./components/StickyPlayer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <TrendingSection />
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-zinc-400">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-white font-semibold mb-3">Company</p>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Communities</p>
            <ul className="space-y-2">
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertisers</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Useful links</p>
            <ul className="space-y-2">
              <li>Support</li>
              <li>Web Player</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Legal</p>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs">Demo UI inspired by modern music streaming apps. Not affiliated with Spotify or TIDAL.</p>
      </footer>
      <StickyPlayer />
    </div>
  );
}

export default App;
