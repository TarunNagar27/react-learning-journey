import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const activities = [
  { id: 1, title: 'Subscription renewed', desc: 'Netflix monthly plan', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-500' },
  { id: 2, title: 'Large transaction alert', desc: 'Apple Store purchase', time: '5 hours ago', icon: AlertCircle, color: 'text-amber-500' },
  { id: 3, title: 'Payment scheduled', desc: 'Electricity bill', time: '1 day ago', icon: Clock, color: 'text-blue-500' },
  { id: 4, title: 'Budget limit warning', desc: 'Shopping category at 90%', time: '2 days ago', icon: AlertCircle, color: 'text-red-500' },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
        
        <div className="space-y-6 relative">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4 group cursor-pointer">
              <div className="relative z-10 bg-white pt-1">
                <activity.icon size={20} className={`${activity.color} transition-transform group-hover:scale-110`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{activity.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.desc}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
