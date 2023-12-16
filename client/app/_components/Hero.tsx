import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center justify-center w-2/3 mt-14">
        <h1 className="text-white text-6xl font-bold text-center">
          Lightning Fast And Secure
        </h1>
        <h1 className="text-white text-6xl font-bold text-center">
          Crypto <span className="grad">Payments</span>
        </h1>
        <Button className="mt-8 h-16 px-14 rounded-xl hover:bg-black hover:text-white border-2 border-white bg-white text-black text-lg">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
