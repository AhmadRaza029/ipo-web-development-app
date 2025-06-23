
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, CreditCard, Building, User } from 'lucide-react';

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    {
      id: '1',
      type: 'Trading',
      accountNumber: '1234567890',
      holderName: 'Vichal Sharma',
      bankName: 'HDFC Bank',
      ifscCode: 'HDFC0001234',
      status: 'Active',
      isPrimary: true
    },
    {
      id: '2',
      type: 'Demat',
      accountNumber: '9876543210',
      holderName: 'Vichal Sharma',
      bankName: 'ICICI Bank',
      ifscCode: 'ICIC0004321',
      status: 'Active',
      isPrimary: false
    },
    {
      id: '3',
      type: 'Savings',
      accountNumber: '5555666677',
      holderName: 'Vichal Sharma',
      bankName: 'SBI',
      ifscCode: 'SBIN0001111',
      status: 'Inactive',
      isPrimary: false
    }
  ]);

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'Trading': return <CreditCard className="h-5 w-5" />;
      case 'Demat': return <Building className="h-5 w-5" />;
      case 'Savings': return <User className="h-5 w-5" />;
      default: return <CreditCard className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Account Management</h1>
        <p className="text-gray-600 mt-2">Manage your trading and bank accounts</p>
      </div>

      <Tabs defaultValue="accounts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="accounts">My Accounts</TabsTrigger>
          <TabsTrigger value="add-account">Add Account</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Linked Accounts</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Account
              </Button>
            </div>

            <div className="grid gap-4">
              {accounts.map((account) => (
                <Card key={account.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        {getAccountIcon(account.type)}
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {account.type} Account
                            {account.isPrimary && (
                              <Badge variant="secondary">Primary</Badge>
                            )}
                          </CardTitle>
                          <CardDescription>
                            {account.accountNumber} • {account.bankName}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(account.status)}>
                        {account.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Account Holder</p>
                        <p className="text-sm">{account.holderName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Bank Name</p>
                        <p className="text-sm">{account.bankName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">IFSC Code</p>
                        <p className="text-sm">{account.ifscCode}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {!account.isPrimary && (
                        <Button variant="outline" size="sm">
                          Set as Primary
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="add-account">
          <Card>
            <CardHeader>
              <CardTitle>Add New Account</CardTitle>
              <CardDescription>Link a new bank or trading account to your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="accountType">Account Type</Label>
                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">Select account type</option>
                  <option value="trading">Trading Account</option>
                  <option value="demat">Demat Account</option>
                  <option value="savings">Savings Account</option>
                </select>
              </div>
              <div>
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" placeholder="Enter account number" />
              </div>
              <div>
                <Label htmlFor="holderName">Account Holder Name</Label>
                <Input id="holderName" placeholder="Enter account holder name" />
              </div>
              <div>
                <Label htmlFor="bankName">Bank Name</Label>
                <Input id="bankName" placeholder="Enter bank name" />
              </div>
              <div>
                <Label htmlFor="ifscCode">IFSC Code</Label>
                <Input id="ifscCode" placeholder="Enter IFSC code" />
              </div>
              <div className="flex gap-2">
                <Button>Add Account</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Account Verification</CardTitle>
              <CardDescription>Verify your accounts to enable IPO applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900">Verification Status</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    2 of 3 accounts verified. Complete verification to unlock all features.
                  </p>
                </div>
                <div className="space-y-3">
                  {accounts.map((account) => (
                    <div key={account.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getAccountIcon(account.type)}
                        <div>
                          <p className="font-medium">{account.type} Account</p>
                          <p className="text-sm text-gray-600">{account.accountNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={account.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {account.status === 'Active' ? 'Verified' : 'Pending'}
                        </Badge>
                        {account.status !== 'Active' && (
                          <Button size="sm" variant="outline">
                            Verify Now
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Accounts;
