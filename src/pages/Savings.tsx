import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'

const savingsAccounts = [
  {
    id: 1,
    name: 'Easy Access Student Saver',
    provider: 'Marcus by Goldman Sachs',
    rating: 4.7,
    rate: '4.5% AER',
    type: 'Easy Access',
    features: ['No minimum balance', 'Instant access to funds', 'Online only', 'Top rate guarantee'],
    minDeposit: '£1',
    restrictions: 'None'
  },
  {
    id: 2,
    name: 'Instant Access Saver',
    provider: 'Chase',
    rating: 4.5,
    rate: '4.1% AER',
    type: 'Easy Access',
    features: ['1% cashback on debit card', 'Round-up savings', 'Mobile app', 'No fees'],
    minDeposit: '£1',
    restrictions: 'Must have Chase current account'
  },
  {
    id: 3,
    name: 'Regular Saver',
    provider: 'First Direct',
    rating: 4.6,
    rate: '7.0% AER',
    type: 'Regular Saver',
    features: ['High interest rate', 'Monthly deposits', '12-month term', 'Automatic transfers'],
    minDeposit: '£25/month',
    restrictions: 'Must have First Direct current account'
  }
]

export function Savings() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Student Savings Accounts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start building your savings with the best interest rates available to students. 
              Compare easy access and regular savings accounts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {savingsAccounts.map((account) => (
              <Card key={account.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-2xl">{account.name}</CardTitle>
                        <Badge variant="secondary">{account.provider}</Badge>
                        <Badge variant="outline">{account.type}</Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{account.rating}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-accent" />
                          <span className="text-2xl font-bold text-accent">{account.rate}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="lg:w-auto w-full">
                      Open Account
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                    <div className="space-y-3">
                      <h4 className="font-semibold">Requirements</h4>
                      <div className="text-sm space-y-1">
                        <p><span className="font-medium">Minimum deposit:</span> {account.minDeposit}</p>
                        <p><span className="font-medium">Restrictions:</span> {account.restrictions}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Account Type</h4>
                      <p className="text-sm text-muted-foreground">
                        {account.type === 'Easy Access' 
                          ? 'Access your money anytime without penalties'
                          : 'Save a fixed amount monthly for higher returns'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10">
              <CardHeader>
                <CardTitle>💡 Savings Tip</CardTitle>
                <CardDescription>
                  Start with an easy access account for emergency funds, then consider a regular saver 
                  for higher returns on monthly deposits.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}