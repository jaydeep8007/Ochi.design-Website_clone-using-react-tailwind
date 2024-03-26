const Eyes = () => {
  return (
    <>
      <div className="eyes flex items-center justify-center h-0 sm:h-[120vh] w-full overflow-hidden  ">
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-.7"
          className=" relative sm:h-[60vw] "
        >
          <img className="" src="/EyesBg.jpg" alt="Eyes" />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <div className="flex gap-[2vw]">
              <div className="eye h-[13vw] w-[13vw] flex items-center justify-center rounded-full bg-white">
                <div className="relative h-[8vw] w-[8vw] rounded-full bg-black">
                  <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.5vw] w-full">
                    <div className="h-[1.5vw] w-[1.5vw] flex items-center justify-center rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="eye h-[13vw] w-[13vw] flex items-center justify-center rounded-full bg-white">
                <div className="relative h-[8vw] w-[8vw] rounded-full bg-black">
                  <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.5vw] w-full">
                    <div className="h-[1.5vw] w-[1.5vw] flex items-center justify-center rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
