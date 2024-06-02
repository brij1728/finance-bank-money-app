import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col float-start">
        <div className="text-[60px] font-extrabold text-black space-y-0 leading-[68px]">
          <p className="">Make The Best</p>
          <p className="">Financial Decisions</p>
        </div>
        <p className="mt-4 text-lg text-gray-500 font-normal capitalize">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{' '}
          <br />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-4 mt-6">
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
