import React, { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const cartCount = 3;
  const wishlistCount = 2;

  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
   <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/95 backdrop-blur-xl">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-14 items-center justify-between gap-4">

      {/* Left Section */}
      <div className="flex items-center gap-3">
     

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
      

        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden items-center gap-10 md:flex">
        {["HOME","STORE","ABOUT"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-lg font-medium text-zinc-300 transition hover:text-purple-400"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
     

        {/* Wishlist */}
       

        {/* Cart */}
    

      
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="border-t border-zinc-900 bg-black px-4 py-5 md:hidden">
    {/* Mobile Search */}
 


    
  </div>
</header>
  );
};

export default Header;