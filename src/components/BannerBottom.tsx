import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Behance",
    imageSrc: "/images/behance.png",
    refLink: "https://www.behance.net/ibrahimuix",
  },
  {
    id: 2,
    title: "Dribbble",
    imageSrc: "/images/dribbble.png",
    refLink: "https://dribbble.com/ibrahimuix",
  },
  {
    id: 3,
    title: "Instagram",
    imageSrc: "/images/instagram.png",
    refLink: "https://www.instagram.com/ibrahimuix",
  },
  {
    id: 4,
    title: "Linkedin",
    imageSrc: "/images/linkedin.png",
    refLink: "https://www.linkedin.com/in/ibrahimuix",
  },
];

const BannerBottom = () => {
  return (
    <div className="w-full desktop:px-0 laptop:px-0 mt-6 laptop:mt-0 desktop:mt-0">
      <div className="grid grid-cols-2 gap-[20px]">
        {cards.map((card) => (
          <a
            key={card.id}
            className={`social-media-card cursor-pointer flex justify-center items-center rounded-2xl h-32 laptop:h-48 desktop:h-48 border border-[var(--color-tertiary)]`}
            style={{background: `linear-gradient(${(card.id == 1 ? 135 : card.id == 2 ? 225 : card.id == 3 ? 45 : 300)}deg, rgba(89,84,222,.15) 0%, rgba(14,22,29,.15) 100%);`}}
            href={card.refLink}
            target="_blank"
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
