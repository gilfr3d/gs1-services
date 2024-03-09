import React from "react";

function Card({ title, subTitle, desc, icon }) {
  return (
    <div className="flex gap-2 border shadow-md bg-white rounded-md p-2">
      <div className="w-full flex ">
        <img src={icon} className="w-28 object-contain " alt={icon} />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm font-semibold"> {subTitle}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
