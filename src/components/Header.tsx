import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/../public/logo1.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Citizen App", href: "/citizen-app" },
    { name: "For Municipalities", href: "/municipal-dashboard" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "For NGOs", href: "#ngos" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/60 supports-[backdrop-filter]:bg-background/55">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="Kairoon home"
          >
            <div className="relative h-10 w-10 flex items-center justify-center rounded-xl overflow-hidden bg-[hsl(var(--primary))/0.12] border border-[hsl(var(--primary))/0.4] shadow-soft">
              <img
                src={logo}
                alt="Kairoon logo"
                className="h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                loading="eager"
                decoding="async"
                width={40}
                height={40}
              />
            </div>
            <div className="leading-tight select-none">
              <span className="text-lg font-semibold tracking-wide text-foreground group-hover:text-accent transition-colors">
                Kairoon
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 font-medium">
                Sustainability • Inclusivity
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground/80 hover:text-accent transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/70 hover:text-foreground"
            >
              Login
            </Button>
            <Button variant="hero" size="sm" className="px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background/85 backdrop-blur-xl border-t border-border/60 shadow-soft">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-muted-foreground/80 hover:text-accent hover:bg-[hsl(var(--primary))/0.12] transition-colors duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
