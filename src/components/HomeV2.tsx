import Banner from "./Banner";
import Navbar from "./Navbar";
import WorksGallery from "./WorksGallery";

const HomeV2 = () => {
  return (
    <main className="my-5">
      <Navbar />
      <Banner />
      <WorksGallery />
      <footer className="mt-6 text-center md:flex justify-between items-center custom-container">
        <p className="text-[#9BA1A6] text-base ">Social Media</p>
        <p className="text-[#9BA1A6] text-base ">Copy Right</p>
      </footer>
    </main>
  );
};

export default HomeV2;
