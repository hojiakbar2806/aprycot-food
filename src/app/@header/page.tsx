import { BellRing, Mail, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Headsr() {
  return (
    <header>
      <label
        htmlFor="search"
        className="group focus-within:border-blue-500 flex items-center gap-2 w-80 border border-gray-300 p-2 rounded-full transition"
      >
        <Search className="text-gray-400 transition group-focus-within:text-blue-500"/>
        <input
          id="search"
          type="text"
          className="peer flex-1 text-lg border-none bg-inherit outline-none"
        />
      </label>

      <div className="flex gap-4">
        <button>
          <BellRing className="text-gray-400" />
        </button>
        <button>
          <Mail className="text-gray-400" />
        </button>
        <button>
          <ShoppingCart className="text-gray-400" />
        </button>
        <div className="flex gap-4">
          <Image
            className="rounded-full"
            src="icons/profile.svg"
            width={50}
            height={50}
            alt="user"
          />
          <div>
            <p className="font-semibold">Austin Robertson</p>
            <p className="text-gray-400">Marketing Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
