import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Student Bank Accounts in 2024',
    excerpt: 'Everything you need to know about choosing the right student bank account, from overdrafts to welcome bonuses.',
    category: 'Banking',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'Building Credit as a Student: A Step-by-Step Guide',
    excerpt: 'Learn how to build a strong credit history while studying, including the best credit cards for students.',
    category: 'Credit',
    author: 'Mike Chen',
    date: '2024-01-12',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'Student Budgeting: How to Make Your Money Last',
    excerpt: 'Practical tips for managing your finances as a student, from budgeting apps to money-saving strategies.',
    category: 'Budgeting',
    author: 'Emma Wilson',
    date: '2024-01-10',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: 'Understanding Student Loans: What You Need to Know',
    excerpt: 'A comprehensive guide to student loans in the UK, including repayment terms and interest rates.',
    category: 'Loans',
    author: 'David Brown',
    date: '2024-01-08',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=250&fit=crop'
  },
  {
    id: 5,
    title: 'Best Savings Accounts for Students in 2024',
    excerpt: 'Compare the top savings accounts offering the best interest rates and features for students.',
    category: 'Savings',
    author: 'Lisa Taylor',
    date: '2024-01-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop'
  },
  {
    id: 6,
    title: 'Financial Apps Every Student Should Have',
    excerpt: 'Discover the best mobile apps to help you manage your money, track spending, and save for the future.',
    category: 'Technology',
    author: 'Alex Rodriguez',
    date: '2024-01-03',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop'
  }
]

const categories = ['All', 'Banking', 'Credit', 'Budgeting', 'Loans', 'Savings', 'Technology']

export function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Student Finance Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert advice, guides, and tips to help you make smart financial decisions 
              throughout your student journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold">{blogPosts[0].title}</h3>
                    <p className="text-muted-foreground text-lg">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      <Button>
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}