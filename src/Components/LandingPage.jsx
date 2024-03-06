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
        <div className="leftTextArea  pt-[22vh] pl-[3vw] ">
          <div className="maskers  font-['Founders_Grotesk']">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
              (items, index) => {
                return (
                  <div key={index} className="flex   gap-[1vw]">
                    {index === 1 && (
                      // FOR APPLY MOTION MAKE DIV TO MOTION.DIV AND IT IS NECESSARY TO  ADD INITIAL AND ANIMATE TAG LIKE BELOW
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "7vw" }}
                        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.2 }}
                        className="overflow-hidden h-[5vw] w-[7vw] relative -top-[1.5vh]  rounded-md"
                      >
                        <img
                          className="scale-125"
                          src="/ochiSlide.png"
                          alt=""
                        />
                      </motion.div>
                    )}
                    <h1
                      key={index}
                      className="text-[7vw]  leading-[6vw] tracking-tighter"
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
        <div className="bottomOfLandingPage text-[2vw] sm:text-[1vw] pt-5 mb-[6vw] gap-[1vh] flex flex-col sm:flex-row justify-between px-[3vw] ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((items, index) => {
            return <div key={index}>{items}</div>;
          })}
          <main className="group">
            <button
              className={`h-[2vh] sm:h-8 px-[1vw] rounded-3xl border border-slate-600 relative overflow-hidden hover:text-white`}
            >
              <span className="relative z-10">START THE PROJECTS</span>
              <span
                className={`bg-zinc-900 px-[1vw] w-full rounded-full h-[2vh] sm:h-8  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
              ></span>
            </button>
          </main>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
