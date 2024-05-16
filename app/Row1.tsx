// components/Row1.js
import Image from "next/image";

const Row1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-4/6 border border-slate-700 p-6 rounded-3xl" style={{background: 'linear-gradient(114deg, rgba(89,84,222,0.15) 0%, rgba(14,22,29,.15) 100%);'}}>
        <div className="flex flex-col justify-center items-start">
          <div className="flex w-full justify-between">
            <div className="text-white text-lg md:text-xl font-normal font-['Arial']">
              UI/UX DESIGNER
            </div>
            <div className="px-2 py-1 bg-gray-950 rounded-3xl border border-slate-700 flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
              <div className="text-white text-xs font-light font-['Poppins']">
                AVAILABLE FOR JOB
              </div>
            </div>
          </div>
          <div className="text-center text-zinc-400 text-sm md:text-base font-normal mt-2 font-['Arial']">
            Dhaka, Bangladesh
          </div>
        </div>
        <div className="flex items-end min-h-52 mt-4">
          <div className="w-1/3">
            <Image
              src="/images/profile.png"
              alt="Display Picture"
              width={213}
              height={213}
              className="rounded-full"
            />
          </div>
          <div className="w-2/3 flex flex-col items-start ml-4">
            <h1 className="text-white pb-2 text-2xl md:text-3xl font-normal font-[Poppins]">
              I&apos;M IBRAHIM MIAH
            </h1>
            <h4 className="text-zinc-400 text-sm md:text-base font-normal font-Poppins leading-relaxed">
              I specialize in UI/UX design for the Web apps, Websites and Mobile
              application.
            </h4>
            <div className="mt-4">
              <a
                className="px-4 py-2 bg-[#3833D7] rounded-xl shadow text-white text-sm md:text-base font-normal font-Arial"
                href="#"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="w-3/6 flex flex-wrap gap-5 text-white pl-4">
          <div className="flex flex-col items-center justify-center border border-slate-700 rounded-3xl bg-gray-900 w-[calc(50%-10px)] h-[calc(50%-10px)]" style={{background: 'linear-gradient(114deg, rgba(89,84,222,0.15) 0%, rgba(14,22,29,.15) 100%);'}}>
            <Image
              src="/images/behance.png"
              alt="Behance"
              width={60}
              height={60}
            />
            <p className="mt-2 text-center text-sm md:text-base">Behance</p>
          </div>
          <div className="flex flex-col items-center justify-center border border-slate-700 rounded-3xl p-4 bg-gray-900 w-[calc(50%-10px)] h-[calc(50%-10px)]" style={{background: 'linear-gradient(0deg, rgba(89,84,222,0.15) 0%, rgba(14,22,29,.15) 100%);'}}>
            <Image
              src="/images/dribble.png"
              alt="Dribble"
              width={60}
              height={60}
            />
            <p className="mt-2 text-center text-sm md:text-base">Dribble</p>
          </div>
          <div className="flex flex-col items-center justify-center border border-slate-700 rounded-3xl p-4 bg-gray-900 w-[calc(50%-10px)] h-[calc(50%-10px)]" style={{background: 'linear-gradient(90deg, rgba(89,84,222,0.15) 0%, rgba(14,22,29,.15) 100%);'}}>
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={60}
              height={60}
            />
            <p className="mt-2 text-center text-sm md:text-base">Instagram</p>
          </div>
          <div className="flex flex-col items-center justify-center border border-slate-700 rounded-3xl p-4 bg-gray-900 w-[calc(50%-10px)] h-[calc(50%-10px)]" style={{background: 'linear-gradient(270deg, rgba(89,84,222,0.15) 0%, rgba(14,22,29,.15) 100%);'}}>
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={60}
              height={60}
            />
            <p className="mt-2 text-center text-sm md:text-base">LinkedIn</p>
          </div>
        </div>
    </div>
  );
};

export default Row1;
