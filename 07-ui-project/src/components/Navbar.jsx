import { Bell, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-gray-500 hover:text-gray-900">
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Tarun! 👋</h1>
            <p className="text-sm text-gray-500">Here's what's happening with your finances today.</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all w-64"
            />
          </div>
          
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 cursor-pointer">
            <img 
              src="https://picsum.photos/seed/alex/100/100" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Tarun</p>
              <p className="text-xs text-gray-500">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
