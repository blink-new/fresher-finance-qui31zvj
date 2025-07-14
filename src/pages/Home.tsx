import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, CreditCard, PiggyBank, GraduationCap, TrendingUp, Star, ArrowRight, CheckCircle } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    type: 'Bank Account',
    name: 'Santander 123 Student Account',
    provider: 'Santander',
    rating: 4.8,
    reviews: 2847,
    features: ['£1,500 0% overdraft', 'No monthly fees', 'Cashback on purchases'],
    bonus: '£100 welcome bonus',
    cta: 'Apply Now',
    affiliate_link: '#'
  },
  {
    id: 2,
    type: 'Credit Card',
    name: 'Student Credit Builder Card',
    provider: 'Barclaycard',
    rating: 4.6,
    reviews: 1923,
    features: ['Build credit history', '0% on purchases for 6 months', 'No annual fee'],
    bonus: 'Representative APR 18.9%',
    cta: 'Check Eligibility',
    affiliate_link: '#'
  },
  {
    id: 3,
    type: 'Savings',
    name: 'Easy Access Student Saver',
    provider: 'Marcus by Goldman Sachs',
    rating: 4.7,
    reviews: 3156,
    features: ['4.5% AER', 'No minimum balance', 'Instant access'],
    bonus: 'Top rate guarantee',
    cta: 'Open Account',
    affiliate_link: '#'
  }
]

const benefits = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Compare Instantly',
    description: 'Find the best student financial products in seconds with our smart comparison tool.'
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Trusted Reviews',
    description: 'Real reviews from students who have used these products and services.'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Best Rates',
    description: 'We track rates daily to ensure you always see the most competitive offers.'
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Student-Focused',
    description: 'All products are specifically designed for students and young adults.'
  }
]

export function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🎓 Trusted by 50,000+ UK Students
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Find the Best{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Student Finance
                </span>{' '}
                Deals
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Compare bank accounts, credit cards, loans, and savings accounts designed specifically for UK students. 
                Get the best rates and exclusive student offers.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for bank accounts, credit cards, loans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 focus:border-primary"
                />
                <Button 
                  size="lg" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/bank-accounts">
                <Button variant="outline" className="rounded-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Bank Accounts
                </Button>
              </Link>
              <Link to="/credit-cards">
                <Button variant="outline" className="rounded-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Credit Cards
                </Button>
              </Link>
              <Link to="/savings">
                <Button variant="outline" className="rounded-full">
                  <PiggyBank className="h-4 w-4 mr-2" />
                  Savings
                </Button>
              </Link>
              <Link to="/student-loans">
                <Button variant="outline" className="rounded-full">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Student Loans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Student Deals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked offers with the best rates and benefits for students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{product.type}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground">
                      {product.provider}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm font-medium text-accent">{product.bonus}</p>
                  </div>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {product.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/compare">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Fresher Finance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make finding the right financial products simple and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Find Your Perfect Student Account?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of students who have found better deals with Fresher Finance. 
              Start comparing today and save money on your banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/compare">
                <Button size="lg" variant="secondary" className="text-primary">
                  Start Comparing
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Read Our Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}