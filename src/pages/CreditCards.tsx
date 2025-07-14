import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, CheckCircle, ArrowRight } from 'lucide-react'

const creditCards = [
  {
    id: 1,
    name: 'Student Credit Builder Card',
    provider: 'Barclaycard',
    rating: 4.6,
    apr: '18.9% representative APR',
    features: ['Build credit history', '0% on purchases for 6 months', 'No annual fee', 'Fraud protection'],
    eligibility: 'UK students aged 18+',
    creditLimit: '£200 - £1,200'
  },
  {
    id: 2,
    name: 'Aqua Classic Credit Card',
    provider: 'Aqua',
    rating: 4.2,
    apr: '34.9% representative APR',
    features: ['Accepts bad credit', 'Online account management', 'Flexible payment options', 'Credit limit increases'],
    eligibility: 'UK residents aged 18+',
    creditLimit: '£250 - £1,500'
  }
]

export function CreditCards() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Student Credit Cards</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build your credit history with student-friendly credit cards. Compare rates, 
              features, and find the best card for your financial journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {creditCards.map((card) => (
              <Card key={card.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-2xl">{card.name}</CardTitle>
                        <Badge variant="secondary">{card.provider}</Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{card.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-primary border-primary">
                          {card.apr}
                        </Badge>
                      </div>
                    </div>
                    <Button size="lg" className="lg:w-auto w-full">
                      Check Eligibility
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-2">
                        {card.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Eligibility</h4>
                      <p className="text-sm text-muted-foreground">{card.eligibility}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Credit Limit</h4>
                      <p className="text-sm text-muted-foreground">{card.creditLimit}</p>
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