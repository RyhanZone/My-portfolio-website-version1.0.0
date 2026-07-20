
export default function SkillCard({ icon, name, percent }) {
   return (
    <div className="p-4 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl">

      {/* TOP */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <i className={`${icon} text-[var(--primary)] text-lg`}></i>
          <span className="text-white text-sm font-medium">{name}</span>
        </div>

        <span className="text-[var(--primary)] text-sm">{percent}%</span>
      </div>

      {/* BAR */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--primary)] rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
