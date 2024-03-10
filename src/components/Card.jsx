import React, {useState} from "react";

function Card({ title, subTitle, desc, icon, onClick, link }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
    <div
      className={`flex gap-2 border shadow-lg bg-white rounded-md p-2 cursor-pointer hover:shadow-lg transition duration-300 transform ${
        isHovered ? "scale-95" : "scale-120"
      }`}
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="w-full flex ">
        <img src={icon} className="w-28 object-contain " alt={icon} />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm font-semibold"> {subTitle}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
    </a>
  );
}

export default Card;
