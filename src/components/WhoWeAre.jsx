import React from "react";

const WhoWeAre = () => {
  return (
    <>
      {/* Background Image Section with Text Overlay */}
      <div className="relative rounded-2xl overflow-hidden h-screen" id="about">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition duration-1000"
          // style={{
          //   backgroundImage: "url('/vrImage2.png')",
          // }}
        >


        <video
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/training.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        {/* Overlay with Top-Aligned Text */}
        <div className="relative z-10 h-full bg-black/50 flex flex-col items-start pt-16 px-6 lg:px-24">
          <h1 className="w-1/2 my-6 text-lg lg:text-2xl font-medium tracking-tight text-white fontArial text-left mt-40">
          At DXT, we believe in doing things right — we focus on people as much as we focus on
          platforms, and we believe the right culture, mindset, and values are just as important as the
          technology itself.
          With over 40 years of combined experience, our team is driven by a shared goal: to bring
          meaningful change to the IT landscape. We're a team that values ethical choices, a
          collaborative culture, and partnerships that go beyond tran.
          </h1>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
