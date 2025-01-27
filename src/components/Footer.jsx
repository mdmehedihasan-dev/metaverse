import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 text-green-400 bg-black">
      <div className="max-w-[1272px] mx-auto flex justify-between ">
        {/* Left Section */}
        <div>
         
        
         <div className="flex items-center space-x-1">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="bg-green-900 rounded-full outline-none "
            />
             <Button
              className="px-6 py-[20px]    font-bold text-white rounded-full hover:opacity-90"
              style={{
                background: "linear-gradient(180deg, #318E4D 0%, #135426 100%)",
              
              }}
            >
              Contact us
            </Button>
          </div>
          <img src="/logo.png" className="w-[151px] mt-[409px]" />
        


        </div>

        {/* Middle Section */}
        <div>
        <div className="flex space-x-[41px]">
          <a href="#" className="text-white hover:text-green-300">
            About
          </a>
          <a href="#" className="text-white hover:text-green-300">
            Service
          </a>
          <a href="#" className="text-white hover:text-green-300">
            Tools
          </a>
          <a href="#" className="text-white hover:text-green-300">
            Contacts
          </a>
        </div>

        <div className="mt-48 mb-14">
            <h2 className="font-semibold text-white">Contact Us</h2>
            <p className="text-white">+1 (999) 888-77-66</p>
            <p className="text-white">hello@niskalastd.com</p>
          </div>

          <div>
            <h2 className="font-semibold text-white">Location</h2>
            <p className="text-white">
              483920, Indonesia, Lampung 22/2/5, Office 4
            </p>
          </div>
        </div>

       

        {/* Right Section */}
        <div className="flex flex-col justify-end">
         
          
          <div>
            <h2 className="font-semibold text-white">Languages</h2>
            <p className="text-white"> <span className="text-green-500">En</span> Es Fr De Ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
