import mainImg from "../assets/img/mainbg.png";

const saleTags = ["LFC NIKE SALE", "FASHION SALE", "CAPS SALE", "SOUVENIRS SALE"];


function Main() {
  return (
    <div className="w-full flex flex-col items-center mt-32">
      
      {/* Banner Image */}
      <img
        src={mainImg}
        alt="Main background"
        className="w-full object-cover"
      />

      {/* Sale Tags */}
      <div className="w-full flex justify-center mt-4">
        <div className="flex flex-wrap gap-3">
          {saleTags.map((tag) => (
            <div
              key={tag}
              className="bg-[#DC0714] text-white px-6 py-2 font-medium text-sm rounded hover:bg-[#b30510] transition"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Main;
