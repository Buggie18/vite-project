import React, { useMemo } from "react";

interface CommunityImpactProps {
  tRAPSSMALLPARTICLES: string;
  effectivelyCapturesPartic: string;
  propGap?: string;
  propWidth?: string;
  propHeight?: string;
  propHeight1?: string;
}

const CommunityImpact: React.FC<CommunityImpactProps> = ({
  tRAPSSMALLPARTICLES,
  effectivelyCapturesPartic,
  propGap,
  propWidth,
  propHeight,
  propHeight1,
}) => {
  const communityImpactStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const tRAPSSMALLPARTICLESStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const effectivelyCapturesParticlesStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className="self-stretch bg-lightcyan flex flex-col items-start justify-start pt-[11px] pb-[18px] pr-8 pl-[17px] gap-[26px] text-center text-xl text-black font-poppins"
      style={communityImpactStyle}
    >
      <div className="w-80 h-[110px] relative bg-lightcyan hidden" />
      <b
        className="w-[255px] relative inline-block z-[2] mq450:text-base"
        style={tRAPSSMALLPARTICLESStyle}
      >
        {tRAPSSMALLPARTICLES}
      </b>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] text-left text-sm">
        <div
          className="h-[42px] flex-1 relative inline-block z-[2]"
          style={effectivelyCapturesParticlesStyle}
        >
          {effectivelyCapturesPartic}
        </div>
      </div>
    </div>
  );
};

export default CommunityImpact;
