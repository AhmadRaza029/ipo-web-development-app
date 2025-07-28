
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, DollarSign, TrendingUp } from 'lucide-react';

type IPOStatus = 'Open' | 'Upcoming' | 'Closed';

interface IPO {
  id: string;
  companyName: string;
  priceRange: string;
  lotSize: number;
  openDate: string;
  closeDate: string;
  status: IPOStatus;
  subscriptionRate: string;
}

const getStatusColor = (status: IPOStatus) => {
  switch (status) {
    case 'Open':
      return 'bg-green-100 text-green-800';
    case 'Upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'Closed':
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const IPOSubscription = () => {
  const [selectedIPO, setSelectedIPO] = useState<string | null>(null);

  const availableIPOs: IPO[] = [
    {
      id: '1',
      companyName: 'TechCorp Solutions',
      priceRange: '₹120 - ₹150',
      lotSize: 100,
      openDate: '2024-01-15',
      closeDate: '2024-01-17',
      status: 'Open',
      subscriptionRate: '2.5x',
    },
    {
      id: '2',
      companyName: 'Green Energy Ltd',
      priceRange: '₹80 - ₹100',
      lotSize: 150,
      openDate: '2024-01-20',
      closeDate: '2024-01-22',
      status: 'Upcoming',
      subscriptionRate: 'N/A',
    },
    {
      id: '3',
      companyName: 'Digital Innovations',
      priceRange: '₹200 - ₹250',
      lotSize: 75,
      openDate: '2024-01-10',
      closeDate: '2024-01-12',
      status: 'Closed',
      subscriptionRate: '4.2x',
    },
  ];

  const handleApply = (ipo: IPO) => {
    if (ipo.status !== 'Open') return;
    alert(`Applying for ${ipo.companyName}`);
    // Place API call or logic here
  };

  const handleViewDetails = (ipo: IPO) => {
    setSelectedIPO(ipo.id === selectedIPO ? null : ipo.id);
  };

  const selectedIPOData = availableIPOs.find((ipo) => ipo.id === selectedIPO);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">IPO Subscription</h1>
        <p className="text-gray-600 mt-2">Subscribe to available IPOs and track your applications</p>
      </div>

      <div className="grid gap-6">
        {availableIPOs.map((ipo) => (
          <Card key={ipo.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{ipo.companyName}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {ipo.priceRange}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Lot Size: {ipo.lotSize}
                    </span>
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(ipo.status)}>{ipo.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Open Date</p>
                    <p className="text-sm text-gray-600">{ipo.openDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Close Date</p>
                    <p className="text-sm text-gray-600">{ipo.closeDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Subscription Rate</p>
                    <p className="text-sm text-gray-600">{ipo.subscriptionRate}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  variant={ipo.status === 'Open' ? 'default' : 'outline'}
                  disabled={ipo.status !== 'Open'}
                  className="flex-1"
                  onClick={() => handleApply(ipo)}
                  aria-disabled={ipo.status !== 'Open'}
                >
                  {ipo.status === 'Open' ? 'Apply Now' : ipo.status === 'Upcoming' ? 'Coming Soon' : 'Closed'}
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => handleViewDetails(ipo)}>
                  {selectedIPO === ipo.id ? 'Hide Details' : 'View Details'}
                </Button>
              </div>

              {selectedIPO === ipo.id && (
                <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                  <h3 className="text-lg font-semibold mb-2">More Details about {ipo.companyName}</h3>
                  {/* Example extra details, you can expand as needed */}
                  <p><strong>Lot Size:</strong> {ipo.lotSize}</p>
                  <p><strong>Subscription Rate:</strong> {ipo.subscriptionRate}</p>
                  <p><strong>Subscription Period:</strong> {ipo.openDate} to {ipo.closeDate}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IPOSubscription;

