import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "معرض الأعمال", href: "/gallery" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-50 backdrop-luxury border-b shadow-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="group block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300 group-hover:scale-105"
            >
              <img
                src="/WhatsApp Image 2025-09-17 at 18.22.05_67e6dbb9.jpg"
                alt="Event"
                className="md:!w-18 md:!h-18 w-14 h-14 rounded-full object-cover shadow-lg"
              />
            </motion.div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-white bg-[#580012] shadow-subtle"
                    : "text-foreground hover:text-white hover:bg-[#580012]"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#5800126e] rounded-full shadow-subtle"
                    style={{ zIndex: -1 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent hover:bg-calm rounded-full p-3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: isOpen ? 0 : 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 180 : 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2 bg-card/50 backdrop-blur-sm rounded-2xl mx-4 mb-4 shadow-elegant">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? "text-accent bg-elegant shadow-subtle"
                          : "text-foreground hover:text-accent hover:bg-calm"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
