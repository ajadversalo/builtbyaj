import React from 'react';  

const Hero: React.FC = () => {
    return ( 
      <div className="relative w-fit mx-auto leading-none">                                   
          <div className="relative flex flex-col items-start">
              <img
                  src="./images/dashboard/phonelaptop.png"
                  alt="phone-laptop"
                  className="absolute sm:left-20 md:left-40 lg:left-80 top-[-7rem] h-[200px] sm:h-[300px] object-contain z-0"
              />
              <div
                  className="
                    font-bold 
                    text-[clamp(3rem,12vw,190px)] 
                    leading-[1] tracking-[-0.02em]
                    text-transparent bg-clip-text 
                    bg-gradient-to-b from-white to-gray-400
                    opacity-90
                    drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]
                    blur-[0.3px]
                    select-none
                    relative z-10
                  "
              >
                  {`AJ`}
              </div>

              <div
                  className="
                    -mt-[0.15em]
                    font-bold 
                    text-[clamp(3rem,12vw,170px)]
                    leading-[1] tracking-[-0.02em]
                    text-white
                    drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]
                    relative z-10
                  "
              >
                  {`Adversalo`}
              </div>
            </div>
          <div className="flex flex-row justify-between">
              <div className="mt-2 text-[#ECEFF1] text-xl tracking-tight font-bold" >
                    Turning ideas into reliable solutions.
            </div>           
            </div>
      </div>                                                                                                               
    );
};

export default Hero;
