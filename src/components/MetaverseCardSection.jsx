import { Card, CardContent } from "@/components/ui/card";

export default function MetaverseCardSection() {
    const features = [
        {
            id: "01",
            category: "Metaverse",
            title: "Immersive Experiences",
            link: "#",
          },
      {
        id: "02",
        category: "Metaverse",
        title: "Innovative Technology",
        link: "#",
      },
      {
        id: "03",
        category: "Powered",
        title: "Global Connectivity",
        link: "#",
      },
      {
        id: "04",
        category: "Social hubs",
        title: "Global Connectivity",
        link: "#",
      },
    ];

  return (
    <section className="py-20  bg-[#dceee1]">
      <div className="max-w-[1272px] mx-auto">
       <div className="flex justify-between">
       <div>
          <h3 className="text-xl font-semibold text-green-700">
            WHY CHOOSE US
          </h3>
          <h2 className="mt-2 w-[500px] text-4xl font-semibold">
            Accessible Metaverse, Anytime,{" "}
            <span className="text-green-700">Anywhere</span>
          </h2>
        </div>
        <div>
          <p className="max-w-md mt-4 text-xl font-semibold">
            Monetize Your Virtual Dreams
          </p>
          <p className="max-w-[360px] mt-4 text-xl font-light">
            A platform designed for all devices, delivering seamless access and
            optimized performance to keep you connected to your digital
            universe.
          </p>
        </div>
       </div>
      </div>

      <div className="flex justify-center mt-40 gap-x-4">
        {features.map((feature) => (
          <Card key={feature.id} className="shadow-lg w-[408px] rounded-2xl bg-gradient-to-b from-gray-300 to-black">
            <CardContent className="p-6 text-white">
              <div className="mb-[127px] flex justify-between">
              <span className="text-white">{feature.id}/</span>
              <img src="/tc.png" alt="" />
              </div>
              <p className="text-sm font-bold text-white uppercase">{feature.category}</p>
              <h3 className="mt-4 text-4xl font-bold">{feature.title}</h3>
              <a href={feature.link} className="flex items-center mt-10 font-medium text-white underline gap-x-3">
                Explore more <img src="/cta.png" className="w-[27px]" alt="" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
