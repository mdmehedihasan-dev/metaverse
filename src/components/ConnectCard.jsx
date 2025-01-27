import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ConnectCard = () => {
  return (
    <div>

         <div className="w-[167px] text-center border-2 border-green-500 bg-[#318E4D] rounded-lg px-2 pt-2">
                    <Card
                      className="text-center bg-green-800 border-2 border-green-500 rounded-xl"
                      style={{
                        background: "linear-gradient(180deg, #318E4D 0%, #135426 100%)",
                      }}
                    >
                    <div className="px-4 pt-5">
                    <CardContent>
                        <div className="flex flex-col items-center justify-center gap-y-2">
                          <p className="font-bold text-white">Connect</p>
                          <div className="w-[56px] h-[1px] bg-[#135426]"></div>
                          <p className="text-white ">Collaborate</p>
                        </div>
                      </CardContent>
                    </div>
                    </Card>
                    <div className="flex items-center justify-center gap-x-10">
                      <Button variant="link" className="text-green-300">
                        View
                      </Button>
                      <img className="w-3 h-3" src="/Vector.png" alt="" />
                    </div>
                  </div>
    </div>
  )
}

export default ConnectCard