export const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col float-start">
        <div className="text-[64px] font-bold text-black ">
          <h1 className="">Make The Best</h1>
          <h1 className="">Financial Decisions</h1>
        </div>
        <p className="mt-4 text-lg">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary bg-black text-white text-sm p-2 px-6 rounded-sm">
            Get Started
          </button>
          <button className="btn-secondary text-sm text-black p-2 px-6 rounded-sm">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};
