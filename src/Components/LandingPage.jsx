import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <>
      <div
        // THIS PART IS FROM LOCOMOTIVE TO CONTROL SLIDING SPEED
        data-scroll
        data-scroll-speed="-.2"
        // ................
        className="w-full h-[50vh] sm:h-screen text-black bg-white"
      >
        <div className="leftTextArea  pt-[15vh] sm:pt-[22vh] pl-[3vw] ">
          <div className="maskers  font-bold">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
              (items, index) => {
                return (
                  <div key={index} className="flex items-center gap-[2vw]">
                    {index === 1 && (
                      // FOR APPLY MOTION MAKE DIV TO MOTION.DIV AND IT IS NECESSARY TO  ADD INITIAL AND ANIMATE TAG LIKE BELOW

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "6vw" }}
                        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.2 }}
                        className="overflow-hidden flex justify-center items-center scale-110 h-[5vw] sm:h-[5vw] w-[6vw] relative   "
                      >
                        <img className="" src="/ochiSlide.png" alt="" />
                      </motion.div>
                    )}
                    <h1
                      key={index}
                      className="text-[6.5vw]  leading-none tracking-tighter"
                    >
                      {items}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="w-full h-[1px] mt-[8vw]  bg-slate-700"></div>
        <div className="bottomOfLandingPage text-[3.5vw] sm:text-[1vw] pt-5 mb-[6vw] gap-[1vh] flex flex-col sm:flex-row justify-between px-[3vw] ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((items, index) => {
            return <div key={index}>{items}</div>;
          })}
          <main className="group ">
            <button
              className={`h-[3vh] sm:h-8 px-[1vw] rounded-3xl border border-slate-600 relative overflow-hidden hover:text-white`}
            >
              <span className="relative z-10">START THE PROJECTS</span>
              <span
                className={`bg-zinc-900 px-[1vw] w-full rounded-full h-[3vh] sm:h-8  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
              ></span>
            </button>
          </main>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
