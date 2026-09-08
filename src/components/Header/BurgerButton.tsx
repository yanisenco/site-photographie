type BurgerButtonProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function BurgerButton({ isOpen, setIsOpen }: BurgerButtonProps) {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue dark:text-custom-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-solid-bg"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6"
            className={`origin-center transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1 -translate-x-1" : ""}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line x1="4" y1="12" x2="20" y2="12"
            className={`origin-center transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line x1="4" y1="18" x2="20" y2="18"
            className={`origin-center transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1 -translate-x-1" : ""}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    );
  }
  