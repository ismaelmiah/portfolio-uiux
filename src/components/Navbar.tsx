import Image from "next/image";
import MenuIcon from "./Icons/MenuIcon";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="">
      <div className="custom-container md:hidden">
        <div
          className="flex justify-between items-center"
          style={{
            background:
              "radial-gradient(circle, rgb(89 84 222 / 10%) 0%, rgb(14 22 29 / 0%) 100%);",
          }}
        >
          <div>
            <Image src="/images/logo.png" alt="Logo" width={60} height={100} />
          </div>
          <div className="text-white">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="custom-container hidden md:block">
        <div className="p-4 rounded-2xl bg-[#131a29] border border-[var(--color-tertiary)] flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link href="/works" className="text-base text-[#9BA1A6]">
              Project
            </Link>
            <Link href="/about" className="text-base text-[#9BA1A6]">
              About
            </Link>
          </div>
          <div>
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <div>
            <button>Hire Me</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
