const Cards = () => {
  return (
    <div>
      <div className="h-screen w-full ">
        <div className="cards h-full px-[5vw] flex flex-row gap-[1vw] justify-between  items-center ">
          <div className="card1 hover:scale-[102%] transform transition-transform ease-in-out duration-700  relative h-[26vw] w-[50vw] flex items-center justify-center rounded-xl bg-[#004D43]">
            <img src="/ochiCard1.svg" alt="" />
            <main className="btn absolute left-[2vw] bottom-[2vw]">
              <button
                className={`h-8 px-[1vw] rounded-3xl border border-[#CDEA68] text-[#CDEA68] relative overflow-hidden `}
              >
                <span className="relative text-sm z-10">2019-2022</span>
                <span
                  className={`bg-black px-[1vw]  w-full rounded-full h-8  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
                ></span>
              </button>
            </main>
          </div>
          <div className="card2 hover:scale-[102%] transform transition-transform ease-in-out duration-700 relative h-[26vw] w-[25vw] flex items-center justify-center rounded-xl bg-[#212121]">
            <img src="/clutchCard2.svg" alt="" />
            <main className="btn absolute left-[2vw] bottom-[2vw]">
              <button
                className={`h-8 px-[1vw] rounded-3xl border text-white border-slate-300 relative overflow-hidden`}
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
          <div className="card3 hover:scale-[102%] transform transition-transform ease-in-out duration-700 relative h-[26vw] w-[25vw] flex items-center justify-center rounded-xl bg-[#212121]">
            <img className="w-[7vw]" src="/Card3.png" alt="" />
            <main className="btn absolute left-[2vw] bottom-[2vw]">
              <button
                className={`h-8 px-[1vw] rounded-3xl border text-white border-slate-300 relative overflow-hidden`}
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
