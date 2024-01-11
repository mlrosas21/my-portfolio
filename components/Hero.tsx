import Image from "next/image";
import React from "react";
import pic from "@/public/pic.jpg";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex text-center justify-center">
        <figure className="m-auto rounded-full overflow-hidden shadow">
          <Image src={pic} alt="Personal picture" quality={100} width={250} />
        </figure>
        <div>
          <h1 className="text-3xl mt-4">
            Hey, I'm <span className="font-bold">Martín!</span>
          </h1>
          <p className="mt-2">
            I'm a software engineer based in 📍 Buenos Aires, Argentina.
            Striving to develop software that makes a positive impact on
            people's lives
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
