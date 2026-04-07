export default function StatCard({ title, amount, trend, isPositive, icon, colorClass }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorClass} transition-transform group-hover:scale-110`}>
          {icon}
        </div>
        <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
          {isPositive ? '+' : ''}{trend}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{amount}</h3>
      </div>
    </div>
  );
}
