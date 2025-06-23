
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, X } from 'lucide-react';

const ManageIPO = () => {
  const [companyLogo, setCompanyLogo] = useState<string | null>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setCompanyLogo(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO Information</h1>
          <p className="text-gray-600">Manage your IPO Details</p>
        </div>
        <div className="space-x-3">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">IPO Information</span>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">IPO Info</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>IPO Information</CardTitle>
              <p className="text-sm text-gray-600">Enter IPO Details</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Company Logo */}
              <div>
                <Label className="text-sm font-medium">Company Logo</Label>
                <div className="mt-2">
                  {companyLogo ? (
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={companyLogo}
                          alt="Company Logo"
                          className="w-16 h-16 rounded-lg object-cover border"
                        />
                        <button
                          onClick={removeLogo}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <div>
                        <p className="text-sm font-medium">NSE India</p>
                        <p className="text-xs text-gray-500">Test Logo</p>
                        <p className="text-xs text-gray-500">jpeg</p>
                        <div className="flex space-x-2 mt-1">
                          <Button size="sm" variant="outline">Upload Logo</Button>
                          <Button size="sm" variant="outline" onClick={removeLogo}>Delete</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">Upload company logo</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" placeholder="Vodafone Idea" />
                </div>
                <div>
                  <Label htmlFor="priceBand">Price Band</Label>
                  <Input id="priceBand" placeholder="Not Issued" />
                </div>
                <div>
                  <Label htmlFor="open">Open</Label>
                  <Input id="open" placeholder="Not Issued" />
                </div>
                <div>
                  <Label htmlFor="close">Close</Label>
                  <Input id="close" placeholder="Not Issued" />
                </div>
                <div>
                  <Label htmlFor="issueSize">Issue Size</Label>
                  <Input id="issueSize" placeholder="2300 Cr." />
                </div>
                <div>
                  <Label htmlFor="issueType">Issue Type</Label>
                  <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background text-sm">
                    <option value="">Select Issue Type</option>
                    <option value="Main Board">Main Board</option>
                    <option value="SME">SME</option>
                    <option value="Debt">Debt</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="listingDate">LISTING DATE</Label>
                  <Input id="listingDate" placeholder="Not Issued" />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background text-sm">
                    <option value="">Select Status</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="listed">Listed</option>
                  </select>
                </div>
              </div>

              {/* New Listed IPO Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ipoPrice">IPO PRICE</Label>
                    <Input id="ipoPrice" placeholder="₹ 383" />
                  </div>
                  <div>
                    <Label htmlFor="listingPrice">LISTING PRICE</Label>
                    <Input id="listingPrice" placeholder="₹ 435" />
                  </div>
                  <div>
                    <Label htmlFor="listingGain">LISTING GAIN</Label>
                    <Input id="listingGain" placeholder="13.58 %" />
                  </div>
                  <div>
                    <Label htmlFor="listingDateNew">LISTING DATE</Label>
                    <Input id="listingDateNew" placeholder="2024-05-30" />
                  </div>
                  <div>
                    <Label htmlFor="cmp">CMP</Label>
                    <Input id="cmp" placeholder="₹410" />
                  </div>
                  <div>
                    <Label htmlFor="currentReturn">CURRENT RETURN</Label>
                    <Input id="currentReturn" placeholder="7.05 %" />
                  </div>
                  <div>
                    <Label htmlFor="rhp">RHP</Label>
                    <Input id="rhp" placeholder="Enter RHP PDF Link" />
                  </div>
                  <div>
                    <Label htmlFor="drhp">DRHP</Label>
                    <Input id="drhp" placeholder="Enter DRHP PDF Link" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageIPO;
