import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Star, CheckCircle, X, ArrowRight } from 'lucide-react'

const products = {
  'bank-accounts': [
    {
      id: 1,
      name: 'Santander 123 Student',
      provider: 'Santander',
      rating: 4.8,
      overdraft: '£1,500',
      fee: 'Free',
      bonus: '£100',
      features: ['Cashback', 'Mobile app', '24/7 support']
    },
    {
      id: 2,
      name: 'NatWest Student',
      provider: 'NatWest',
      rating: 4.6,
      overdraft: '£2,000',
      fee: 'Free',
      bonus: '£100 voucher',
      features: ['Rooster Money', 'Get Cash', 'Discounts']
    },
    {
      id: 3,
      name: 'HSBC Student',
      provider: 'HSBC',
      rating: 4.4,
      overdraft: '£1,000',
      fee: 'Free',
      bonus: '£80',
      features: ['Global banking', 'International transfers', 'Study abroad']
    }
  ],
  'credit-cards': [
    {
      id: 1,
      name: 'Student Credit Builder',
      provider: 'Barclaycard',
      rating: 4.6,
      apr: '18.9%',
      fee: 'Free',
      bonus: '0% for 6 months',
      features: ['Build credit', 'No annual fee', 'Fraud protection']
    },
    {
      id: 2,
      name: 'Aqua Classic',
      provider: 'Aqua',
      rating: 4.2,
      apr: '34.9%',
      fee: 'Free',
      bonus: 'Credit building',
      features: ['Bad credit accepted', 'Online management', 'Flexible payments']
    }
  ],
  'savings': [
    {
      id: 1,
      name: 'Easy Access Saver',
      provider: 'Marcus',
      rating: 4.7,
      rate: '4.5%',
      fee: 'Free',
      bonus: 'Top rate guarantee',
      features: ['Instant access', 'No minimum', 'Online only']
    },
    {
      id: 2,
      name: 'Instant Saver',
      provider: 'Chase',
      rating: 4.5,
      rate: '4.1%',
      fee: 'Free',
      bonus: '1% cashback',
      features: ['Mobile app', 'Round-ups', 'Instant access']
    }
  ]
}

export function Compare() {
  const [activeTab, setActiveTab] = useState('bank-accounts')
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  const currentProducts = products[activeTab as keyof typeof products] || []

  const toggleProduct = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId].slice(0, 3) // Max 3 products
    )
  }

  const selectedProductsData = currentProducts.filter(p => selectedProducts.includes(p.id))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Compare Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Side-by-side comparison of the best student financial products. 
              Select up to 3 products to compare features, rates, and benefits.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-96 mx-auto">
            <TabsTrigger value="bank-accounts">Bank Accounts</TabsTrigger>
            <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-8">
            {/* Product Selection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Select Products to Compare</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <Card 
                    key={product.id} 
                    className={`cursor-pointer transition-all ${
                      selectedProducts.includes(product.id) 
                        ? 'ring-2 ring-primary border-primary' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => toggleProduct(product.id)}
                  >
                    <CardHeader className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Checkbox 
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => toggleProduct(product.id)}
                        />
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.provider}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary">{product.bonus}</Badge>
                        <div className="text-sm space-y-1">
                          {activeTab === 'bank-accounts' && (
                            <>
                              <p><span className="font-medium">Overdraft:</span> {product.overdraft}</p>
                              <p><span className="font-medium">Monthly fee:</span> {product.fee}</p>
                            </>
                          )}
                          {activeTab === 'credit-cards' && (
                            <>
                              <p><span className="font-medium">APR:</span> {(product as any).apr}</p>
                              <p><span className="font-medium">Annual fee:</span> {product.fee}</p>
                            </>
                          )}
                          {activeTab === 'savings' && (
                            <>
                              <p><span className="font-medium">Interest rate:</span> {(product as any).rate}</p>
                              <p><span className="font-medium">Monthly fee:</span> {product.fee}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            {selectedProductsData.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Comparison</h2>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedProducts([])}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Feature Labels */}
                      <div className="space-y-4">
                        <div className="h-32 flex items-end">
                          <h3 className="font-semibold">Product</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="py-3 border-b">
                            <span className="font-medium">Provider</span>
                          </div>
                          <div className="py-3 border-b">
                            <span className="font-medium">Rating</span>
                          </div>
                          {activeTab === 'bank-accounts' && (
                            <>
                              <div className="py-3 border-b">
                                <span className="font-medium">Overdraft</span>
                              </div>
                              <div className="py-3 border-b">
                                <span className="font-medium">Monthly Fee</span>
                              </div>
                            </>
                          )}
                          {activeTab === 'credit-cards' && (
                            <>
                              <div className="py-3 border-b">
                                <span className="font-medium">APR</span>
                              </div>
                              <div className="py-3 border-b">
                                <span className="font-medium">Annual Fee</span>
                              </div>
                            </>
                          )}
                          {activeTab === 'savings' && (
                            <>
                              <div className="py-3 border-b">
                                <span className="font-medium">Interest Rate</span>
                              </div>
                              <div className="py-3 border-b">
                                <span className="font-medium">Monthly Fee</span>
                              </div>
                            </>
                          )}
                          <div className="py-3 border-b">
                            <span className="font-medium">Special Offer</span>
                          </div>
                          <div className="py-3 border-b">
                            <span className="font-medium">Key Features</span>
                          </div>
                          <div className="py-3">
                            <span className="font-medium">Action</span>
                          </div>
                        </div>
                      </div>

                      {/* Product Columns */}
                      {selectedProductsData.map((product) => (
                        <Card key={product.id} className="space-y-4">
                          <CardHeader className="h-32">
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <CardDescription>{product.provider}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="py-3 border-b">
                              <span>{product.provider}</span>
                            </div>
                            <div className="py-3 border-b flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{product.rating}</span>
                            </div>
                            {activeTab === 'bank-accounts' && (
                              <>
                                <div className="py-3 border-b">
                                  <span className="font-medium text-accent">{product.overdraft}</span>
                                </div>
                                <div className="py-3 border-b">
                                  <span>{product.fee}</span>
                                </div>
                              </>
                            )}
                            {activeTab === 'credit-cards' && (
                              <>
                                <div className="py-3 border-b">
                                  <span>{(product as any).apr}</span>
                                </div>
                                <div className="py-3 border-b">
                                  <span>{product.fee}</span>
                                </div>
                              </>
                            )}
                            {activeTab === 'savings' && (
                              <>
                                <div className="py-3 border-b">
                                  <span className="font-medium text-accent">{(product as any).rate}</span>
                                </div>
                                <div className="py-3 border-b">
                                  <span>{product.fee}</span>
                                </div>
                              </>
                            )}
                            <div className="py-3 border-b">
                              <Badge variant="secondary">{product.bonus}</Badge>
                            </div>
                            <div className="py-3 border-b">
                              <ul className="space-y-1">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="h-3 w-3 text-accent" />
                                    <span className="text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="py-3">
                              <Button className="w-full">
                                Apply Now
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}