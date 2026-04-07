import { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, PiggyBank, Plus } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import TransactionItem from './components/TransactionItem';
import AddExpenseModal from './components/AddExpenseModal';
import CategoryBreakdown from './components/CategoryBreakdown';
import RecentActivity from './components/RecentActivity';

const transactions = [
  { id: 1, title: 'Starbucks Coffee', amount: 5.50, category: 'Food', date: 'Today, 09:41 AM', type: 'expense' },
  { id: 2, title: 'Freelance Payment', amount: 1250.00, category: 'Income', date: 'Yesterday, 02:30 PM', type: 'income' },
  { id: 3, title: 'Uber Ride', amount: 24.00, category: 'Travel', date: 'Yesterday, 08:15 AM', type: 'expense' },
  { id: 4, title: 'Apple Music', amount: 10.99, category: 'Bills', date: 'Oct 24, 10:00 AM', type: 'expense' },
  { id: 5, title: 'Nike Store', amount: 120.00, category: 'Shopping', date: 'Oct 23, 04:45 PM', type: 'expense' },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      <Sidebar />
      
      <main className="md:ml-64 min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
              <p className="text-sm text-gray-500 mt-1">Track your spending and manage your budget.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm shadow-indigo-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <Plus size={20} />
              Add Expense
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Balance" 
              amount="$12,450.00" 
              trend="2.5%" 
              isPositive={true} 
              icon={<Wallet size={24} />} 
              colorClass="bg-indigo-50 text-indigo-600"
            />
            <StatCard 
              title="Total Income" 
              amount="$4,250.00" 
              trend="12.5%" 
              isPositive={true} 
              icon={<TrendingUp size={24} />} 
              colorClass="bg-emerald-50 text-emerald-600"
            />
            <StatCard 
              title="Total Expenses" 
              amount="$1,850.00" 
              trend="4.2%" 
              isPositive={false} 
              icon={<TrendingDown size={24} />} 
              colorClass="bg-red-50 text-red-600"
            />
            <StatCard 
              title="Monthly Savings" 
              amount="$2,400.00" 
              trend="8.1%" 
              isPositive={true} 
              icon={<PiggyBank size={24} />} 
              colorClass="bg-purple-50 text-purple-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Transactions */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</button>
                </div>
                <div className="space-y-1">
                  {transactions.map((tx) => (
                    <TransactionItem 
                      key={tx.id}
                      title={tx.title}
                      amount={tx.amount}
                      category={tx.category}
                      date={tx.date}
                      type={tx.type}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-8">
              <CategoryBreakdown />
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>

      <AddExpenseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
