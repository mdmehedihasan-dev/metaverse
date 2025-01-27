
const LearnMetaverseSection = () => {
  return (
    <section className="relative bg-[#dceee1]  flex flex-col items-center justify-center py-16 bg-mint-100">

    {/* ============= div================= */}  
      <div className="w-[343px] absolute top-10 left-[-100px] h-[318px] bg-[#C4C4C4] rounded-[30px]"></div>
      <div className="w-[143px] absolute bottom-[-20px] left-[-50px] z-10 h-[118px] bg-[#C4C4C4]  rounded-[30px]"></div>


      <div className="w-[120px] absolute top-[20px] right-0 z-10 h-[120px] bg-[#C4C4C4]  rounded-[30px] "></div>

      <div className="w-[200px] absolute bottom-[-20px] right-0 z-10 h-[200px] bg-[#C4C4C4]  rounded-tl-[30px] rounded-bl-[30px]"></div>

{/* ============= div================= */}

      <h5 className="w-[600px] mb-[80px] text-6xl text-center font-semibold text-gray-800">
        Learn and Grow in the <span className="text-green-500">Metaverse</span>
      </h5>
      <div className="max-w-[1272px] mx-auto  px-4 md:px-16">
        <div className="relative w-[920px] p-6 bg-[#C4C4C4] border border-gray-300 rounded-2xl">
          {/* Placeholder for Main Content */}
          <div className="flex items-center justify-between">
            <img src="/text2.png" className="w-10" alt="" />
            <img src="/Fram.png" className="w-[170px] h-[102px]" />
          </div>

          {/* Tags Section */}
          <div className="mt-[278px] ">
            <div className="flex flex-wrap px-3 py-2 mt-4 bg-[#DCEEE2] bg-opacity-35 rounded-full ">
              {[
                "Monetize",
                "Virtual Reality",
                "Game",
                "Learn",
                "Create",
                "Blockchain",
                "Metaverse",
                "Worlds",
                "Vision",
                "Thrive",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm text-[#04170A] font-semibold bg-[#DCEEE2] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMetaverseSection;
