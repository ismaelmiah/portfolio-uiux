import Image from "next/image";

// components/Navbar.js
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 rounded-3xl p-8">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-400">Project</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">About</a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <a href="#">
            <Image src="/images/logo.png" className="h-8 w-auto" alt="Logo" width={100} height={100} />
          </a>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-400">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
