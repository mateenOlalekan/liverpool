import image01 from "../assets/CollectionImg/01.png";
import image02 from "../assets/CollectionImg/02.png";
import image03 from "../assets/CollectionImg/03.png";
import image04 from "../assets/CollectionImg/04.png";
import image05 from "../assets/CollectionImg/05.png";

const products = [
  {
    id: 1,
    title: "LFC Premier League Framed Goal Net",
    image: image05,
    price: "$250",
  },
  {
    id: 2,
    title: "LFC Premier League Framed Goal Net Piece",
    image: image04,
    price: "$75",
  },
  {
    id: 3,
    title: "LFC Premier League Trophy Lift 8 x 6 Glass Image",
    image: image03,
    price: "$30",
  },
  {
    id: 4,
    title: "LFC Premier League TrophyLift 12 x 16 Montage",
    image: image02,
    price: "$55",
  },
  {
    id: 5,
    title: "LFC Premier League Trophy Lift Desktop Panoramic Image",
    image: image01,
    price: "$35",
  },
];

const championLinks = [
  "CHAMPIONS FRAMES",
  "CHAMPIONS FASHION",
  "CHAMPIONS SOUVENIRS",
];

function Collection() {
  return (
    <div className="w-full bg-[#f9f9f9] py-12 px-6 sm:px-10 flex flex-col items-center">
      {/* Header Section */}
      <section className="w-full max-w-screen-xl text-center mb-4">
        <h1 className="text-3xl md:text-4xl text-[#384750] font-bold">
          CHAMPIONS COLLECTION
        </h1>

        <div className="mt-4 grid grid-cols-3 border-b-[4px] border-[#384750] text-sm md:text-base text-[#384750] font-medium">
          {championLinks.map((link) => (
            <div
              key={link}
              className="px-4 py-2 cursor-pointer hover:text-[#179882] hover:border-b-[4px] hover:border-[#179882] transition"
            >
              {link}
            </div>
          ))}
        </div>

        <div className="mt-6 inline-block border-[2px] border-[#DCDCDC] px-6 py-2 text-lg font-medium cursor-pointer hover:bg-[#eee] transition">
          SHOP ALL
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-screen-xl">
        <h2 className="text-2xl font-bold mb-6 text-[#384750] text-left">
         Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white  transition"
            >
              <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-md font-semibold text-[#384750] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#179882] font-medium text-sm">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Collection;
