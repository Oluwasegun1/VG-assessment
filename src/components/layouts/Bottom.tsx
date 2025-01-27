import React from "react";

export default function BottomCards() {
  const cards = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: `assets/images/image-retro-pcs.jpg`,
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      image: `assets/images/image-top-laptops.jpg`,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: "assets/images/image-gaming-growth.jpg",
    },
  ];

  return (
    <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.id} className="flex space-x-4 items-start">
          <img
            src={card.image}
            alt={card.title}
            className="w-32 h-full object-cover rounded-lg "
          />
          <div>
            <h4 className="text-2xl font-bold text-red-600">{card.id}</h4>
            <h5 className="text-lg font-semibold text-gray-800 mt-2">
              {card.title}
            </h5>
            <p className="text-gray-600 mt-1">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
