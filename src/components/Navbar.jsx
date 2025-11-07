import { Home, Search, Library, ListMusic, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const NavItem = ({ label, Icon }) => (
    <button
      onClick={() => setActive(label)}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 ${
        active === label ? "text-white bg-white/10" : "text-zinc-300"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:block text-sm font-medium">{label}</span>
    </button>
  );

  return (
    <header className="sticky top-0 z-20 w-full bg-zinc-950/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400" />
          <span className="text-white font-semibold tracking-tight">VibeStream</span>
        </div>
        <nav className="flex items-center gap-2">
          <NavItem label="Home" Icon={Home} />
          <NavItem label="Search" Icon={Search} />
          <NavItem label="Library" Icon={Library} />
          <NavItem label="Playlist" Icon={ListMusic} />
        </nav>
        <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition">
          <User className="w-4 h-4" />
          <span className="hidden sm:block text-sm">Profile</span>
        </button>
      </div>
    </header>
  );
}
