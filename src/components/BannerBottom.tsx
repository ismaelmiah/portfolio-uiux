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
    <div className="w-full px-2 md:px-0 mt-6 md:mt-0">
      <div className="grid grid-cols-2 gap-[20px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.title.toLowerCase()} cursor-pointer flex justify-center items-center bg-[#131a29] rounded-2xl h-32 md:h-40 border border-[var(--color-tertiary)]`}
            style={{background: `linear-gradient(${(card.id*114)%360}deg, rgba(89,84,222,0.15) 0%, rgba(14,22,29,.15) 100%);`}}
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
