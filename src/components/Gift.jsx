import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

import Homeware from "../assets/Homeware.jpg";
import Toy from "../assets/Toys&Games.jpg";

// Popular Items
import LfcX1 from "../assets/Popular/Signed.jpg";
import LfcX2 from "../assets/Popular/ChampionsRange.jpg";
import LfcX3 from "../assets/Popular/IstanbulCollection.jpg";
import LfcX4 from "../assets/Popular/Signed.jpg";
import LfcX5 from "../assets/Popular/LFCXTitlistSale.jpg";
import LfcX6 from "../assets/Popular/RetroShirts.jpg";
import LfcX7 from "../assets/Popular/Bedroom.jpg";
import LfcX8 from "../assets/Popular/ClubCollection.jpg";
import LfcX9 from "../assets/Popular/BabyWear.jpg";
import LfcX10 from "../assets/Popular/Holiday.jpg";

// Kits
import kit1 from "../assets/Kit/1.jpg";
import kit2 from "../assets/Kit/2.jpg";
import kit3 from "../assets/Kit/3.jpg";
import kit4 from "../assets/Kit/4.jpg";
import kit5 from "../assets/Kit/5.jpg";
import kit6 from "../assets/Kit/6.jpg";

// Adults
import a1 from "../assets/Adult/a1.jpg";
import a2 from "../assets/Adult/a2.jpg";
import a3 from "../assets/Adult/a3.jpg";
import a4 from "../assets/Adult/a4.jpg";
import a5 from "../assets/Adult/a5.jpg";
import a6 from "../assets/Adult/a6.jpg";
import a7 from "../assets/Adult/a7.jpg";
import a8 from "../assets/Adult/a8.jpg";
import a9 from "../assets/Adult/a9.png";
import a10 from "../assets/Adult/a10.jpg";
import a11 from "../assets/Adult/a11.jpg";

// Kids
import k1 from "../assets/Kid/k1.jpg";
import k2 from "../assets/Kid/k2.jpg";
import k3 from "../assets/Kid/k3.jpg";
import k4 from "../assets/Kid/k4.jpg";
import k5 from "../assets/Kid/k5.jpg";
import k6 from "../assets/Kid/k6.jpg";
import k7 from "../assets/Kid/k7.jpg";
import k8 from "../assets/Kid/k8.jpg";
import k9 from "../assets/Kid/k9.jpg";
import k10 from "../assets/Kid/k10.jpg";

// Data Arrays
const popularItems = [
  { id: 1, title: "LFC X New Era", image: LfcX1 },
  { id: 2, title: "Champions Range", image: LfcX2 },
  { id: 3, title: "Istanbul Collection", image: LfcX3 },
  { id: 4, title: "Signed Collection", image: LfcX4 },
  { id: 5, title: "Titleist Sale", image: LfcX5 },
  { id: 6, title: "Retro Shirts", image: LfcX6 },
  { id: 7, title: "Bedroom Decor", image: LfcX7 },
  { id: 8, title: "Club Collection", image: LfcX8 },
  { id: 9, title: "Baby Wear", image: LfcX9 },
  { id: 10, title: "Holiday Collection", image: LfcX10 },
];

const kitItems = [
  { id: 1, title: "LFC NIKE Sale", image: kit1 },
  { id: 2, title: "LFC NIKE Sale", image: kit2 },
  { id: 3, title: "LFC NIKE Sale", image: kit3 },
  { id: 4, title: "LFC NIKE Sale", image: kit4 },
  { id: 5, title: "LFC NIKE Sale", image: kit5 },
  { id: 6, title: "LFC NIKE Sale", image: kit6 },
];

const adultItems = [
  { id: 1, title: "Adult Hoodie", image: a1 },
  { id: 2, title: "Adult Jacket", image: a2 },
  { id: 3, title: "Adult Polo", image: a3 },
  { id: 4, title: "Adult Pants", image: a4 },
  { id: 5, title: "Adult Cap", image: a5 },
  { id: 6, title: "Adult Bag", image: a6 },
  { id: 7, title: "Adult Jersey", image: a7 },
  { id: 8, title: "Adult Tracksuit", image: a8 },
  { id: 9, title: "Adult Scarf", image: a9 },
  { id: 10, title: "Adult Gloves", image: a10 },
  { id: 11, title: "Adult Socks", image: a11 },
];

const kidItems = [
  { id: 1, title: "Kids Hoodie", image: k1 },
  { id: 2, title: "Kids Jacket", image: k2 },
  { id: 3, title: "Kids Polo", image: k3 },
  { id: 4, title: "Kids Pants", image: k4 },
  { id: 5, title: "Kids Cap", image: k5 },
  { id: 6, title: "Kids Bag", image: k6 },
  { id: 7, title: "Kids Jersey", image: k7 },
  { id: 8, title: "Kids Tracksuit", image: k8 },
  { id: 9, title: "Kids Scarf", image: k9 },
  { id: 10, title: "Kids Socks", image: k10 },
];

// Carousel Section Component
function CarouselSection({ title, items }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerView);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const getVisibleItems = () => {
    const startIndex = currentSlide * itemsPerView;
    return items.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#384750]">{title}</h2>
        <div className="hidden sm:flex gap-2">
          {currentSlide > 0 && (
            <button onClick={prevSlide} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          {currentSlide < totalSlides - 1 && (
            <button onClick={nextSlide} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>

      <div className={`grid gap-6 ${itemsPerView === 1 ? "grid-cols-1" : itemsPerView === 2 ? "grid-cols-2" : itemsPerView === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
        {getVisibleItems().map((item) => (
          <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-black px-4 py-1 rounded-full font-medium text-sm hover:bg-gray-100 flex items-center gap-1">
                  <ShoppingBag className="w-4 h-4" />
                  Quick Shop
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#384750] group-hover:text-[#E31B23] transition">
                {item.title}
              </h3>
              <div className="text-[#E31B23] text-sm mt-1 group-hover:block hidden">
                {item.id % 2 === 0 ? "Shop Now" : "Shop All"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Grid Section
function Grid() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-screen-2xl mx-auto px-4 py-10">
      <div className="flex flex-col">
        <img src={Homeware} alt="Homeware" className="w-full h-full object-cover" />
        <p className="text-left text-2xl mt-2 font-medium">Homeware</p>
      </div>
      <div className="flex flex-col">
        <img src={Toy} alt="Toys and Games" className="w-full h-full object-cover" />
        <p className="text-left text-2xl mt-2 font-medium">Toys and Games</p>
      </div>
    </div>
  );
}

// Gift Section Tabs
function GiftSection() {
  const [selected, setSelected] = useState("adults");

  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto items-center px-4 py-12">
      <h1 className="text-center text-3xl font-semibold text-slate-700 mb-6">
        🎁 Gifts for Every Red
      </h1>

      <div className="grid grid-cols-2 w-full border-b-2 border-gray-300 mb-6">
        <button
          onClick={() => setSelected("adults")}
          className={`text-center py-4 text-lg font-medium transition-colors ${
            selected === "adults"
              ? "text-red-700 border-b-4 border-red-500"
              : "text-slate-600 hover:text-red-500"
          }`}
        >
          Gifts for Adults
        </button>
        <button
          onClick={() => setSelected("kids")}
          className={`text-center py-4 text-lg font-medium transition-colors ${
            selected === "kids"
              ? "text-red-700 border-b-4 border-red-500"
              : "text-slate-600 hover:text-red-500"
          }`}
        >
          Gifts for Kids
        </button>
      </div>

      <div className="w-full">
        {selected === "adults" && <CarouselSection title="Gifts for Adults" items={adultItems} />}
        {selected === "kids" && <CarouselSection title="Gifts for Kids" items={kidItems} />}
      </div>

      <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all text-sm font-semibold">
        SHOP ALL
      </button>
    </div>
  );
}

// Main Export
export default function Carousel() {
  return (
    <>
      <CarouselSection title="Popular Collections" items={popularItems} />
      <CarouselSection title="LFC KNIT KIT" items={kitItems} />
      <Grid />
      <GiftSection />
    </>
  );
}
