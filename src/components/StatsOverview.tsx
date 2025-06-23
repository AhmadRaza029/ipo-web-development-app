
import { IPO } from '@/types/ipo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Calendar, Building2, DollarSign } from 'lucide-react';

interface StatsOverviewProps {
  ipos: IPO[];
}

const StatsOverview = ({ ipos }: StatsOverviewProps) => {
  const stats = {
    total: ipos.length,
    upcoming: ipos.filter(ipo => ipo.status === 'upcoming').length,
    ongoing: ipos.filter(ipo => ipo.status === 'ongoing').length,
    listed: ipos.filter(ipo => ipo.status === 'listed').length,
    avgReturn: ipos
      .filter(ipo => ipo.current_return !== undefined)
      .reduce((sum, ipo) => sum + (ipo.current_return || 0), 0) / 
      ipos.filter(ipo => ipo.current_return !== undefined).length || 0
  };

  const statCards = [
    {
      title: 'Total IPOs',
      value: stats.total,
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      title: 'Upcoming',
      value: stats.upcoming,
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      title: 'Listed',
      value: stats.listed,
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Avg Return',
      value: `${stats.avgReturn.toFixed(1)}%`,
      icon: DollarSign,
      color: stats.avgReturn >= 0 ? 'text-green-600' : 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
