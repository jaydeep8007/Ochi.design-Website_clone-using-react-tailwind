import Button from "./Button";

const FeaturedProjects = () => {
  return (
    <div className="h-full w-full ">
      <div className="h-[7vw]  w-full mt-[5vw] mb-[2vw] pl-[3vw] border-b border-gray-400  ">
        <div className="text-[3.5vw] ">Featured Projects</div>
      </div>
      <div className="relative cardcontainer  w-full flex flex-row gap-[1.5vw] justify-between  px-[4vw] py-[4vw] ">
        <div className="leftCard ">
          <div className="text-[1vw] text-black  absolute top-[2vw] left-[7vw] z-10 -translate-x-1/2 -translate-y-1/2">
            FYDE
          </div>
          <div className=" w-[45vw] h-[35vw] flex items-center bg-[#CACACB] rounded-xl transform transition-transform ease-in-out duration-700 hover:scale-95">
            <img
              className="scale-75 rounded-xl hover:scale-90 transform transition-transform ease-in-out duration-1000"
              src="/FeaturedProjectsImageLeft.png"
              alt=""
            />
          </div>
          <div className="scale-95 pt-[1vw]   flex flex-row gap-[.5vw]">
            <Button tag={`AUDIT`} />
            <Button tag={`COPYWRITING`} />
            <Button tag={`SALES DECK`} />
            <Button tag={`SLIDES DESIGN`} />
          </div>
        </div>
        <div className="Rightcard">
          <div className="text-[1vw] text-black absolute top-[2vw] left-[54vw] z-10 -translate-x-1/2 -translate-y-1/2">
            WISE
          </div>
          <div className="w-[45vw] h-[35vw] flex items-center bg-[#19181E] rounded-xl transform ease-in-out transition-transform duration-700 hover:scale-95">
            <img
              className="scale-75 rounded-xl hover:scale-90 transform transition-transform ease-in-out duration-1000"
              src="/FeaturedProjectsImageRight.jpg"
              alt=""
            />
          </div>

          <div className="scale-95 pt-[1vw]   flex flex-row gap-[.5vw]">
            <Button tag={`AGENCY`} />
            <Button tag={`COMPANY PRESENTATION`} />
          </div>
        </div>
      </div>
      <div className="caseStudiesBtn  pt-[5vw] relative">
        <main className="group  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            className={`h-10 px-[1vw] rounded-3xl bg-zinc-800 text-white border  border-gray-900 relative overflow-hidden hover:text-white`}
          >
            <span className="relative z-10">VIEW ALL CASE ATUDIES</span>
            <span
              className={`bg-black px-[1vw]  w-full rounded-full h-10  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
            ></span>
          </button>
        </main>
      </div>
    </div>
  );
};

export default FeaturedProjects;
