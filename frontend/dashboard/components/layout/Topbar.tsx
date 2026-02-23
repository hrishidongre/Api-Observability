export default function Topbar() {
  return (
    <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950">
      <div className="text-sm text-zinc-400">
        Service: <span className="text-white">All</span>
      </div>

      <div className="text-sm text-zinc-400">
        Time Range: <span className="text-white">Last 20 min</span>
      </div>
    </div>
  );
}
