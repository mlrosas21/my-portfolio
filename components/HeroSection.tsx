import Image from "next/image";
import React from "react";
import pic from "@/public/pic.jpg";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row text-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 pt-24">
        <figure className="m-auto rounded-full overflow-hidden shadow">
          <Image src={pic} alt="Personal picture" quality={100} width={250} />
        </figure>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl mt-6">
            Hey, I'm <span className="font-bold text-orange-600">Martín</span>!
          </h1>
          <p className="mt-4 text-xl">
            I'm a software engineer based in
            <span className="text-orange-600">📍 Buenos Aires, Argentina</span>.
            Striving to develop software that has a positive impact on people's
            lives!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
