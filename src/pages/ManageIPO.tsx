
import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, X } from 'lucide-react';

interface IPOFormData {
  companyLogo: string | null;
  companyName: string;
  priceBand: string;
  openDate: string;
  closeDate: string;
  issueSize: string;
  issueType: string;
  listingDate: string;
  status: string;
  ipoPrice: string;
  listingPrice: string;
  listingGain: string;
  listingDateNew: string;
  cmp: string;
  currentReturn: string;
  rhp: string;
  drhp: string;
}

const initialFormData: IPOFormData = {
  companyLogo: null,
  companyName: '',
  priceBand: '',
  openDate: '',
  closeDate: '',
  issueSize: '',
  issueType: '',
  listingDate: '',
  status: '',
  ipoPrice: '',
  listingPrice: '',
  listingGain: '',
  listingDateNew: '',
  cmp: '',
  currentReturn: '',
  rhp: '',
  drhp: '',
};

const ManageIPO = () => {
  const [formData, setFormData] = useState<IPOFormData>(initialFormData);

  // Handle text / select inputs change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle logo upload
  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({ ...prev, companyLogo: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove logo
  const removeLogo = () => {
    setFormData((prev) => ({ ...prev, companyLogo: null }));
  };

  // Submit handler (you can extend to call API etc.)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Example basic validation
    if (!formData.companyName) {
      alert('Company Name is required');
      return;
    }

    // Log form data or call your submission logic/API here
    console.log('IPO Form Submitted:', formData);
    alert('IPO Registered Successfully!');
  };

  // Cancel handler - reset form
  const handleCancel = () => {
    setFormData(initialFormData);
  };

  // Status badge color helper (optional)
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800';
      case 'listed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO Information</h1>
          <p className="text-gray-600">Manage your IPO Details</p>
        </div>
        <div className="space-x-3">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Register
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-sm font-medium text-blue-700">IPO Information</span>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
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
                  {formData.companyLogo ? (
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={formData.companyLogo}
                          alt="Company Logo"
                          className="w-16 h-16 rounded-lg object-cover border"
                        />
                        <button
                          type="button"
                          onClick={removeLogo}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                          aria-label="Remove company logo"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <div>
                        <p className="text-sm font-medium">NSE India</p>
                        <p className="text-xs text-gray-500">Test Logo</p>
                        <p className="text-xs text-gray-500">jpeg</p>
                        <div className="flex space-x-2 mt-1">
                          <Button size="sm" variant="outline" onClick={() => document.getElementById('logoUpload')?.click()}>
                            Upload Logo
                          </Button>
                          <Button size="sm" variant="outline" onClick={removeLogo}>
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">Upload company logo</p>
                      <input
                        id="logoUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Vodafone Idea"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="priceBand">Price Band</Label>
                  <Input
                    id="priceBand"
                    placeholder="Not Issued"
                    value={formData.priceBand}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="openDate">Open</Label>
                  <Input
                    id="openDate"
                    type="date"
                    value={formData.openDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="closeDate">Close</Label>
                  <Input
                    id="closeDate"
                    type="date"
                    value={formData.closeDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="issueSize">Issue Size</Label>
                  <Input
                    id="issueSize"
                    placeholder="2300 Cr."
                    value={formData.issueSize}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="issueType">Issue Type</Label>
                  <select
                    id="issueType"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background text-sm"
                    value={formData.issueType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Issue Type</option>
                    <option value="Main Board">Main Board</option>
                    <option value="SME">SME</option>
                    <option value="Debt">Debt</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="listingDate">Listing Date</Label>
                  <Input
                    id="listingDate"
                    type="date"
                    value={formData.listingDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background text-sm"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Status</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="listed">Listed</option>
                  </select>
                </div>
              </div>

              {/* New Listed IPO Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ipoPrice">IPO PRICE</Label>
                    <Input
                      id="ipoPrice"
                      placeholder="₹ 383"
                      value={formData.ipoPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="listingPrice">LISTING PRICE</Label>
                    <Input
                      id="listingPrice"
                      placeholder="₹ 435"
                      value={formData.listingPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="listingGain">LISTING GAIN</Label>
                    <Input
                      id="listingGain"
                      placeholder="13.58 %"
                      value={formData.listingGain}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="listingDateNew">LISTING DATE</Label>
                    <Input
                      id="listingDateNew"
                      type="date"
                      placeholder="2024-05-30"
                      value={formData.listingDateNew}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cmp">CMP</Label>
                    <Input
                      id="cmp"
                      placeholder="₹410"
                      value={formData.cmp}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentReturn">CURRENT RETURN</Label>
                    <Input
                      id="currentReturn"
                      placeholder="7.05 %"
                      value={formData.currentReturn}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rhp">RHP</Label>
                    <Input
                      id="rhp"
                      placeholder="Enter RHP PDF Link"
                      value={formData.rhp}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="drhp">DRHP</Label>
                    <Input
                      id="drhp"
                      placeholder="Enter DRHP PDF Link"
                      value={formData.drhp}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};

export default ManageIPO;




// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Upload, X } from 'lucide-react';

// const ManageIPO = () => {
//   const [companyLogo, setCompanyLogo] = useState<string | null>(null);

//   const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setCompanyLogo(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeLogo = () => {
//     setCompanyLogo(null);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO Information</h1>
//           <p className="text-gray-600">Manage your IPO Details</p>
//         </div>
//         <div className="space-x-3">
//           <Button variant="outline">Cancel</Button>
//           <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Sidebar */}
//         <div className="lg:col-span-1">
//           <Card>
//             <CardContent className="p-4">
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span className="text-sm font-medium text-blue-700">IPO Information</span>
//                 </div>
//                 <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
//                   <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//                   <span className="text-sm text-gray-600">IPO Info</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Main Content */}
//         <div className="lg:col-span-3">
//           <Card>
//             <CardHeader>
//               <CardTitle>IPO Information</CardTitle>
//               <p className="text-sm text-gray-600">Enter IPO Details</p>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               {/* Company Logo */}
//               <div>
//                 <Label className="text-sm font-medium">Company Logo</Label>
//                 <div className="mt-2">
//                   {companyLogo ? (
//                     <div className="flex items-center space-x-4">
//                       <div className="relative">
//                         <img
//                           src={companyLogo}
//                           alt="Company Logo"
//                           className="w-16 h-16 rounded-lg object-cover border"
//                         />
//                         <button
//                           onClick={removeLogo}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="h-3 w-3" />
//                         </button>
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium">NSE India</p>
//                         <p className="text-xs text-gray-500">Test Logo</p>
//                         <p className="text-xs text-gray-500">jpeg</p>
//                         <div className="flex space-x-2 mt-1">
//                           <Button size="sm" variant="outline">Upload Logo</Button>
//                           <Button size="sm" variant="outline" onClick={removeLogo}>Delete</Button>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                       <Upload className="mx-auto h-8 w-8 text-gray-400" />
//                       <p className="mt-2 text-sm text-gray-600">Upload company logo</p>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleLogoUpload}
//                         className="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Form Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="companyName">Company Name</Label>
//                   <Input id="companyName" placeholder="Vodafone Idea" />
//                 </div>
//                 <div>
//                   <Label htmlFor="priceBand">Price Band</Label>
//                   <Input id="priceBand" placeholder="Not Issued" />
//                 </div>
//                 <div>
//                   <Label htmlFor="open">Open</Label>
//                   <Input id="open" placeholder="Not Issued" />
//                 </div>
//                 <div>
//                   <Label htmlFor="close">Close</Label>
//                   <Input id="close" placeholder="Not Issued" />
//                 </div>
//                 <div>
//                   <Label htmlFor="issueSize">Issue Size</Label>
//                   <Input id="issueSize" placeholder="2300 Cr." />
//                 </div>
//                 <div>
//                   <Label htmlFor="issueType">Issue Type</Label>
//                   <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background text-sm">
//                     <option value="">Select Issue Type</option>
//                     <option value="Main Board">Main Board</option>
//                     <option value="SME">SME</option>
//                     <option value="Debt">Debt</option>
//                   </select>
//                 </div>
//                 <div>
//                   <Label htmlFor="listingDate">LISTING DATE</Label>
//                   <Input id="listingDate" placeholder="Not Issued" />
//                 </div>
//                 <div>
//                   <Label htmlFor="status">Status</Label>
//                   <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background text-sm">
//                     <option value="">Select Status</option>
//                     <option value="upcoming">Upcoming</option>
//                     <option value="ongoing">Ongoing</option>
//                     <option value="listed">Listed</option>
//                   </select>
//                 </div>
//               </div>

//               {/* New Listed IPO Details */}
//               <div className="border-t pt-6">
//                 <h3 className="text-lg font-semibold mb-4">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="ipoPrice">IPO PRICE</Label>
//                     <Input id="ipoPrice" placeholder="₹ 383" />
//                   </div>
//                   <div>
//                     <Label htmlFor="listingPrice">LISTING PRICE</Label>
//                     <Input id="listingPrice" placeholder="₹ 435" />
//                   </div>
//                   <div>
//                     <Label htmlFor="listingGain">LISTING GAIN</Label>
//                     <Input id="listingGain" placeholder="13.58 %" />
//                   </div>
//                   <div>
//                     <Label htmlFor="listingDateNew">LISTING DATE</Label>
//                     <Input id="listingDateNew" placeholder="2024-05-30" />
//                   </div>
//                   <div>
//                     <Label htmlFor="cmp">CMP</Label>
//                     <Input id="cmp" placeholder="₹410" />
//                   </div>
//                   <div>
//                     <Label htmlFor="currentReturn">CURRENT RETURN</Label>
//                     <Input id="currentReturn" placeholder="7.05 %" />
//                   </div>
//                   <div>
//                     <Label htmlFor="rhp">RHP</Label>
//                     <Input id="rhp" placeholder="Enter RHP PDF Link" />
//                   </div>
//                   <div>
//                     <Label htmlFor="drhp">DRHP</Label>
//                     <Input id="drhp" placeholder="Enter DRHP PDF Link" />
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageIPO;
