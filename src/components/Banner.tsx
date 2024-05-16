import Image from "next/image";
import ChevronRight from "./Icons/ChevronRight";

const Banner = () => {
  return (
    <section className="custom-container mt-6">
      <div className="p-5 rounded-3xl bg-[#131a29] border border-[var(--color-tertiary)]">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/images/profile.png"
              alt="Profile Image"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="flex gap-2 items-center p-1 px-3 rounded-2xl bg-[var(--color-primary)] border border-[var(--color-tertiary)]">
            {/* red dot */}
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <p className="text-xs">AVAILABLE FOR JOB</p>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-2xl font-bold">
            I&apos;M IBRAHIM <span className="font-normal">MIAH</span>
          </h1>
          <p className="text-[#9BA1A6] text-sm font-normal">
            I specialize in UX/UI design for Web Apps, Websites and mobile
            applications.
          </p>
        </div>

        <div className="mt-6 w-full">
          <button className="py-2 rounded-lg bg-[#3833D7] shadow-lg shadow-[#3833D7]/50 w-full flex gap-2 justify-center items-center">
            Let&apos;s Talk{" "}
            <span className="text-white">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
