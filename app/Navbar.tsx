import Image from "next/image";

// components/Navbar.js
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 rounded-2xl">
      <div className="mx-auto flex justify-between items-center px-8 md:px-8">
        <ul className="hidden md:flex space-x-4">
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
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400 text-sm md:text-base">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
