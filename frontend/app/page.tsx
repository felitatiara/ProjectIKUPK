import TargetNotification from "@/components/targetnotification";
import TargetTable from "@/components/targettable";

export default function HomePage() {
  const targets = [
    {
      tenggat: "02 Januari 2025",
      jenis: "Perjanjian Kerja",
      sasaran: "Pemberitaan kegiatan melalui web Fakultas",
      capaian: 100,
      aksi: "Input",
    },
    {
      tenggat: "31 Maret 2025",
      jenis: "Indikator Kinerja Utama",
      sasaran: "Meningkatnya kualitas lulusan pendidikan tinggi",
      capaian: 0,
      aksi: "Proses",
    },
  ];

  return (
    <>
      <TargetNotification show={true} />

      <h2 className="text-lg font-semibold mb-4 th">
        Target IKU dan PK
      </h2>

      <TargetTable data={targets} />
    </>
  );
}
