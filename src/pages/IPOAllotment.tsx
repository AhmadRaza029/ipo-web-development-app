
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Download, Eye } from 'lucide-react';

const IPOAllotment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allotmentData = [
    {
      id: '1',
      companyName: 'TechCorp Solutions',
      applicationNumber: 'APP001234567',
      appliedShares: 100,
      allottedShares: 50,
      allotmentStatus: 'Partially Allotted',
      refundAmount: '₹3,750',
      panNumber: 'ABCDE1234F',
      bidPrice: '₹150'
    },
    {
      id: '2',
      companyName: 'Digital Innovations',
      applicationNumber: 'APP001234568',
      appliedShares: 75,
      allottedShares: 75,
      allotmentStatus: 'Fully Allotted',
      refundAmount: '₹0',
      panNumber: 'ABCDE1234F',
      bidPrice: '₹250'
    },
    {
      id: '3',
      companyName: 'Green Energy Ltd',
      applicationNumber: 'APP001234569',
      appliedShares: 150,
      allottedShares: 0,
      allotmentStatus: 'Not Allotted',
      refundAmount: '₹12,000',
      panNumber: 'ABCDE1234F',
      bidPrice: '₹80'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fully Allotted': return 'bg-green-100 text-green-800';
      case 'Partially Allotted': return 'bg-yellow-100 text-yellow-800';
      case 'Not Allotted': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredData = allotmentData.filter(item =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">IPO Allotment</h1>
        <p className="text-gray-600 mt-2">Check your IPO allotment status and download allotment letters</p>
      </div>

      <div className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="search">Search by Company Name or Application Number</Label>
            <div className="relative mt-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="search"
                placeholder="Search allotments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-end">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredData.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.companyName}</CardTitle>
                  <CardDescription>
                    Application No: {item.applicationNumber}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(item.allotmentStatus)}>
                  {item.allotmentStatus}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Applied Shares</p>
                  <p className="text-lg font-semibold">{item.appliedShares}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Allotted Shares</p>
                  <p className="text-lg font-semibold">{item.allottedShares}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Bid Price</p>
                  <p className="text-lg font-semibold">{item.bidPrice}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Refund Amount</p>
                  <p className="text-lg font-semibold">{item.refundAmount}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Letter
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No allotment records found.</p>
        </div>
      )}
    </div>
  );
};

export default IPOAllotment;
