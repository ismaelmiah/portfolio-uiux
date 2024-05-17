import Image from "next/image";
import ChevronRight from "./Icons/ChevronRight";
import BannerBottom from "./BannerBottom";

const Banner = () => {
  return (
    <section className="custom-container mt-6 grid grid-cols-1 lg:grid-cols-2 md:gap-6">
      <div className="p-5 rounded-2xl bg-[#131a29] border border-[var(--color-tertiary)] md:flex flex-col justify-between gap-6">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <Image
              src="/images/profile.png"
              alt="Profile Image"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-white text-2xl font-bold">UI/UX Designer</h1>
            <p className="text-[#9BA1A6] text-sm font-normal">
              Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex gap-2 items-center p-1 px-3 rounded-2xl bg-[var(--color-primary)] border border-[var(--color-tertiary)]">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <p className="text-xs">AVAILABLE FOR JOB</p>
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <h1 className="text-white text-2xl font-bold">
            I&apos;M IBRAHIM <span className="font-normal">MIAH</span>
          </h1>
          <p className="text-[#9BA1A6] text-sm font-normal">
            I specialize in UX/UI design for Web Apps, Websites and mobile
            applications.
          </p>
        </div>

        <div className="hidden md:flex justify-between items-center gap-5">
          <div className="">
            <Image
              src="/images/profile.png"
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="uppercase text-2xl font-semibold">
              I&apos;M Ibrahim miah
            </h3>
            <p className="text-[#9BA1A6] text-sm font-normal">
              I specialize in UX/UI design for Web Apps, Websites and mobile
              applications.
            </p>
            <button className="bg-[#3833D7] px-6 py-2 rounded-lg shadow-lg shadow-[#3833D7]/50 mt-4 flex gap-1">
              Let&apos;s Talk <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-6 w-full md:hidden">
          <button className="py-2 rounded-lg bg-[#3833D7] shadow-lg shadow-[#3833D7]/50 w-full flex gap-2 justify-center items-center">
            Let&apos;s Talk{" "}
            <span className="text-white">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>

      <BannerBottom />
    </section>
  );
};

export default Banner;
