import Image from "next/image";
import React from "react";

const AdsSection: React.FC = () => {
  return (
    <section className="flex h-[430] gap-10 p-10">
      <div className="w-[65%] flex flex-col gap-8 items-start p-[4%] rounded-3xl h-full border relative bg-[url('/images/full-menu.png')] bg-no-repeat bg-cover">
        <h3 className="text text-sm text-primary">👑 Deal of the weekend</h3>
        <h1 className="font-playfair text-5xl font-bold">
          Hello, Austine Robertson
        </h1>
        <p className="text-base text-gray-600">
          Get <span className="text-primary font-semibold">FREE delivery</span>{" "}
          on every weekend.
        </p>
        <button className="py-3 px-6 rounded-full text-white bg-[#EA6A12]">
          Check Menu
        </button>
      </div>

      <div className="w-[35%] flex justify-center items-end">
        <div className="border w-full p-6 flex flex-col gap-2 rounded-3xl items-center justify-end backdrop:blur-md bg-white/4 shadow-md">
          <Image
            src="/images/burger.png"
            className="w-60 scale-[1.4] -translate-y-20"
            alt="Menu"
            width={320}
            height={250}
          />
          <h1 className="text-5xl font-bold font-playfair">50 % off </h1>
          <p className="text-[#959895] text-base">The full price of burgers</p>
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
