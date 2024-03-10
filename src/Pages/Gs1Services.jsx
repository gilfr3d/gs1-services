import React from "react";
import { Images } from "../assets/Index";
import Card from "../components/Card";
import { data } from "../services/data";

function Gs1Services() {
  return (
    <section className="bg-[rgb(242,249,249)]">
      {/* header  */}
      <div className=" bg-[#0D117F] flex justify-between px-5 text-white">
        <div className="flex items-center justify-center gap-5">
          <h1 className="font-bold text-4xl font-sans py-3">GS1 Services</h1>
          <h3 className="text-center text-lg font-bold hidden md:block">
            Powered by GS1 Standards
          </h3>
        </div>
        <img
          src={Images.HeaderLogo}
          className=" w-24 object-contain"
          alt="gs1Integration"
        />
      </div>

      {/* main content */}
      <main className=" w-full h-full p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            subTitle={data.subTitle}
            desc={data.desc}
            icon={data.icon}
            link={data.link}
          />
        ))}
      </main>

      {/* footer */}
      <footer className="flex justify-end mx-10 pb-10">
        <img
          src={Images.footerLogo}
          className=" w-24 object-contain"
          alt="gs1Integration"
        />
      </footer>
    </section>
  );
}

export default Gs1Services;


