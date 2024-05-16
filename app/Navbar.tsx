import Image from "next/image";

// components/Navbar.js
const Navbar = () => {
  return (
    <nav className="py-4 rounded-2xl border border-[#283849]" style={{background: 'radial-gradient(circle, rgb(89 84 222 / 10%) 0%, rgb(14 22 29 / 0%) 100%);'}}>
      <div className="mx-auto flex justify-between items-center px-8 md:px-8">
        <ul className="hidden md:flex space-x-4 text-[#9BA1A6]">
          <li>
            <a href="#" className="hover:text-gray-400 text-sm md:text-base">Project</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 text-sm md:text-base">About</a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <a href="#">
            <Image src="/images/logo.png" className="h-8 w-auto" alt="Logo" width={100} height={100} />
          </a>
        </div>
        <ul className="text-[#F7F7F7] hidden md:flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400 text-sm md:text-base">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
