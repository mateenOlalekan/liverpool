import { useState, useEffect } from "react";
import Chart from "../assets/img/Chartered.png";
import Circle from "../assets/img/Country.png";
import LFClogo from "../assets/img/icon.png";
import newTab from "../assets/img/newTab.svg";
import { ImNewTab } from "react-icons/im";
import { Search, User2, ShoppingBag, ChevronDown } from "lucide-react";

const categories = [
  "CHAMPIONS", "ISTANBUL", "NIKE", "FASHION", "LIVING",
  "SIGNED", "GIFTS", "PERSONALIZED", "SALE", "PLAYER"
];

function Navbar() {
  const [showBottomNav, setShowBottomNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled down beyond 100px
      // Show ONLY if scrolled back up near top
      if (window.scrollY > 100) {
        setShowBottomNav(false);
      } else {
        setShowBottomNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full flex flex-col z-50">
      {/* 🔴 Top Red Bar */}
      <div className="w-full bg-[#E31B23] text-white">
        <div className="max-w-screen-2xl mx-auto flex justify-between max-lg:justify-center items-center px-10 py-1">
          <div className="flex items-center max-lg:hidden gap-4">
            <p className="font-semibold">LIVERPOOL.COM</p>
            <span>|</span>
            <p className="text-sm">Official Liverpool FC Store</p>
            <span>|</span>
            <p className="text-sm">Official LFC Auction Store</p>
            <ImNewTab className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm whitespace-nowrap">TRACK AN ORDER</p>
            <img src={Chart} alt="Chart" className="w-14 h-10 object-contain" />
            <img src={Circle} alt="Country Icon" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>

      {/* ⚪ Main Nav */}
      <div className="w-full bg-white text-black text-sm shadow-sm">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-10 py-2">
          <img src={LFClogo} alt="LFC Logo" className="w-6 object-contain" />
          <div className="flex items-center gap-4">
            {categories.map((category) => (
              <p key={category} className="font-normal">{category}</p>
            ))}
            <img src={newTab} alt="New Tab Icon" className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5" />
            <User2 className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 🔻 Scroll-Sensitive Bottom Banner */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showBottomNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } bg-[#E31B23] text-white py-2 text-sm`}
      >
        <div className="flex justify-center items-center max-lg:hidden gap-2">
          <p>FIND THE LATEST PERFECT LFC GIFT</p>
          <ChevronDown />
        </div>
        <div className="flex justify-center lg:hidden items-center gap-2">
          <p>OFFICIAL MEMBERS SAVE 10% OFF</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
