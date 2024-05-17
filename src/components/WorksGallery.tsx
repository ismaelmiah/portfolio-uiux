import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "Project 1",
    imgUrl: "/images/work-1.png",
  },
  {
    id: 2,
    title: "Project 2",
    imgUrl: "/images/works-2.png",
  },
  {
    id: 3,
    title: "Project 3",
    imgUrl: "/images/work-3.png",
  },
];

const WorksGallery = () => {
  return (
    <section className="custom-container mt-6">
      <div className="p-5 rounded-2xl bg-[#131a29] border border-[var(--color-tertiary)]">
        <h3 className="text-base font-semibold md:hidden">Works Gallery</h3>
        <div className="md:flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-[#9BA1A6]">Works</h3>
          <Link href="/works" className="text-[#3833D7] text-base underline">
            View All
          </Link>
        </div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {works.map((work) => (
            <div key={work.id} className="">
              <div className="w-full h-56 md:h-64 relative">
                <Image src={work.imgUrl} alt={work.title} layout="fill" />
              </div>
              <p className="text-base text-[#9BA1A6] mt-2 text-center">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
