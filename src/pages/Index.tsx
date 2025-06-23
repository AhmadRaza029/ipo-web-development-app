
import { useState, useMemo } from 'react';
import { sampleIPOs } from '@/data/sampleData';
import Header from '@/components/Header';
import StatsOverview from '@/components/StatsOverview';
import FilterTabs from '@/components/FilterTabs';
import IPOCard from '@/components/IPOCard';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredIPOs = useMemo(() => {
    let filtered = sampleIPOs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(ipo =>
        ipo.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ipo.sector.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (activeFilter !== 'all') {
      filtered = filtered.filter(ipo => ipo.status === activeFilter);
    }

    return filtered;
  }, [searchTerm, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            IPO Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Track Initial Public Offerings and their market performance
          </p>
        </div>

        <StatsOverview ipos={sampleIPOs} />
        
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {filteredIPOs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No IPOs found matching your criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIPOs.map((ipo) => (
              <IPOCard key={ipo.id} ipo={ipo} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
