import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 flex justify-center items-center">
      <div className="container mx-auto px-8 py-8 md:mx-10 lg:mx-15 ">
        <div className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white rounded-3xl border border-slate-700">
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-6">
              <li className="cursor-pointer hover:text-gray-500 transition duration-300">
                Project
              </li>
              <li className="cursor-pointer hover:text-gray-500 transition duration-300">
                About
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/images/logo.png" alt="" width={100} height={100} />
          </div>
          <div className="cursor-pointer hover:text-gray-500 transition duration-300">
            Hire Me
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="w-1/2  rounded-3xl border border-slate-700 p-4 mr-2 ">
            <div className="flex-col justify-center items-start gap-2 inline-flex">
              <div className="justify-start items-start gap-60 inline-flex">
                <div className="text-white text-2xl font-normal font-['Arial']">
                  UI/UX DESIGNER
                </div>
                <div className="px-4 py-1 bg-gray-950 rounded-3xl border border-slate-700 justify-start items-center gap-2 flex">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <div className="text-white text-sm font-light font-['Poppins']">
                    AVAILABLE FOR JOB
                  </div>
                </div>
              </div>
              <div className="text-center text-zinc-400 text-xl font-normal font-['Arial']">
                Dhaka, Bangladesh
              </div>
            </div>
            <div className="mt-16 flex">
              <div className="rounded-full overflow-hidden mr-6">
                <Image
                  src="/images/profile.png"
                  alt="Photo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-white text-4xl font-normal font-['Poppins']">
                  I&apos;M IBRAHIM MIAH
                </h1>
                <h4 className="w-96 text-zinc-400 text-base font-normal font-['Poppins'] leading-relaxed">
                  I specialize in UI/UX design for the Web apps, Websites and
                  Mobile application.
                </h4>
                <div className="px-8 py-2 bg-indigo-700 rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
                  <a
                    className="text-right text-white text-base font-normal font-['Arial']"
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
          <div className="w-1/2 rounded-3xl border border-slate-700 p-4 ml-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
                <Image
                  src="/images/230x235.png"
                  alt="Image 1"
                  width={100}
                  height={100}
                />
                <p className="mt-2 text-center">Text 1</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
                <Image
                  src="/images/230x235.png"
                  alt="Image 2"
                  width={100}
                  height={100}
                />
                <p className="mt-2 text-center">Text 2</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
                <Image
                  src="/images/230x235.png"
                  alt="Image 3"
                  width={100}
                  height={100}
                />
                <p className="mt-2 text-center">Text 3</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
                <Image
                  src="/images/230x235.png"
                  alt="Image 4"
                  width={100}
                  height={100}
                />
                <p className="mt-2 text-center">Text 4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 text-white rounded-3xl border border-slate-700 mt-6">
          {" "}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Works</h1>
            <button className="text-blue-500 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project Blocks */}
            <div className="relative overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/images/project1.jpg"
                alt="Project 1"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 transition duration-300 opacity-0 hover:opacity-75 flex items-center justify-center">
                <p className="text-white text-center">Project 1</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/images/project2.jpg"
                alt="Project 2"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 transition duration-300 opacity-0 hover:opacity-75 flex items-center justify-center">
                <p className="text-white text-center">Project 2</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/images/project3.jpg"
                alt="Project 3"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 transition duration-300 opacity-0 hover:opacity-75 flex items-center justify-center">
                <p className="text-white text-center">Project 3</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/images/project4.jpg"
                alt="Project 4"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 transition duration-300 opacity-0 hover:opacity-75 flex items-center justify-center">
                <p className="text-white text-center">Project 4</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="py-4 px-8 bg-gray-900 text-white flex justify-between">
          <div>Left Text</div>
          <div>Right Text</div>
        </footer>
      </div>
    </main>
  );
}
