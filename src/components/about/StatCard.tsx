export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 border border-brand-line bg-white p-6">
      <span className="text-3xl font-semibold text-brand-navy-900">{value}</span>
      <span className="text-sm text-brand-steel-600">{label}</span>
    </div>
  );
}
