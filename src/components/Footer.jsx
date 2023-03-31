import React from "react";

function Footer() {
  return (
    <footer className="relative bg-white w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center text-neutral-500 text-xs font-medium py-4">
        <a href="/" className="m-2 hover:text-neutral-500">
          Tesla © {new Date().getFullYear()}
        </a>
        <a href="/" className="m-2 hover:text-neutral-500">
          Privacy & Legal
        </a>
        <a href="/" className="m-2 hover:text-neutral-500">
          Vehicle Recalls
        </a>
        <a href="/" className="hidden sm:inline m-2 hover:text-neutral-500">
          Contact
        </a>
        <a href="/" className="m-2 hover:text-neutral-500">
          Careers
        </a>
        <a href="/" className="m-2 hover:text-neutral-500">
          News
        </a>
        <a href="/" className="hidden sm:inline m-2 hover:text-neutral-500">
          Engage
        </a>
        <a href="/" className="hidden sm:inline m-2 hover:text-neutral-500">
          Locations
        </a>
      </div>
    </footer>
  );
}

export default Footer;
