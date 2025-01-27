import React from "react";
// import {  CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

export default function MainPage() {
  const articles = [
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <section>
      <div className="flex gap-4">
        <img
          src="/assets/images/image-web-3-desktop.jpg"
          alt="Colorful Blocks"
          className="w-full  rounded-t-lg"
        />
        <aside className="bg-[#00001a] hidden h-full md:block p-6 rounded-lg text-white space-y-6 pb-7">
          <h3 className="text-2xl font-bold text-yellow-500">New</h3>
          <ul className="space-y-12">
            {articles.map((article, index) => (
              <li key={index} className="border-b mb-10">
                <a
                  href="/"
                  className="block text-lg font-semibold hover:text-yellow-400"
                >
                  {article.title}
                </a>
                <p className="text-sm text-gray-400">{article.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="bg-white flex">
        <div className="p-6 md:flex md:gap-28">
          <h2 className="text-4xl md:text-5xl md:max-w-[300px] font-bold mb-4">
            The Bright Future of Web 3.0?
          </h2>
          <div>
            <p className="text-gray-700 mb-6 w-full md:max-w-[400px]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
