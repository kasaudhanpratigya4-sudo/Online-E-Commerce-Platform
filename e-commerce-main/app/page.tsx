import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  New Collection
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Quality Products for Your Lifestyle
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Shop our curated collection of premium products designed to enhance your everyday life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="w-full">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button size="lg" variant="outline" className="w-full">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-xl">
              <Image src="/images/hero.jpg" alt="Hero Image" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our most popular items loved by our customers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {product.badge && <Badge className="absolute top-2 right-2">{product.badge}</Badge>}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="font-bold">${product.price.toFixed(2)}</div>
                    <Button size="sm" variant="ghost">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shop by Category</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find exactly what you're looking for in our diverse collection of categories
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.id} className="group">
                <div className="relative h-[180px] overflow-hidden rounded-xl">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    rating: 4,
    reviews: 42,
    image: "/images/products/headphones.jpg",
    badge: "New",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    price: 249.99,
    rating: 5,
    reviews: 87,
    image: "/images/products/chair.jpg",
    badge: "Best Seller",
  },
  {
    id: "3",
    name: "Smart Home Hub",
    price: 129.99,
    rating: 4,
    reviews: 36,
    image: "/images/products/smart-hub.jpg",
  },
  {
    id: "4",
    name: "Fitness Tracker Watch",
    price: 89.99,
    rating: 4,
    reviews: 54,
    image: "/images/products/fitness-tracker.jpg",
  },
]

const categories = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image: "/images/categories/electronics.jpg",
  },
  {
    id: "2",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "/images/categories/home-kitchen.jpg",
  },
  {
    id: "3",
    name: "Fashion",
    slug: "fashion",
    image: "/images/categories/fashion.jpg",
  },
  {
    id: "4",
    name: "Health & Beauty",
    slug: "health-beauty",
    image: "/images/categories/health-beauty.jpg",
  },
  {
    id: "5",
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    image: "/images/categories/sports-outdoors.jpg",
  },
  {
    id: "6",
    name: "Books & Media",
    slug: "books-media",
    image: "/images/categories/books-media.jpg",
  },
  {
    id: "7",
    name: "Toys & Games",
    slug: "toys-games",
    image: "/images/categories/toys-games.jpg",
  },
  {
    id: "8",
    name: "Automotive",
    slug: "automotive",
    image: "/images/categories/automotive.jpg",
  },
]
