import { Button } from "@/components/ui/button";
import InfiniteCard from "./InfiniteCard";
import HeroTimer from "./HeroTimer";
import { FaArrowRightLong } from "react-icons/fa6";
import ConnectCard from "./ConnectCard";
import GlobalCard from "./GlobalCard";

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: "url('/mainbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
      className="min-h-screen "
    >
      <div className=" max-w-[1272px] relative py-40 mx-auto px-8 text-white  ">
        <div className="absolute right-[260px] top-[235px]">
          <img src="/5.png" alt="" />
        </div>
        <div className="flex justify-between">
          <div>

          <div>
            {/* Heading*/}
            <h1 className="flex flex-col items-center justify-center gap-4 mb-6 text-6xl">
              <div><p className="text-7xl">Explore</p></div>
              <div className="flex items-center">
                <div className="w-[172px] ">
                  <InfiniteCard />
                </div>
                <div><p className="text-7xl">Infinite</p></div>
              </div>
              <div> <p className="text-7xl">Metaverse</p></div>
            </h1>
            {/* Get Started Button */}
            <Button
              className="px-6 ml-16 py-[20px] mt-10 border-t-2 border-white  font-bold text-white rounded-xl hover:opacity-90"
              style={{
                background: "linear-gradient(180deg, #318E4D 0%, #135426 100%)",
                boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              Get Started
            </Button>
            <div className="flex items-center mt-40 gap-x-14">
              <HeroTimer number="250m+" text="User" />
              <HeroTimer number="12y" text="Experience" />
              <HeroTimer number="98m+" text="Asset" />
              <div>
                <FaArrowRightLong color="#fff" />
              </div>
            </div>
          </div>


          </div>

          {/* card   */}
          <div className="mt-28">
            <ConnectCard />
          </div>
          <div className="flex items-center mt-40 gap-x-8">
            <div>
              <img src="/1.png" className="w-11 "/>
              <img src="/3.png" className="mt-1 w-11 "/>
            </div>
            <GlobalCard />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-180px]">
      <div className="relative">
        <img src="/Subtract2.png" className="w-[828px] absolute right-4 top-5"/>
        <img src="/Subtract.png"  />
      </div>
      </div>
    </div>
  );
}
