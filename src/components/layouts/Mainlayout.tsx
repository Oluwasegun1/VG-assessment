import React from "react";
import BottomCards from "./Bottom";

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
    <section className="max-w-8xl mx-auto grid gap-8 md:grid-cols-3">
      {/* Main Image + Content */}
      <div className="md:col-span-2 grid gap-6">
        <div className="flex justify-center">
          <img
            src="/assets/images/image-web-3-desktop.jpg"
            alt="Abstract colorful blocks representing Web 3.0"
            className="w-full max-w-[700px] md:max-w-full rounded-lg object-cover"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <h2 className="text-4xl font-bold md:text-5xl">
            The Bright Future of Web 3.0?
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="w-fit leading-loose uppercase text-black transition-all ease-in-out duration-300 hover:text-white hover:bg-black px-6 py-2 rounded bg-red-500">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <aside className="bg-[#00001a] text-white rounded-lg p-6 space-y-8">
        <h3 className="text-2xl font-bold text-yellow-500">New</h3>
        <ul className="space-y-8">
          {articles.map((article, index) => (
            <li key={index} className="border-b border-gray-600 pb-4">
              <a
                href="/"
                className="text-lg font-semibold hover:text-yellow-400"
              >
                {article.title}
              </a>
              <p className="text-gray-400 text-sm">{article.description}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Bottom Cards */}
      <BottomCards />
    </section>
  );
}
