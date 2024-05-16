import Image from "next/image";
import MenuIcon from "./Icons/MenuIcon";

const Navbar = () => {
  return (
    <header className="">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <div>
            <Image src="/images/logo.png" alt="Logo" width={60} height={100} />
          </div>
          <div className="text-white">
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
