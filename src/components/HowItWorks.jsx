import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <div className="bg-[#dceee1] min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl ">
        <h2 className="mb-12 text-6xl font-semibold text-black">
          How it&apos;s <span className="text-green-600">works?</span>
        </h2>

        <div className="flex items-end gap-x-10">
          {/* Step 01 */}
          <div
            style={{
              backgroundImage: "url('/work1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
            className="min-w-[732px] pl-5 py-8  text-white shadow-lg rounded-2xl "
          >
            <div className="text-left ">
              <div className="bg-[#DCEEE2] rounded-full w-[86px] px-4 py-2">
                <p className="font-semibold text-black">Step 01</p>
              </div>
              <p className="text-[40px] mt-8 w-[240px]">
                Sign Up & Create Your Avatar
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div
            style={{
              backgroundImage: "url('/work2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
            className="min-w-[430px] mb-[5px] h-[230px] px-1 py-10 text-white shadow-lg rounded-2xl md:w-2/3"
          >
            <div className="ml-[200px]">
              <div >
                <p className="pr-5 text-xl ">
                  Create a personalized account and design your avatar for the
                  metaverse.
                </p>
                <div>
                  <Button
                    className="px-6 py-[20px] mt-5 border-t-2 border-white  font-bold text-white rounded-xl hover:opacity-90"
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
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          {/* Step 02 */}
          <div className="mt-12 text-start">
            <h3 className="text-lg text-green-600 bold">Step 02</h3>
            <p className="mt-2 text-2xl text-black w-[312px]">
              Explore immersive worlds and vibrant hubs.
            </p>
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-8">
            <Button className="flex items-center gap-2 px-2 py-2 text-white bg-transparent border-2 border-green-600 rounded-full shadow-md">
              <p className="px-3 py-1 bg-green-600 rounded-full ">Next </p>
              <span className="ml-2 text-green-600">→</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
