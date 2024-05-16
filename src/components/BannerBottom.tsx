import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Behance",
    imageSrc: "/images/behance.png",
  },
  {
    id: 2,
    title: "Dribbble",
    imageSrc: "/images/dribbble.png",
  },
  {
    id: 3,
    title: "Instagram",
    imageSrc: "/images/instagram.png",
  },
  {
    id: 4,
    title: "Linkedin",
    imageSrc: "/images/linkedin.png",
  },
];

const BannerBottom = () => {
  return (
    <div className="custom-container mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex justify-center items-center bg-[#131a29] rounded-3xl h-32  border border-[var(--color-tertiary)]"
          >
            <div className="flex flex-col items-center">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={40}
                height={40}
              />
              <p className="text-sm mt-2">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
