import { LayoutDashboard, Receipt, PieChart, Settings, LogOut, Wallet } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen fixed left-0 top-0 hidden md:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
          <Wallet size={24} />
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">FinTrack</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-2xl font-medium transition-all">
          <LayoutDashboard size={20} />
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-2xl font-medium transition-all">
          <Receipt size={20} />
          Transactions
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-2xl font-medium transition-all">
          <PieChart size={20} />
          Analytics
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-2xl font-medium transition-all">
          <Settings size={20} />
          Settings
        </a>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-2xl font-medium transition-all w-full">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
