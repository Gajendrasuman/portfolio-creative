"use client";
import Image from "next/image";
import imgLoader from "@/lib/imgLoader";
import DotBox from "@/components/ui/dot-box";

export default function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-4rem)]">
      <div className="container mx-auto mt-32 flex">
        <div className="w-full flex flex-col gap-4 max-w-[540px] mt-5">
          <h1 className="text-3xl text-white font-semibold">
            Gajender is a <span className="text-primary">web designer</span> and{" "}
            <span className="text-primary">full-stack developer</span>
          </h1>
          <p className="text-text mt-4">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="mt-2 border border-primary px-4 py-2 w-fit text-white">
            Contact me !!
          </button>
        </div>

        <div className="relative w-full">
          <Image
            src="/images/logo.svg"
            alt="Hero"
            width={155}
            height={155}
            className="absolute top-6 left-[22%]"
            unselectable="on"
            loader={imgLoader}
          />
          <Image
            loader={imgLoader}
            src="/images/Image.png"
            alt="Hero"
            width={469}
            height={386}
            className="absolute -top-16 right-0"
            unselectable="on"
          />
          <div className="absolute -bottom-6/11 right-[37] border border-text w-[415] h-9 flex items-center gap-2">
            <div className="size-4 bg-primary ml-2"></div>
            <p className="text-text">
              Currently working on <span className="text-white">Portfolio</span>
            </p>
          </div>
          <DotBox className="absolute -bottom-1/5 right-2" />
        </div>
      </div>

      <div className="relative border border-text p-6 mt-64 mx-auto w-fit">
        <p className="text-2xl text-white">
          With great power comes great electricity bill
        </p>
        <div className="absolute w-fit h-fit p-2  px-4 -right-[1px] top-full border border-text">
          <p className="text-white text-2xl">- Dr. Who</p>
        </div>
        <div className="absolute w-fit h-fit left-4 -top-4 bg-background p-2 rounded-full">
          <Image src="/images/quote.svg" alt="quote" width={20} height={20} />
        </div>
        <div className="absolute w-fit h-fit right-4 -bottom-4 bg-background p-2 rounded-full">
          <Image src="/images/quote.svg" alt="quote" width={20} height={20} />
        </div>
      </div>
    </section>
  );
}
