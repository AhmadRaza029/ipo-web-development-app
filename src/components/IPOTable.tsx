
import { IPO } from '@/types/ipo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';

interface IPOTableProps {
  ipos: IPO[];
  onUpdate?: (ipo: IPO) => void;
  onDelete?: (id: string) => void;
  onView?: (ipo: IPO) => void;
}

const IPOTable = ({ ipos, onUpdate, onDelete, onView }: IPOTableProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ongoing':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ongoing</Badge>;
      case 'upcoming':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Comming</Badge>;
      case 'listed':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">New Listed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold">Company</TableHead>
            <TableHead className="font-semibold">Price Band</TableHead>
            <TableHead className="font-semibold">Open</TableHead>
            <TableHead className="font-semibold">Close</TableHead>
            <TableHead className="font-semibold">ISSUE SIZE</TableHead>
            <TableHead className="font-semibold">ISSUE Type</TableHead>
            <TableHead className="font-semibold">Listing Date</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Action</TableHead>
            <TableHead className="font-semibold">Delete/View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ipos.map((ipo) => (
            <TableRow key={ipo.id} className="hover:bg-gray-50">
              <TableCell className="font-medium">{ipo.company_name}</TableCell>
              <TableCell>₹ {ipo.price_band.min} - {ipo.price_band.max}</TableCell>
              <TableCell>{formatDate(ipo.open_date)}</TableCell>
              <TableCell>{formatDate(ipo.close_date)}</TableCell>
              <TableCell>{ipo.issue_size} Cr.</TableCell>
              <TableCell>{ipo.issue_type}</TableCell>
              <TableCell>
                {ipo.listing_date ? formatDate(ipo.listing_date) : '-'}
              </TableCell>
              <TableCell>{getStatusBadge(ipo.status)}</TableCell>
              <TableCell>
                <Button 
                  size="sm" 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => onUpdate?.(ipo)}
                >
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onDelete?.(ipo.id)}
                    className="p-2"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onView?.(ipo)}
                    className="p-2"
                  >
                    <Eye className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IPOTable;
