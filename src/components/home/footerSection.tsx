import Image from "next/image";
import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer
      className="w-full flex justify-between p-4 relative
      bg-white"
    >
      <div className="flex items-center gap-4">
        <h1>Privacy Policy</h1>
        <h1>Terms of Use</h1>
      </div>

      <div>
        <p className="text-sm text-gray-400">
          © 2021 Aprycot, Made with ❤ by{" "}
          <span className="text-primary">IQONIC Design.</span>
        </p>
      </div>

      <Image
        src="/palm-burger.png"
        alt="logo"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 z-[-1]"
      />
    </footer>
  );
};

export default FooterSection;
