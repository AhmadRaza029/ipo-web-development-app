
# IPO Management Dashboard

A comprehensive web application for managing Initial Public Offerings (IPOs) with real-time tracking, subscription management, and allotment status monitoring.

![IPO Dashboard](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![Supabase](https://img.shields.io/badge/Supabase-Backend-green)

## 🚀 Features

### 📊 Dashboard Overview
- **Real-time IPO tracking** with comprehensive metrics
- **Interactive data tables** with sorting and filtering capabilities
- **Responsive design** optimized for desktop and mobile devices
- **Performance indicators** and subscription rate monitoring

### 🏢 IPO Management
- **Complete IPO lifecycle management** from registration to listing
- **Document upload support** for company logos and legal documents
- **Price band configuration** and issue size tracking
- **Status management** (Upcoming, Ongoing, Listed)
- **Comprehensive form validation** with real-time feedback

### 📋 IPO Subscription
- **Live subscription tracking** with real-time rates
- **Application management** for retail and institutional investors
- **Lot size calculations** and price band monitoring
- **Subscription status indicators** (Open, Upcoming, Closed)

### 🎯 IPO Allotment
- **Allotment status checking** by PAN number or application ID
- **Refund amount calculations** for partial/non-allotments
- **Downloadable allotment letters** in PDF format
- **Search and filter capabilities** for easy tracking

### ⚙️ Settings & Configuration
- **User profile management** with KYC details
- **Notification preferences** (Email, SMS, Push)
- **Security settings** with password management
- **Billing information** and subscription plans

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful and accessible UI components
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Relational database
- **Real-time subscriptions** - Live data updates
- **Row Level Security** - Data protection

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components (Shadcn/UI)
│   ├── AppSidebar.tsx         # Navigation sidebar component
│   ├── IPOTable.tsx           # Data table for IPO listings
│   ├── IPOCard.tsx            # Card component for IPO display
│   ├── Pagination.tsx         # Pagination component
│   ├── FilterTabs.tsx         # Filter and search functionality
│   └── StatsOverview.tsx      # Dashboard statistics component
├── pages/
│   ├── Index.tsx              # Main dashboard page
│   ├── ManageIPO.tsx          # IPO management and registration
│   ├── IPOSubscription.tsx    # Subscription tracking page
│   ├── IPOAllotment.tsx       # Allotment status page
│   ├── Settings.tsx           # User settings and preferences
│   ├── APIManager.tsx         # API configuration page
│   ├── Accounts.tsx           # Account management
│   └── Help.tsx               # Help and documentation
├── types/
│   └── ipo.ts                 # TypeScript type definitions
├── data/
│   └── sampleData.ts          # Sample IPO data for development
├── integrations/
│   └── supabase/              # Supabase client and types
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
└── App.tsx                    # Main application component
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ipo-management-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Configure your environment variables in the Supabase dashboard
   - Update the Supabase configuration in `src/integrations/supabase/client.ts`

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📱 Key Pages & Components

### Dashboard (`/`)
The main landing page featuring:
- IPO statistics overview
- Recent IPO listings table
- Quick action buttons
- Performance metrics

### Manage IPO (`/manage-ipo`)
Comprehensive IPO management interface:
- Company information form
- Logo upload functionality
- Price band and issue size configuration
- Listing date management
- Status tracking

### IPO Subscription (`/ipo-subscription`)
Subscription management dashboard:
- Available IPO listings
- Subscription rate monitoring
- Application submission
- Real-time status updates

### IPO Allotment (`/ipo-allotment`)
Allotment tracking and management:
- Status checking by application number
- Refund calculations
- Document downloads
- Search and filter options

### Settings (`/settings`)
User preferences and configuration:
- Profile management
- Notification settings
- Security configuration
- Billing information

## 🎨 UI/UX Features

- **Responsive Design** - Optimized for all screen sizes
- **Dark Mode Support** - Built-in theme switching
- **Accessibility** - WCAG compliant components
- **Loading States** - Smooth user experience with loading indicators
- **Error Handling** - Comprehensive error messaging
- **Toast Notifications** - Real-time feedback for user actions

## 🔐 Security Features

- **Authentication** - Secure user login and registration
- **Authorization** - Role-based access control
- **Data Validation** - Client and server-side validation
- **Secure Storage** - Encrypted data handling
- **Session Management** - Automatic session handling

## 📊 Data Management

### IPO Data Structure
```typescript
interface IPO {
  id: string;
  companyName: string;
  priceRange: string;
  issueSize: string;
  openDate: string;
  closeDate: string;
  listingDate: string;
  status: 'upcoming' | 'ongoing' | 'listed';
  subscriptionRate?: string;
  // ... additional fields
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deployment Options
- **Vercel** - Recommended for React applications
- **Netlify** - Easy deployment with continuous integration
- **Supabase Hosting** - Integrated with backend services
- **Traditional Hosting** - Any static hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Write descriptive commit messages
- Include proper error handling
- Add appropriate documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/help` section
- Contact the development team

## 🏗️ Architecture Decisions

### Component Architecture
- **Atomic Design** - Small, reusable components
- **Composition over Inheritance** - Flexible component structure
- **Custom Hooks** - Shared logic extraction
- **Type Safety** - Comprehensive TypeScript usage

### State Management
- **TanStack Query** - Server state and caching
- **React Context** - Global application state
- **Local State** - Component-specific state with useState

### Styling Approach
- **Tailwind CSS** - Utility-first styling
- **Component Variants** - Consistent design system
- **Responsive Design** - Mobile-first approach

---

**Built with ❤️ by Bluestock Fintech**

For more information about IPO investments and market analysis, visit our main platform.
