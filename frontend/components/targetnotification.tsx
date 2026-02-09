interface Props {
  show: boolean;
}

export default function TargetNotification({ show }: Props) {
  if (!show) return null;

  return (
    <div className="bg-green-100 border border-green-300 p-4 rounded-lg flex justify-between items-center mb-6">
      <div>
        <h3 className="font-semibold text-green-700">Target Baru!</h3>
        <p className="text-sm text-green-700">
          Segera periksa target IKU dan PK dan lakukan penyesuaian sebelum tenggat.
        </p>
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Telusuri
      </button>
    </div>
  );
}
