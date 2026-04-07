import { ArrowDownRight, ArrowUpRight, Coffee, ShoppingBag, Zap, Plane } from 'lucide-react';

const categoryIcons = {
  Food: Coffee,
  Shopping: ShoppingBag,
  Bills: Zap,
  Travel: Plane,
};

const categoryColors = {
  Food: 'bg-orange-50 text-orange-600',
  Shopping: 'bg-purple-50 text-purple-600',
  Bills: 'bg-blue-50 text-blue-600',
  Travel: 'bg-teal-50 text-teal-600',
  Income: 'bg-emerald-50 text-emerald-600',
};

export default function TransactionItem({ title, amount, category, date, type }) {
  const Icon = categoryIcons[category] || ArrowDownRight;
  const colorClass = categoryColors[category] || 'bg-gray-50 text-gray-600';

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${type === 'income' ? 'bg-emerald-50 text-emerald-600' : colorClass}`}>
          {type === 'income' ? <ArrowUpRight size={20} /> : <Icon size={20} />}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{category} • {date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-bold ${type === 'income' ? 'text-emerald-600' : 'text-gray-900'}`}>
          {type === 'income' ? '+' : '-'}${Math.abs(amount).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
