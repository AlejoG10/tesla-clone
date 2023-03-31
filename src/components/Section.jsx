import React from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { RiArrowDownSLine } from "react-icons/ri";

function Section({ id, bgImg, title, descr, leftBtn, rightBtn, last }) {
  return (
    <div
      id={id}
      className={`flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat ${bgImg} w-screen h-screen`}
    >
      <Fade bottom>
        <div className="text-center pt-36">
          <h1 className="text-neutral-800 text-4xl tracking-wider mb-2">
            {title}
          </h1>
          <p className="text-sm font-light">{descr}</p>
        </div>
      </Fade>
      <div className="flex flex-col items-center">
        <Fade bottom>
          <Row
            className={`flex justify-center items-center w-screen ${
              last ? "pb-4" : "pb-5"
            }`}
          >
            <Col
              sm={12}
              md={6}
              className="flex justify-end h-[40px] my-2 sm:w-[275px]"
            >
              <button
                className={`${last ? "bg-black" : "bg-neutral-700"}
            } opacity-80 rounded-md text-neutral-200 text-sm w-full h-full`}
              >
                {leftBtn}
              </button>
            </Col>
            {rightBtn && (
              <Col
                sm={12}
                md={6}
                className="flex justify-end h-[40px] my-2 sm:w-[275px]"
              >
                <button className="bg-neutral-200 opacity-80 rounded-md text-neutral-700 text-sm w-full h-full">
                  {rightBtn}
                </button>
              </Col>
            )}
          </Row>
        </Fade>
        <span className="animate-bounce text-neutral-700 text-3xl pb-3">
          {!last && <RiArrowDownSLine />}
        </span>
      </div>
    </div>
  );
}

export default Section;
