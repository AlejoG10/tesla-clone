import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineClose } from "react-icons/ai";
import teslaLogo from "../assets/logo.svg";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="absolute z-10 w-full">
      <div className="flex justify-around items-center h-[65px]">
        <a href="/">
          <img src={teslaLogo} alt="logo" />
        </a>
        <div className="flex justify-around items-center text-sm text-neutral-800 pl-28">
          <a
            href="#model-3"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Model 3
          </a>
          <a
            href="#model-y"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Model Y
          </a>
          <a
            href="#model-s"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Model S
          </a>
          <a
            href="#model-x"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Model X
          </a>
          <a
            href="#solar-panels"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Solar Panels
          </a>
          <a
            href="#solar-roof"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Solar Roof
          </a>
          <a
            href="#accessories"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Accessories
          </a>
        </div>
        <div className="flex justify-around items-center text-sm text-neutral-800">
          <a
            href="/"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Shop
          </a>
          <a
            href="/"
            className="px-3 hidden tesla-bp:inline hover:text-neutral-800"
          >
            Account
          </a>
          <button className="bg-black opacity-5 w-[75px] h-[35px] rounded-md tesla-bp:hidden"></button>
          <>
            <button
              className="absolute px-3 tesla-bp:relative hover:text-neutral-800"
              onClick={handleShow}
            >
              Menu
            </button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className="p-3"
            >
              <Offcanvas.Header className="flex justify-end">
                <button onClick={handleClose}>
                  <span className="text-xl">
                    <AiOutlineClose />
                  </span>
                </button>
              </Offcanvas.Header>
              <Offcanvas.Body className="flex flex-col">
                <a
                  href="#model-3"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Model 3
                </a>
                <a
                  href="#model-y"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Model Y
                </a>
                <a
                  href="#model-s"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Model S
                </a>
                <a
                  href="#model-x"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Model X
                </a>
                <a
                  href="#solar-panels"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Solar Panels
                </a>
                <a
                  href="#solar-roof"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Solar Roof
                </a>
                <a
                  href="#accessories"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Accessories
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Existing Inventory
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Used Inventory
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Trade-In
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Test Drive
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Insurance
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Powerwall
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Commercial Energy
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Utilities
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Charging
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Find Us
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Investor Relations
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Shop
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  Account
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  More
                </a>
                <a
                  href="/"
                  className="text-sm text-neutral-700 hover:text-neutral-700 hover:bg-gray-100 p-2"
                >
                  United States
                </a>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
