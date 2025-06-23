
export interface IPO {
  id: string;
  company_name: string;
  company_logo?: string;
  price_band: {
    min: number;
    max: number;
  };
  open_date: string;
  close_date: string;
  issue_size: number;
  issue_type: 'Main Board' | 'SME' | 'Debt';
  listing_date?: string;
  status: 'upcoming' | 'ongoing' | 'listed';
  ipo_price?: number;
  listing_price?: number;
  current_market_price?: number;
  listing_gain?: number;
  current_return?: number;
  rhp_pdf?: string;
  drhp_pdf?: string;
  sector: string;
}
