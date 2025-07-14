import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { BankAccounts } from './pages/BankAccounts'
import { CreditCards } from './pages/CreditCards'
import { StudentLoans } from './pages/StudentLoans'
import { Savings } from './pages/Savings'
import { Compare } from './pages/Compare'
import { Blog } from './pages/Blog'
import BudgetCalculator from './pages/BudgetCalculator'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bank-accounts" element={<BankAccounts />} />
            <Route path="credit-cards" element={<CreditCards />} />
            <Route path="student-loans" element={<StudentLoans />} />
            <Route path="savings" element={<Savings />} />
            <Route path="compare" element={<Compare />} />
            <Route path="blog" element={<Blog />} />
            <Route path="budget-calculator" element={<BudgetCalculator />} />
            {/* Placeholder routes for future pages */}
            <Route path="about" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">About Us</h1><p className="text-muted-foreground mt-4">Coming soon...</p></div>} />
            <Route path="contact" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Contact Us</h1><p className="text-muted-foreground mt-4">Coming soon...</p></div>} />
            <Route path="privacy" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Privacy Policy</h1><p className="text-muted-foreground mt-4">Coming soon...</p></div>} />
            <Route path="terms" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Terms of Service</h1><p className="text-muted-foreground mt-4">Coming soon...</p></div>} />
            <Route path="cookies" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Cookie Policy</h1><p className="text-muted-foreground mt-4">Coming soon...</p></div>} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App