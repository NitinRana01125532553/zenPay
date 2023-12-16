import { Button } from "@/components/ui/button";

const Join = () => {
  return (
    <div className="mt-10 bg-[#080202] p-20">
      <div className="flex flex-col gap-14 items-center jusitfy-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="font-bold font-sans text-white text-6xl">
            Start accepting payments in
          </h1>
          <h1 className="font-bold font-sans text-white text-6xl">
            <span className="grad2">crypto</span> right now
          </h1>
        </div>
        <Button className="bg-white p-8 text-black text-2xl hover:bg-black hover:text-white border-2 border-white rounded-xl">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Join;
