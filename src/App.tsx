
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import ManageIPO from "./pages/ManageIPO";
import IPOSubscription from "./pages/IPOSubscription";
import IPOAllotment from "./pages/IPOAllotment";
import Settings from "./pages/Settings";
import APIManager from "./pages/APIManager";
import Accounts from "./pages/Accounts";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-12 flex items-center border-b bg-white px-4">
                <SidebarTrigger className="mr-4" />
                <div className="flex-1 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm w-64"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Hi, Vichal</span>
                    <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
              </header>
              <main className="flex-1 bg-gray-50">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/manage-ipo" element={<ManageIPO />} />
                  <Route path="/ipo-subscription" element={<IPOSubscription />} />
                  <Route path="/ipo-allotment" element={<IPOAllotment />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/api-manager" element={<APIManager />} />
                  <Route path="/accounts" element={<Accounts />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
