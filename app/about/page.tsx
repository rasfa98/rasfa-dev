import Socials from "@/components/socials";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `I'm a passionate developer with an eye for detail that loves quality
  code and a good looking UI. In my free time I like to go out for a run
  or go to the gym and lift some weights. I started this blog in order
  to share my knowledge when it comes to web development but also to
  improve my own skills along the way. I hope that you will find this
  blog interesting and that it will inspire you!`,
};

export default function Page() {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-bold">About</h1>

      <div className="my-10 flex flex-col items-center gap-10 justify-between md:flex-row md:items-start">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/avatar.png"
            width="200"
            height="200"
            alt="Picture of the author Rasmus Falk"
            className="rounded-full"
          />
          <h3 className="text-2xl font-bold mt-2">Rasmus Falk</h3>
          <p className="mb-2">
            A passionate developer building amazing products
          </p>
          <Socials />
        </div>

        <p className="max-w-md">
          I am a passionate developer with an eye for detail that loves quality
          code and a good looking UI. In my free time I like to go out for a run
          or go to the gym and lift some weights. I started this blog in order
          to share my knowledge when it comes to web development but also to
          improve my own skills along the way. I hope that you will find this
          blog interesting and that it will inspire you!
        </p>
      </div>
    </>
  );
}
