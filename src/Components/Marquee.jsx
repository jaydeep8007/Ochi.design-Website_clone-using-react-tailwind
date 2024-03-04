import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="h-[34vw] -m-[1px] relative  w-full flex items-center bg-[#004D43] rounded-t-2xl"
    >
      <div className="h-[19vw] w-full flex flex-row  overflow-hidden whitespace-nowrap border-t border-b border-white">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[25vw] font-semibold font-['Founders_Grotesk'] -mt-[4.7vw] pr-[3vw]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[25vw] font-semibold font-['Founders_Grotesk'] -mt-[4.7vw] "
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] font-semibold font-['Founders_Grotesk'] -mt-[4.7vw] "
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
