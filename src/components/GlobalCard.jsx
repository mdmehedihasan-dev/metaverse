import { Card, CardContent } from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";

const GlobalCard = () => {
  return (
    <div>
      <div className="w-[219px]">
        <Card
          className="border-2 border-green-500 bg-[#135426] rounded-xl"
          style={{
            backgroundImage: "url('/btnbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <CardContent>
            <div className="relative pt-5">
              <p className="font-bold text-white">Global</p>
              <p className="font-bold text-white">Connectivity</p>
              <div className="absolute top-[5px] right-[-15px]">
                 <FaArrowRightLong color="#fff" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalCard;
