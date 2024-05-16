import Image from "next/image";

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
      <div className="p-5 rounded-3xl bg-[#131a29] border border-[var(--color-tertiary)]">
        <h3 className="text-base font-semibold">Works Gallery</h3>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {works.map((work) => (
            <div key={work.id} className="">
              <div className="w-full h-[220px] relative">
                <Image
                  src={work.imgUrl}
                  alt={work.title}
                  layout="fill"
                  objectFit="contain"
                />
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
