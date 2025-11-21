"use client";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import imgLoader from "@/lib/imgLoader";
import DotBox from "@/components/ui/dot-box";

export default function About() {
  return (
    <section id="about" className="mt-24">
      <Heading title="about-me" />
      <div className="flex flex-col md:flex-row justify-between">

        <div className="text-text md:w-1/2 mt-8 flex flex-col gap-6 pr-4">
          <h1>Hello, i&apos;m Gajender!</h1>
          <p>
            I&apos;m a self-taught full-stack developer based in Gwaior, India.
            I can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences.{" "}
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over 5 years. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>

          <button className="w-fit border border-primary px-6 py-2 group text-white font-medium">Read More <span className="group-hover:text-primary transition-colors">~~&gt;</span></button>
        </div>

        <div className="h-fit max-sm:w-fit mx-auto relative">
            <Image
            src="/images/image-2.png"
            alt="gajender"
            width={300}
            height={300}
            loader={imgLoader}
            className="border-b border-primary"
            />
            <DotBox color="#ABB2BF" className="absolute top-1/8 -left-8 float-horizontal" />
            <DotBox v_count={4} ygap={6} color="#ABB2BF" className="absolute top-4/7 right-0 float-horizontal" />
        </div>
      </div>
    </section>
  );
}
