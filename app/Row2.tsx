import Image from "next/image"; // components/Row2.js
const Row2 = () => {
  return (
    <div className="p-4 text-white rounded-3xl border border-slate-700 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Works</h1>
        <button className="text-blue-500 hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
};

export default Row2;
