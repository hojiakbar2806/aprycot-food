import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src="/images/not-found.png" alt="404" width={1528} height={514} />
      <Link href="/" className="bg-primary text-white py-3 px-6 rounded-full">
        Back Home
      </Link>
    </div>
  );
}
