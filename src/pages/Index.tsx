
import { useState, useMemo } from 'react';
import { sampleIPOs } from '@/data/sampleData';
import { Button } from '@/components/ui/button';
import IPOTable from '@/components/IPOTable';
import Pagination from '@/components/Pagination';
import { IPO } from '@/types/ipo';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredIPOs = useMemo(() => {
    let filtered = sampleIPOs;

    // Filter by status
    if (activeFilter !== 'all') {
      filtered = filtered.filter(ipo => ipo.status === activeFilter);
    }

    return filtered;
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredIPOs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedIPOs = filteredIPOs.slice(startIndex, startIndex + itemsPerPage);

  const handleUpdate = (ipo: IPO) => {
    console.log('Update IPO:', ipo);
    // Navigate to edit form or open modal
  };

  const handleDelete = (id: string) => {
    console.log('Delete IPO:', id);
    // Implement delete functionality
  };

  const handleView = (ipo: IPO) => {
    console.log('View IPO:', ipo);
    // Navigate to detail view or open modal
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO | Dashboard</h1>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Register IPO
        </Button>
      </div>

      <IPOTable 
        ipos={paginatedIPOs}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onView={handleView}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Index;
