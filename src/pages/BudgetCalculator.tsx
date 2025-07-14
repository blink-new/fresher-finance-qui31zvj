import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { PlusCircle, MinusCircle, PiggyBank, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'

interface BudgetItem {
  id: string
  name: string
  amount: number
  category: 'income' | 'expense'
  type: string
}

const BudgetCalculator = () => {
  const [items, setItems] = useState<BudgetItem[]>([
    { id: '1', name: 'Student Loan', amount: 9250, category: 'income', type: 'Student Finance' },
    { id: '2', name: 'Part-time Job', amount: 400, category: 'income', type: 'Employment' },
    { id: '3', name: 'Accommodation', amount: 500, category: 'expense', type: 'Housing' },
    { id: '4', name: 'Food & Groceries', amount: 200, category: 'expense', type: 'Living' },
    { id: '5', name: 'Transport', amount: 80, category: 'expense', type: 'Travel' },
    { id: '6', name: 'Books & Supplies', amount: 50, category: 'expense', type: 'Education' },
  ])

  const [newItem, setNewItem] = useState({ name: '', amount: '', category: 'expense' as 'income' | 'expense', type: '' })
  const [timeframe, setTimeframe] = useState<'monthly' | 'yearly'>('monthly')

  const totalIncome = items
    .filter(item => item.category === 'income')
    .reduce((sum, item) => sum + (timeframe === 'monthly' ? item.amount : item.amount * 12), 0)

  const totalExpenses = items
    .filter(item => item.category === 'expense')
    .reduce((sum, item) => sum + (timeframe === 'monthly' ? item.amount : item.amount * 12), 0)

  const balance = totalIncome - totalExpenses
  const savingsRate = totalIncome > 0 ? (balance / totalIncome) * 100 : 0

  const addItem = () => {
    if (newItem.name && newItem.amount && newItem.type) {
      const item: BudgetItem = {
        id: Date.now().toString(),
        name: newItem.name,
        amount: parseFloat(newItem.amount),
        category: newItem.category,
        type: newItem.type
      }
      setItems([...items, item])
      setNewItem({ name: '', amount: '', category: 'expense', type: '' })
    }
  }

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const updateItem = (id: string, field: keyof BudgetItem, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const getBalanceStatus = () => {
    if (balance > totalIncome * 0.2) return { status: 'excellent', color: 'text-green-600', icon: CheckCircle }
    if (balance > totalIncome * 0.1) return { status: 'good', color: 'text-blue-600', icon: TrendingUp }
    if (balance > 0) return { status: 'okay', color: 'text-yellow-600', icon: PiggyBank }
    return { status: 'concerning', color: 'text-red-600', icon: AlertTriangle }
  }

  const balanceStatus = getBalanceStatus()
  const StatusIcon = balanceStatus.icon

  const expensesByCategory = items
    .filter(item => item.category === 'expense')
    .reduce((acc, item) => {
      const amount = timeframe === 'monthly' ? item.amount : item.amount * 12
      acc[item.type] = (acc[item.type] || 0) + amount
      return acc
    }, {} as Record<string, number>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Budget Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take control of your finances with our comprehensive budget calculator designed specifically for UK students.
          </p>
        </div>

        {/* Timeframe Toggle */}
        <div className="flex justify-center mb-8">
          <Tabs value={timeframe} onValueChange={(value) => setTimeframe(value as 'monthly' | 'yearly')} className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly View</TabsTrigger>
              <TabsTrigger value="yearly">Yearly View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Budget Overview */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-indigo-600" />
                  Budget Overview
                </CardTitle>
                <CardDescription>
                  {timeframe === 'monthly' ? 'Monthly' : 'Yearly'} financial summary
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Total Income</span>
                    <span className="text-lg font-bold text-green-600">
                      £{totalIncome.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Total Expenses</span>
                    <span className="text-lg font-bold text-red-600">
                      £{totalExpenses.toLocaleString()}
                    </span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                      <StatusIcon className={`h-4 w-4 ${balanceStatus.color}`} />
                      Balance
                    </span>
                    <span className={`text-xl font-bold ${balanceStatus.color}`}>
                      £{balance.toLocaleString()}
                    </span>
                  </div>
                </div>

                {balance > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Savings Rate</span>
                      <span className="text-sm font-bold text-indigo-600">
                        {savingsRate.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={Math.min(savingsRate, 100)} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      {savingsRate >= 20 ? 'Excellent!' : savingsRate >= 10 ? 'Good progress' : 'Consider reducing expenses'}
                    </p>
                  </div>
                )}

                {/* Financial Health Tips */}
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">💡 Financial Tip</h4>
                  <p className="text-sm text-indigo-800">
                    {balance < 0 
                      ? "Your expenses exceed income. Consider finding additional income sources or reducing non-essential spending."
                      : savingsRate >= 20
                      ? "Great job! You're saving over 20% of your income. Consider investing in a student savings account."
                      : "Try to save at least 10-20% of your income for emergencies and future goals."
                    }
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expense Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Spending by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(expensesByCategory).map(([category, amount]) => {
                    const percentage = totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0
                    return (
                      <div key={category}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-600">{category}</span>
                          <span className="text-sm font-bold">£{amount.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={percentage} className="h-2 flex-1" />
                          <span className="text-xs text-gray-500 w-12">{percentage.toFixed(0)}%</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Budget Items */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="income" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="income">Income Sources</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
              </TabsList>

              <TabsContent value="income" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Income Sources</CardTitle>
                    <CardDescription>Add your monthly income sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {items.filter(item => item.category === 'income').map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="flex-1">
                            <Input
                              value={item.name}
                              onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                              placeholder="Income source"
                              className="mb-2"
                            />
                            <Input
                              value={item.type}
                              onChange={(e) => updateItem(item.id, 'type', e.target.value)}
                              placeholder="Category (e.g., Student Finance, Employment)"
                            />
                          </div>
                          <div className="w-32">
                            <Input
                              type="number"
                              value={item.amount}
                              onChange={(e) => updateItem(item.id, 'amount', parseFloat(e.target.value) || 0)}
                              placeholder="Amount"
                            />
                            <span className="text-xs text-gray-500">per month</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <MinusCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}

                      {/* Add New Income */}
                      <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                        <div className="flex-1">
                          <Input
                            value={newItem.name}
                            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                            placeholder="Income source name"
                            className="mb-2"
                          />
                          <Input
                            value={newItem.type}
                            onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                            placeholder="Category"
                          />
                        </div>
                        <div className="w-32">
                          <Input
                            type="number"
                            value={newItem.amount}
                            onChange={(e) => setNewItem({...newItem, amount: e.target.value})}
                            placeholder="Amount"
                          />
                        </div>
                        <Button
                          onClick={() => {
                            setNewItem({...newItem, category: 'income'})
                            addItem()
                          }}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="expenses" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Monthly Expenses</CardTitle>
                    <CardDescription>Track your monthly spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {items.filter(item => item.category === 'expense').map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="flex-1">
                            <Input
                              value={item.name}
                              onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                              placeholder="Expense name"
                              className="mb-2"
                            />
                            <Input
                              value={item.type}
                              onChange={(e) => updateItem(item.id, 'type', e.target.value)}
                              placeholder="Category (e.g., Housing, Food, Transport)"
                            />
                          </div>
                          <div className="w-32">
                            <Input
                              type="number"
                              value={item.amount}
                              onChange={(e) => updateItem(item.id, 'amount', parseFloat(e.target.value) || 0)}
                              placeholder="Amount"
                            />
                            <span className="text-xs text-gray-500">per month</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <MinusCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}

                      {/* Add New Expense */}
                      <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                        <div className="flex-1">
                          <Input
                            value={newItem.name}
                            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                            placeholder="Expense name"
                            className="mb-2"
                          />
                          <Input
                            value={newItem.type}
                            onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                            placeholder="Category"
                          />
                        </div>
                        <div className="w-32">
                          <Input
                            type="number"
                            value={newItem.amount}
                            onChange={(e) => setNewItem({...newItem, amount: e.target.value})}
                            placeholder="Amount"
                          />
                        </div>
                        <Button
                          onClick={() => {
                            setNewItem({...newItem, category: 'expense'})
                            addItem()
                          }}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Student Financial Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>💰 Student Money Tips</CardTitle>
                <CardDescription>Essential financial advice for students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Budgeting Basics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Track every expense for a month</li>
                      <li>• Use the 50/30/20 rule: needs/wants/savings</li>
                      <li>• Set up automatic savings transfers</li>
                      <li>• Review and adjust monthly</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Student Discounts</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Get a student bank account</li>
                      <li>• Use student discount cards (UNiDAYS, Student Beans)</li>
                      <li>• Look for student deals on transport</li>
                      <li>• Take advantage of free student services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetCalculator