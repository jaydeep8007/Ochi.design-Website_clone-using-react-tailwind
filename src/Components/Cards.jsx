const Cards = () => {
  return (
    <div>
      <div className="h-[80vh] mt-[10vh] sm:mt-0 sm:h-screen w-full ">
        <div className="cards h-full px-[5vw] grid grid-cols-1  sm:grid-cols-12  sm:sgap-[10vh] sm:gap-[1vw]  sm:justify-between  items-center  ">
          <div className="card1 col-span-12 sm:col-span-6  sm:scale-100 hover:scale-[102%] transform transition-transform ease-in-out duration-700  relative h-[50vw] sm:h-[26vw]  flex items-center justify-center rounded-xl bg-[#004D43]">
            <img src="/ochiCard1.svg" alt="" />
            <main className="btn absolute left-[2vw] bottom-[2vw]">
              <button
                className={`scale-50 sm:scale-100 h-8 px-[1vw] rounded-3xl border border-[#CDEA68] text-[#CDEA68] relative overflow-hidden `}
              >
                <span className="relative text-sm z-10">2019-2022</span>
                <span
                  className={`bg-black px-[1vw]  w-full rounded-full h-8  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
                ></span>
              </button>
            </main>
          </div>
          <div className="card2 col-span-12 sm:col-span-3  sm:scale-100 hover:scale-[102%] transform transition-transform ease-in-out duration-700 relative h-[50vw] sm:h-[26vw]  flex items-center justify-center rounded-xl bg-[#212121]">
            <img src="/clutchCard2.svg" alt="" />
            <main className="btn absolute left-[2vw] bottom-[2vw]">
              <button
                className={`scale-50 sm:scale-100 h-8 px-[1vw] rounded-3xl border text-white border-slate-300 relative overflow-hidden`}
              >
                <span className="relative text-sm z-10">
                  RATING 5.0 ON CLUTCH
                </span>
                <span
                  className={`bg-white px-[1vw] w-full rounded-full h-8  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
                ></span>
              </button>
            </main>
          </div>
          <div className="card3 col-span-12 sm:col-span-3  sm:scale-100 hover:scale-[102%] transform transition-transform ease-in-out duration-700 relative h-[50vw] sm:h-[26vw]  flex items-center justify-center rounded-xl bg-[#212121]">
            <img className="w-[7vw]" src="/Card3.png" alt="" />
            <main className="btn absolute left-[2vw] bottom-[2vw]">
              <button
                className={`scale-50 sm:scale-100 h-8 px-[1vw] rounded-3xl border text-white border-slate-300 relative overflow-hidden`}
              >
                <span className="relative text-sm z-10">
                  BUISINESS BOOTCAMP ALUMNI
                </span>
                <span
                  className={`bg-white px-[1vw] w-full rounded-full h-8  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
                ></span>
              </button>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
