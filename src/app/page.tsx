import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, Users, Zap, Crown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SciFiStream</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Movies
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Series
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Genres
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Start Free Trial</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/futuristic-space-cityscape-with-neon-lights-and-st.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/90 text-primary-foreground border-primary">Now Streaming</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Explore the Universe of
              <span className="text-primary"> Sci-Fi Cinema</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Discover thousands of science fiction masterpieces, from classic space operas to cutting-edge cyberpunk
              adventures. Your gateway to infinite worlds awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Your Adventure
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8 py-4 text-lg bg-transparent"
              >
                Browse Movies
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span>10,000+ Movies</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>2M+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span>4K Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Subscription</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock unlimited access to the galaxy's greatest sci-fi collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-card-foreground">Explorer</CardTitle>
                <CardDescription className="text-secondary">Perfect for casual viewing</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">€9</span>
                  <span className="text-secondary">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">HD Quality Streaming</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">1 Device</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">5,000+ Movies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Basic Support</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Popular Plan */}
            <Card className="bg-card border-primary shadow-lg shadow-primary/20 relative hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl text-card-foreground">Voyager</CardTitle>
                <CardDescription className="text-secondary">Best value for sci-fi fans</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">€19</span>
                  <span className="text-secondary">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">4K Ultra HD Streaming</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">3 Devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">10,000+ Movies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Exclusive Content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Priority Support</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-card-foreground">Commander</CardTitle>
                <CardDescription className="text-secondary">Ultimate sci-fi experience</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">€29</span>
                  <span className="text-secondary">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">8K & HDR Streaming</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Unlimited Devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Complete Library</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Early Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">VIP Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-card-foreground">Offline Downloads</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Go Premium
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SciFiStream</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your ultimate destination for science fiction entertainment across the galaxy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Content</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Movies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    TV Series
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentaries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    New Releases
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Data Source</h3>
              <p className="text-sm text-muted-foreground mb-2">Movie information powered by</p>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                The Movie Database (TMDB)
              </a>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 SciFiStream. All rights reserved. Explore responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
