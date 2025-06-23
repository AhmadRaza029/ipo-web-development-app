
import { IPO } from '@/types/ipo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, TrendingUp, TrendingDown, Calendar, Building2 } from 'lucide-react';

interface IPOCardProps {
  ipo: IPO;
}

const IPOCard = ({ ipo }: IPOCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'ongoing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'listed': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getReturnColor = (value: number) => {
    return value >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  };

  const handleDocumentDownload = (docType: string, filename?: string) => {
    if (filename) {
      console.log(`Downloading ${docType}: ${filename}`);
      // In a real app, this would trigger an actual download
      alert(`Download started for ${docType}`);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{ipo.company_name}</CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">{ipo.sector}</p>
            </div>
          </div>
          <Badge className={getStatusColor(ipo.status)}>
            {ipo.status.charAt(0).toUpperCase() + ipo.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Price Band</p>
            <p className="font-semibold">₹{ipo.price_band.min} - ₹{ipo.price_band.max}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Issue Size</p>
            <p className="font-semibold">₹{ipo.issue_size} Cr</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>
            {ipo.status === 'upcoming' 
              ? `Opens: ${new Date(ipo.open_date).toLocaleDateString()}`
              : `${new Date(ipo.open_date).toLocaleDateString()} - ${new Date(ipo.close_date).toLocaleDateString()}`
            }
          </span>
        </div>

        {ipo.status === 'listed' && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Listing Gain</span>
              <div className="flex items-center space-x-1">
                {ipo.listing_gain && ipo.listing_gain >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                )}
                <span className={`font-semibold ${getReturnColor(ipo.listing_gain || 0)}`}>
                  {ipo.listing_gain?.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Current Return</span>
              <div className="flex items-center space-x-1">
                {ipo.current_return && ipo.current_return >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                )}
                <span className={`font-semibold ${getReturnColor(ipo.current_return || 0)}`}>
                  {ipo.current_return?.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Current Price: <span className="font-semibold text-gray-900 dark:text-white">₹{ipo.current_market_price}</span>
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          {ipo.rhp_pdf && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDocumentDownload('RHP', ipo.rhp_pdf)}
              className="flex-1"
            >
              <Download className="h-4 w-4 mr-1" />
              RHP
            </Button>
          )}
          {ipo.drhp_pdf && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDocumentDownload('DRHP', ipo.drhp_pdf)}
              className="flex-1"
            >
              <Download className="h-4 w-4 mr-1" />
              DRHP
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IPOCard;
