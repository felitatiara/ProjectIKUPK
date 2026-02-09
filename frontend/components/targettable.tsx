interface Target {
  tenggat: string;
  jenis: string;
  sasaran: string;
  capaian: number;
  aksi: string;
}

export default function TargetTable({ data }: { data: Target[] }) {
  return (
    <div className="bg-white rounded-lg shadow ">
      <table className="w-full text-sm">
        <thead className="border-b ">
          <tr className="text-left th">
            <th className="p-4">Tenggat</th>
            <th>Target</th>
            <th>Sasaran Strategis</th>
            <th>Capaian</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b">
              <td className="p-4 text-blue-600">{item.tenggat}</td>
              <td>{item.jenis}</td>
              <td>{item.sasaran}</td>
              <td className="font-semibold">{item.capaian}%</td>
              <td>
                <button className="border border-green-500 text-green-600 px-3 py-1 rounded">
                  {item.aksi}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
