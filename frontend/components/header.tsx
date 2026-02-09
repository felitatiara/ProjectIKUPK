export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-semibold">
        Indikator Kinerja Utama & Perjanjian Kerja <br />
        <span className="text-sm">UPN Veteran Jakarta</span>
      </div>

      <div className="flex items-center gap-4">
        🔔
        <img
          src="/avatar.png"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
