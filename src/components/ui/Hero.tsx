import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col items-start">
        <div className="text-[60px] font-extrabold text-black leading-[68px]">
          <h1 className="">Make The Best</h1>
          <h1 className="">Financial Decisions</h1>
        </div>
        <p className="mt-4 text-lg text-gray-500 font-normal capitalize">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{' '}
          <br />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white text-[18px] leading-[28px] py-3 px-6 rounded-sm font-medium flex items-center gap-2">
            <p className="">Get Started</p>
            <Image src="/arrow.png" alt="Arrow" width={24} height={12} />
          </button>
          <button className="text-[18px] leading-[28px] py-3 px-6 rounded-sm font-medium flex items-center gap-2 border border-black">
            <Image src="/playIcon.png" alt="Play Icon" width={24} height={24} />
            <p className="">Watch Video</p>
          </button>
        </div>
      </div>
    </section>
  );
};
