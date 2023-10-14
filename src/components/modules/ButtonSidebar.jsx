"use client";

import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import Link from "next/link";
import React, { useState } from "react";

const ButtonSidebar = (props) => {
  const { drop, name, icon } = props;
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`btn-sidebar ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <div
          className="flex justify-around items-center w-full font-[400]
        "
        >
          {icon}
          {name}
          {drop && <div className="arrow-btn">
            <ArrowLeftIcon />
          </div>}
          {!drop && <div></div>}
        </div>
      </div>
      {drop && (
        <div className={`drop-box ${active ? "active" : ""}`}>
          <ul className="menu-list">
            {props.children.map((item, index) => (
              <li key={index} className="text-text-main text-xl">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ButtonSidebar;
