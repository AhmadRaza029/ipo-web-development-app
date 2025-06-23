
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, MessageCircle, Book, Phone, Mail, HelpCircle } from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      question: "How do I apply for an IPO?",
      answer: "To apply for an IPO, go to the IPO Subscription page, select the IPO you want to apply for, enter the number of shares and bid price, then submit your application. Make sure you have sufficient funds in your linked bank account."
    },
    {
      question: "What is the minimum amount required to apply for an IPO?",
      answer: "The minimum amount depends on the lot size and price band of the specific IPO. Typically, it ranges from ₹10,000 to ₹15,000 for retail investors."
    },
    {
      question: "How can I check my IPO allotment status?",
      answer: "You can check your allotment status in the IPO Allotment section. Enter your application number or PAN details to view the status of your applications."
    },
    {
      question: "What documents are required for IPO application?",
      answer: "You need a valid PAN card, bank account details, demat account, and sufficient funds. All accounts should be linked and verified in your profile."
    },
    {
      question: "When will I receive refund for unallotted shares?",
      answer: "Refunds for unallotted or partially allotted shares are typically processed within 3-5 working days after the allotment finalization."
    }
  ];

  const contactOptions = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+91 1800-123-4567",
      availability: "Mon-Fri: 9 AM - 6 PM"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us your queries via email",
      contact: "support@bluestockfintech.com",
      availability: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      availability: "Mon-Fri: 9 AM - 6 PM"
    }
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600 mt-2">Find answers to your questions or get in touch with our support team</p>
      </div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="guides" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            Guides
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Contact
          </TabsTrigger>
          <TabsTrigger value="feedback" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Feedback
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <div className="space-y-6">
            <div>
              <Label htmlFor="search">Search FAQs</Label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="search"
                  placeholder="Search for help topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="guides">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>Learn the basics of IPO investing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Step 1: Complete Your Profile</h4>
                    <p className="text-sm text-gray-600">Set up your account with all required documents</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Step 2: Link Your Accounts</h4>
                    <p className="text-sm text-gray-600">Connect your bank and demat accounts</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Step 3: Browse Available IPOs</h4>
                    <p className="text-sm text-gray-600">Check the dashboard for upcoming IPOs</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Step 4: Apply for IPOs</h4>
                    <p className="text-sm text-gray-600">Submit your applications with the right bid price</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>IPO Application Process</CardTitle>
                <CardDescription>Detailed guide on how to apply for IPOs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Learn about bid categories, price bands, lot sizes, and application procedures.
                  Understand the difference between retail, HNI, and institutional categories.
                </p>
                <Button variant="outline" className="mt-4">
                  Read Full Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactOptions.map((option, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {option.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{option.title}</CardTitle>
                        <CardDescription>{option.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">{option.contact}</p>
                      <p className="text-sm text-gray-600">{option.availability}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Send us a message and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Describe your issue in detail" rows={4} />
                </div>
                <Button>Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Feedback</CardTitle>
              <CardDescription>Help us improve our services with your valuable feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="feedbackType">Feedback Type</Label>
                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">Select feedback type</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="improvement">Improvement Suggestion</option>
                  <option value="general">General Feedback</option>
                </select>
              </div>
              <div>
                <Label htmlFor="rating">Overall Rating</Label>
                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">Select rating</option>
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Good</option>
                  <option value="3">⭐⭐⭐ Average</option>
                  <option value="2">⭐⭐ Poor</option>
                  <option value="1">⭐ Very Poor</option>
                </select>
              </div>
              <div>
                <Label htmlFor="feedbackMessage">Your Feedback</Label>
                <Textarea 
                  id="feedbackMessage" 
                  placeholder="Share your thoughts, suggestions, or report issues"
                  rows={4}
                />
              </div>
              <Button>Submit Feedback</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Help;
