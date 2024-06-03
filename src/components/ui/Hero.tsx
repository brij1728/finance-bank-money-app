import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="py-10 relative overflow-hidden bg-white h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="max-w-xl md:w-1/2 flex flex-col justify-center h-full">
          <div className="text-xl md:text-[60px] font-extrabold text-black leading-6 md:leading-[68px] relative text-glow">
            <h1>Make The Best</h1>
            <h1>Financial Decisions</h1>
          </div>
          <p className="mt-4 text-[10px] md:text-lg text-gray-500 font-extralight md:font-normal capitalize">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex gap-2 md:gap-4 md:mt-6">
            <button className="bg-black text-white text-sm md:text-[18px] leading-4 md:leading-[28px] py-1 md:py-3 px-2 md:px-6 rounded font-normal md:font-medium flex items-center gap-1 md:gap-2">
              <p>Get Started</p>
              <Image src="/arrow.png" alt="Arrow" width={24} height={12} />
            </button>
            <button className="text-sm md:text-[18px] leading-4 md:leading-[28px] py-1 md:py-3 px-2 md:px-6 rounded-sm font-normal md:font-medium flex items-center gap-2 border border-black">
              <Image
                src="/playIcon.png"
                alt="Play Icon"
                width={24}
                height={24}
              />
              <p>Watch Video</p>
            </button>
          </div>
          <div className="mt-10">
            <Image
              src="/achievements.png"
              alt="Hero Image"
              width={550}
              height={360}
            />
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 md:w-1/2 h-full flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="relative w-[150%] md:w-[100%] h-[150%] md:h-[100%]">
              <Image
                src="/circle.png"
                alt="Circle"
                layout="fill"
                objectFit="contain"
                className="opacity-50"
              />
            </div>
          </div>
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="absolute z-30 transform -rotate-[10deg] w-[250px] h-[500px] md:w-[300px] md:h-[600px] lg:w-[350px] lg:h-[700px] left-10 top-20">
              <Image
                src="/iPhone-13-Pro-Front5.png"
                alt="Mobile 1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute z-20 transform -rotate-[10deg] w-[250px] h-[500px] md:w-[300px] md:h-[600px] lg:w-[350px] lg:h-[700px] left-28 top-28">
              <Image
                src="/iPhone-13-Pro-Front4.png"
                alt="Mobile 2"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute z-10 transform -rotate-[10deg] w-[250px] h-[500px] md:w-[300px] md:h-[600px] lg:w-[350px] lg:h-[700px] left-48 top-36">
              <Image
                src="/iPhone-13-Pro-Front.png"
                alt="Mobile 3"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
