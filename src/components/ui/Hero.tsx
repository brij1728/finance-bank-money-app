import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col items-start">
        <div className="text-xl md:text-[60px] font-extrabold text-black leading-6 md:leading-[68px]">
          <h1 className="">Make The Best</h1>
          <h1 className="">Financial Decisions</h1>
        </div>
        <p className="mt-4 text-[10px] md:text-lg text-gray-500 font-extralight md:font-normal capitalize">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{' '}
          <br />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-2 md:gap-4 md:mt-6">
          <button className="bg-black text-white text-sm md:text-[18px] leading-4 md:leading-[28px] py-1 md:py-3 px-2 md:px-6 rounded font-normal md:font-medium flex items-center gap-1 md:gap-2">
            <p className="">Get Started</p>
            <Image src="/arrow.png" alt="Arrow" width={24} height={12} />
          </button>
          <button className="text-sm text-[18px] leading-4 md:leading-[28px] py-1 md:py-3 px-2 md:px-6 rounded-sm font-normal md:font-medium flex items-center gap-2 border border-black">
            <Image src="/playIcon.png" alt="Play Icon" width={24} height={24} />
            <p className="">Watch Video</p>
          </button>
        </div>
      </div>
    </section>
  );
};
