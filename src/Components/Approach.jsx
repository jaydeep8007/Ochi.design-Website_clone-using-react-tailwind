const Approach = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed=".2"
        className=" h-fit -mt-[15vw] w-full rounded-t-3xl text-black bg-[#CDEA68]"
      >
        <div className=" text-[3.5vw] tracking-tighter leading-none h-[30vh] w-full px-[5vw] pt-[5vw] mb-[4vw]  pr-[22vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </div>
        <div className="text-[1.1vw] flex flex-row h-[25vw] border-t border-gray-700 w-full">
          <div className="left h-full w-[50vw] pl-[2.5vw] pt-[1vw] flex items-start justify-start  ">
            <span className="">What you can expect:</span>
          </div>
          <div className="middle w-[20vw] gap-[2vw] flex pt-[2vw]   flex-col">
            <span>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether its live or digital,
              delivered for one or a hundred people.
            </span>
            <span>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </span>
          </div>
          <div className="right flex items-center justify-center w-[30vw] h-full">
            <div className="flex flex-col ">
              <h5 className="pb-2">S:</h5>
              <a className="hover:underline" href="">
                Instagram
              </a>
              <a className="hover:underline" href="">
                Behence
              </a>
              <a className="hover:underline" href="">
                Facebook
              </a>
              <a className="hover:underline" href="">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="OurApproach  border-t border-gray-700 h-[40vw] w-full  flex flex-row  ">
          <div className="leftb h-full w-[50vw] flex flex-col gap-[2vw] pl-[3vw] pt-[2vw]">
            <h1 className="font-semibold text-[3vw]">Our approach:</h1>
            <button className=" w-[11vw] h-[4vw] bg-black text-white rounded-full border border-gray-500 px-3 py-1">
              READ MORE
            </button>
          </div>
          <div
            className="rightb flex
           justify-center items-center  h-full w-[50vw] "
          >
            <img
              className="bg-white bg-cover -mt-[5vw] rounded-lg h-[80%]  "
              src="/ApproachRight.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;
