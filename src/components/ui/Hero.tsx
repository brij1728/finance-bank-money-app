import Image from 'next/image';

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
          <button className="btn-primary bg-black text-white text-[18px] leading-[28px] py-4 px-[23px] rounded font-medium h-[60px]">
            <span className="flex items-center gap-2">
              <p className="">Get Started</p>
              <Image
                src="/arrow.png"
                alt="Arrow"
                width={24}
                height={12}
                className="ml-2"
              />
            </span>
          </button>
          <button className="btn-secondary text-sm text-black text-[18px] leading-[28px] py-4 px-[23px] rounded font-medium flex gap-2 border h-[60px] ">
            <span className="">
              <Image
                src="/playIcon.png"
                alt="Arrow"
                width={24}
                height={12}
                className="ml-2"
              />
            </span>
            <p className="">Watch Video</p>
          </button>
        </div>
      </div>
    </section>
  );
};
