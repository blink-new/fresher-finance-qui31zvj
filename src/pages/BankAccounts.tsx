import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Star, CheckCircle, ArrowRight, Filter, Search } from 'lucide-react'

const bankAccounts = [
  {
    id: 1,
    name: 'Santander 123 Student Account',
    provider: 'Santander',
    rating: 4.8,
    reviews: 2847,
    overdraft: '£1,500 0%',
    monthlyFee: 'Free',
    features: ['£100 welcome bonus', 'Cashback on purchases', 'Mobile banking app', '24/7 customer support'],
    pros: ['Generous overdraft', 'Good cashback rates', 'Excellent app'],
    cons: ['Limited branch network', 'Overdraft fees after graduation'],
    eligibility: 'UK students aged 17-25',
    applicationTime: '10 minutes online',
    affiliate_link: '#'
  },
  {
    id: 2,
    name: 'NatWest Student Account',
    provider: 'NatWest',
    rating: 4.6,
    reviews: 3421,
    overdraft: '£2,000 0%',
    monthlyFee: 'Free',
    features: ['£100 Amazon voucher', 'Rooster Money app', 'Get Cash app', 'Student discounts'],
    pros: ['Largest overdraft', 'Great student perks', 'Wide branch network'],
    cons: ['Complex fee structure', 'App could be better'],
    eligibility: 'UK/EU students aged 17+',
    applicationTime: '15 minutes online',
    affiliate_link: '#'
  },
  {
    id: 3,
    name: 'HSBC Student Account',
    provider: 'HSBC',
    rating: 4.4,
    reviews: 2156,
    overdraft: '£1,000 0%',
    monthlyFee: 'Free',
    features: ['£80 welcome bonus', 'Global student account', 'International transfers', 'Study abroad support'],
    pros: ['International banking', 'Good for study abroad', 'Reliable service'],
    cons: ['Smaller overdraft', 'Fewer perks than competitors'],
    eligibility: 'UK students aged 17+',
    applicationTime: '20 minutes online',
    affiliate_link: '#'
  },
  {
    id: 4,
    name: 'Barclays Student Account',
    provider: 'Barclays',
    rating: 4.5,
    reviews: 1987,
    overdraft: '£1,500 0%',
    monthlyFee: 'Free',
    features: ['£100 welcome bonus', 'Barclays app', 'Student discounts', 'Contactless payments'],
    pros: ['User-friendly app', 'Good customer service', 'Competitive overdraft'],
    cons: ['Limited international features', 'Overdraft approval varies'],
    eligibility: 'UK students aged 18+',
    applicationTime: '12 minutes online',
    affiliate_link: '#'
  }
]

export function BankAccounts() {
  const [sortBy, setSortBy] = useState('rating')
  const [filterBy, setFilterBy] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredAccounts = bankAccounts
    .filter(account => {
      if (filterBy === 'all') return true
      if (filterBy === 'high-overdraft') return parseInt(account.overdraft.replace(/[£,]/g, '')) >= 1500
      if (filterBy === 'welcome-bonus') return account.features.some(f => f.includes('bonus'))
      return true
    })
    .filter(account => 
      account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.provider.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'overdraft') return parseInt(b.overdraft.replace(/[£,]/g, '')) - parseInt(a.overdraft.replace(/[£,]/g, ''))
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return 0
    })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Student Bank Accounts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare the best student bank accounts in the UK. Find accounts with 0% overdrafts, 
              welcome bonuses, and student-friendly features.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search accounts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="high-overdraft">High Overdraft (£1,500+)</SelectItem>
                  <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="overdraft">Overdraft Amount</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredAccounts.length} student bank accounts
            </p>
          </div>

          <div className="space-y-6">
            {filteredAccounts.map((account) => (
              <Card key={account.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-2xl">{account.name}</CardTitle>
                        <Badge variant="secondary">{account.provider}</Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{account.rating}</span>
                          <span className="text-muted-foreground">({account.reviews} reviews)</span>
                        </div>
                        <Badge variant="outline" className="text-accent border-accent">
                          {account.overdraft} overdraft
                        </Badge>
                      </div>
                    </div>
                    <Button size="lg" className="lg:w-auto w-full">
                      Apply Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-2">
                        {account.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pros & Cons */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Pros & Cons</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-accent mb-1">Pros:</p>
                          <ul className="text-sm space-y-1">
                            {account.pros.map((pro, index) => (
                              <li key={index} className="text-muted-foreground">• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-destructive mb-1">Cons:</p>
                          <ul className="text-sm space-y-1">
                            {account.cons.map((con, index) => (
                              <li key={index} className="text-muted-foreground">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Details</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Eligibility:</span>
                          <p className="text-muted-foreground">{account.eligibility}</p>
                        </div>
                        <div>
                          <span className="font-medium">Application time:</span>
                          <p className="text-muted-foreground">{account.applicationTime}</p>
                        </div>
                        <div>
                          <span className="font-medium">Monthly fee:</span>
                          <p className="text-muted-foreground">{account.monthlyFee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}