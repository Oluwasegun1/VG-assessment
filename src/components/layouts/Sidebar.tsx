import React from "react";

export default function Sidebar() {
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
    <aside className="bg-[#00001a] md:hidden p-6 rounded-lg text-white space-y-6">
      <h3 className="text-2xl font-bold text-yellow-500">New</h3>
      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li key={index}>
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
  );
}
