import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-muted-foreground">
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>
            <div className="grid grid-cols-2 gap-2">
              <Input type="number" placeholder="Min" />
              <Input type="number" placeholder="Max" />
            </div>
            <Button className="w-full mt-2" size="sm">
              Apply
            </Button>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-muted-foreground flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                        />
                      ))}
                    <span className="ml-1">& Up</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
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

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

// Sample data
const categories = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Home & Kitchen" },
  { id: "3", name: "Fashion" },
  { id: "4", name: "Health & Beauty" },
  { id: "5", name: "Sports & Outdoors" },
  { id: "6", name: "Books & Media" },
  { id: "7", name: "Toys & Games" },
  { id: "8", name: "Automotive" },
]

const products = [
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
  {
    id: "5",
    name: "Ultra HD Smart TV",
    price: 799.99,
    rating: 5,
    reviews: 112,
    image: "/images/products/tv.jpg",
    badge: "Sale",
  },
  {
    id: "6",
    name: "Professional Blender",
    price: 149.99,
    rating: 4,
    reviews: 28,
    image: "/images/products/blender.jpg",
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    price: 39.99,
    rating: 3,
    reviews: 19,
    image: "/images/products/charging-pad.jpg",
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    rating: 4,
    reviews: 63,
    image: "/images/products/speaker.jpg",
  },
  {
    id: "9",
    name: "Digital Camera",
    price: 349.99,
    rating: 4,
    reviews: 47,
    image: "/images/products/camera.jpg",
  },
]
