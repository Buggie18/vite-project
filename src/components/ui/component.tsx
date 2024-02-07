import React from 'react';
import CommunityImpact from "./CommunityImpact.tsx";
// import CommunityImpact from "../../CommunityImpact";


const FrameComponent1: React.FC = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-steelblue font-poppins">
      <div className="self-stretch bg-white flex flex-col items-center justify-start pt-8 pb-16 pr-4 pl-80 box-border gap-12 max-w-full sm:pl-5 md:gap-12 md:pr-26 md:pl-56">
        <div className="flex flex-row items-start justify-start max-w-full">
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="flex flex-row items-start justify-end pb-6 pl-6">
              <div className="flex flex-row items-start justify-start relative">
                <div className="absolute bottom-0 left-0 h-14 w-28 bg-lightcyan" />
                <h1 className="m-0 h-14 relative text-5xl">KEY</h1>
              </div>
            </div>
            <div className="relative min-w-[209px] h-20 bg-lightcyan ml-[-13px]">
              <div className="absolute top-0 left-0 h-14 w-64 bg-steelblue" />
              <h1 className="m-0 absolute top-0 left-7 w-64 text-5xl">FEATURES</h1>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-14 text-center text-xl text-white md:gap-14 md:flex-wrap">
          <div className="flex flex-col items-start justify-start relative min-w-[390px] md:min-w-full">
            <img className="h-80 w-full object-cover" loading="eager" alt="" src="/image-1@2x.png" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-row items-start justify-between gap-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start">
                  <div className="absolute top-0 left-0 h-14 w-48 bg-steelblue" />
                  <h1 className="m-0 h-14 relative">3 STAGE FILTRATION</h1>
                </div>
                <div className="relative text-sm text-left">
                  <p className="m-0">Utilizes HEPA, Pre-Filter and UV light Filter technology for superior air purification.</p>
                </div>
              </div>
              <CommunityImpact tRAPSSMALLPARTICLES="TRAPS SMALL PARTICLES" effectivelyCapturesPartic="Effectively captures particles as small as 0.3 microns for cleaner air." />
            </div>
            <div className="absolute top-80 left-0 h-24 w-80 bg-steelblue hidden" />
            <b className="absolute top-80 left-0 z-10 text-sm">EXTENDED FILTER LIFESPAN</b>
            <div className="absolute top-80 left-0 h-20 w-56 bg-steelblue flex items-start justify-start py-0 px-1.5 text-sm">
              <div className="relative z-10">Pre-filtration system prolongs the efficiency of the main HEPA filter.</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-14">
            <div className="bg-lightcyan flex flex-col items-start justify-start pt-4 pb-10 pr-3.5 pl-7 gap-2">
              <div className="absolute top-0 left-0 h-14 w-48 bg-lightcyan hidden" />
              <b className="relative z-10">INNOVATIVE DESIGN</b>
              <div className="flex flex-row items-start justify-start py-0 pl-7 text-sm">
                <div className="relative">VAAYU is a compact and stylish air purifier suitable for any space.</div>
              </div>
            </div>
            <div className="bg-steelblue flex flex-row items-center justify-center py-5 px-4 text-sm text-white">
              <div className="h-14 w-80 bg-steelblue hidden" />
              <div className="flex-1 relative whitespace-pre-wrap">Unemployed women in the Bharat Vihar community are involved in manufacturing and supply.</div>
            </div>
            <CommunityImpact tRAPSSMALLPARTICLES="POSITIVE IMPACT" effectivelyCapturesPartic="Improving the lives of underprivileged families by providing clean and fresh air." propGap="17px" propWidth="188px" propHeight="15px" propHeight1="63px" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <b className="relative">COMMUNITY EMPOWERMENT</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 pb-72 gap-16 max-w-full text-center text-white md:pb-36 md:gap-16">
        <div className="bg-gradient-to-b from-lightblue to-steelblue flex flex-row items-start justify-end py-0 px-20 max-w-full">
          <h1 className="m-0 h-16 w-full text-7xl relative">EXPLORE OUR PRODUCT</h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-8 md:flex-wrap md:justify-center">
          <img className="h-80 w-80 object-contain" loading="eager" alt="" src="/image-7@2x.png" />
          <img className="h-80 w-80 object-contain" loading="eager" alt="" src="/image-8@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
