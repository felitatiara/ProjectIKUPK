"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 font-bold text-orange-600">
        IKU & PK
      </div>

      <nav className="space-y-5 px-5">
        <Link href="/" className="block text-orange-600 font-semibold">
          Beranda
        </Link>

        <Link href="/monitoring" className="block text-gray-600 hover:text-orange-600">
          Monitoring Unit Kerja
        </Link>

        <Link href="/iku-pk" className="block text-gray-600 hover:text-orange-600">
          Indikator Kinerja Utama & PK
        </Link>

        <Link href="/target" className="block text-gray-600 hover:text-orange-600">
          Target IKU & PK
        </Link>
      </nav>
    </aside>
  );
}
