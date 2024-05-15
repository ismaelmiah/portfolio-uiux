// components/Row1.js
import Image from "next/image";

const Row1 = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[36rem] w-full border border-slate-700 p-6 rounded-3xl">
        <div className="flex-col justify-center items-start flex">
          <div className="flex w-full justify-between">
            <div className="text-white text-xl font-normal font-['Arial']">
              UI/UX DESIGNER
            </div>
            <div className="px-4 py-1 bg-gray-950 rounded-3xl border border-slate-700 justify-start items-center gap-2 flex">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="text-white text-xs font-light font-Poppins">
                AVAILABLE FOR JOB
              </div>
            </div>
          </div>
          <div className="text-center text-zinc-400 text-base font-normal font-Arial">
            Dhaka, Bangladesh
          </div>
        </div>
        <div className="flex items-end min-h-52">
          <div className="w-1/3 rounded-full">
            <Image
              src="/images/profile.png"
              alt="Photo"
              width={150}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start">
            <h1 className="text-white pb-2 text-3xl font-normal font-Poppins">
              I&apos;M IBRAHIM MIAH
            </h1>
            <h4 className="w-96 text-zinc-400 pb-3 text-base font-normal font-Poppins leading-relaxed">
              I specialize in UI/UX design for the Web apps, Websites and Mobile
              application.
            </h4>
            <div className="px-8 py-2 bg-indigo-700  rounded-3xl shadow justify-center items-center gap-2.5 inline-flex">
              <a
                className="text-right text-white text-base font-normal font-Arial"
                href="#"
              >
                Let’s Talk
              </a>
              <div className="w-6 h-6 text-white justify-center items-center flex">
                <div className="w-6 h-6 relative">&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white grid grid-cols-2 gap-4">
          <div className="border border-slate-700 rounded-3xl bg-gray-900 p-4 flex flex-col items-center justify-center    w-36 h-36">
            <Image
              src="/images/behance.png"
              alt="Behance"
              width={60}
              height={100}
            />
            <p className="mt-2 text-center">Behance</p>
          </div>
          <div className="border border-slate-700 rounded-3xl bg-gray-900 p-4 flex flex-col items-center justify-center    w-36 h-36">
            <Image
              src="/images/dribble.png"
              alt="Dribble"
              width={60}
              height={100}
            />
            <p className="mt-2 text-center">Dribble</p>
          </div>
          <div className="border border-slate-700 rounded-3xl bg-gray-900 p-4 flex flex-col items-center justify-center    w-36 h-36">
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={60}
              height={100}
            />
            <p className="mt-2 text-center">Instagram</p>
          </div>
          <div className="border border-slate-700 rounded-3xl bg-gray-900 p-4 flex flex-col items-center justify-center    w-36 h-36">
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={60}
              height={100}
            />
            <p className="mt-2 text-center">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
