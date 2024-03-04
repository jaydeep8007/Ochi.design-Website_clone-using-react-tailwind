// eslint-disable-next-line react/prop-types
const Button = ({ tag }) => {
  return (
    <main className="group">
      <button
        className={`h-[2.5vw] text-[1.2vw] px-[1vw] rounded-3xl border border-gray-900 relative overflow-hidden hover:text-white`}
      >
        <span className="relative z-10">{tag}</span>
        <span
          className={`bg-black px-[1vw]  w-full rounded-full h-[2.5vw]  absolute bottom-0 left-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
        ></span>
      </button>
    </main>
  );
};

export default Button;
