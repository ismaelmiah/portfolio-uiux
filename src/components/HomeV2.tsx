import Banner from "./Banner";
import Navbar from "./Navbar";
import WorksGallery from "./WorksGallery";

const HomeV2 = () => {
  return (
    <main className="my-5">
      <Navbar />
      <Banner />
      <WorksGallery />
      <footer className="mt-6 text-center laptop:flex justify-between items-center custom-container">
        <div className="text-[#9BA1A6] text-base">
          <ul className="flex tablet:space-x-4 desktop:space-x-8 laptop:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="https://www.facebook.com/ibrahimuix"
                className="block hover:text-white"
                aria-current="page"
                target="_blank"
              >
                FB
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/qr/OXX6PKWUCUHEN1"
                className="block hover:text-white"
                target="_blank"
              >
                WA
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ibrahim_uix"
                className="block hover:text-white"
                target="_blank"
              >
                X
              </a>
            </li>
          </ul>
        </div>
        <p className="text-[#9BA1A6] text-base ">Copy Right</p>
      </footer>
    </main>
  );
};

export default HomeV2;
