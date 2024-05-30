const MenuIcon = () => {
  return (
    <a
    className="flex text-base underline"
    aria-label="View Full Resume"
    href="/resume/Resume_Of_Ismael_Miah.pdf"
    target="_blank"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      stroke-linecap="circle"
      stroke-linejoin="circle"
      className="mr-1 mt-1 h-4 w-4"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" x2="12" y1="15" y2="3"></line>
    </svg>{" "}
    Resume
  </a>
  );
};

export default MenuIcon;
