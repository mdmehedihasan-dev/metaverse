// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MetaverseSection = () => {
  return (
    <section className=" bg-[#dceee1] py-16 bg-mint-100">
      <div className="max-w-[1280px] mx-auto pt-40 ">
        <div className="flex justify-center">
          <h1 className=" mb-16 max-w-[605px] text-center text-5xl font-semibold text-gray-800">
            Metaverse, Meet Your Social World
          </h1>
        </div>

        <div className="flex items-center justify-between gap-x-5">

          <div
            style={{
              backgroundImage: "url('/6.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="w-[626px] h-[489px]  pt-14 pl-12 pb-36 pr-14"
          >
            <div className="flex justify-between ">
              <div>
                <p className="text-4xl font-bold w-[219px] text-[#DCEEE2]">
                  Virtual World Creation
                </p>
                <div className="w-[355px] mt-[63px] p-4 border-green-500 bg-[rgba(19,84,38,0.43)] rounded-3xl">
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, #318E4D 0%, #135426 100%)",
                      boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
                    }}
                    className="p-4 rounded-3xl"
                  >
                    <p className="text-xl font-normal text-white">
                      Empower users to create and customize their metaverse.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img src="/life.png" alt="" />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: "url('/7.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="w-[622px] h-[489px] rounded-3xl overflow-hidden  pt-[70px]  pr-[45px] pb-[46px]"
          >
           <div>

         

            <div className="flex justify-end ">

           <div >
              <p className="text-4xl font-bold w-[219px] text-[#DCEEE2]">
                Virtual World Creation
              </p>
              <p className="text-xl w-[235px] mt-8 text-[#DCEEE2]">
                Provide tools for virtual concerts, conferences, and workshops.
              </p>

              <Button
                className="px-6 py-[20px] mt-10 border-t-2 border-white  font-bold text-white rounded-xl hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, #318E4D 0%, #135426 100%)",
                  boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                Get Started
              </Button>
            </div>



           </div>

           <div className="ml-10 ">
              <img className="w-[65px] " src="./text.png" alt="" />
            </div>


           </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MetaverseSection;
