import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Music, Film, Image, Quote, Heart } from "lucide-react";
import FloatingFeathers from "./FloatingFeathers";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/songs", label: "Songs", icon: Music },
  { path: "/highlights", label: "Highlights", icon: Film },
  { path: "/gallery", label: "Gallery", icon: Image },
  { path: "/quotes", label: "Quotes", icon: Quote },
  { path: "/tribute", label: "Tribute", icon: Heart },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background grain-overlay">
      <FloatingFeathers />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl animate-gentle-float">🪶</span>
            <span className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              A Feather in Memory
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-body transition-all duration-200 ${
                    active
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border bg-background/95"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-body transition-all ${
                        active
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground font-body text-sm flex items-center justify-center gap-2">
            <span className="animate-gentle-float">🪶</span>
            Always remembered
            <span className="animate-gentle-float" style={{ animationDelay: "0.5s" }}>🪶</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2 font-body">
            A fan tribute to Nanashi Mumei — made with love
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
