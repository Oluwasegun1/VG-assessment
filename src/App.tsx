import React from "react";
import Header from "./components/layouts/Header";
import MainPage from "./components/layouts/Mainlayout";

export default function App() {
  return (
    <div className="bg-[#f9fafb] min-h-screen px-4 py-6 lg:px-12 lg:py-12">
      <Header />
      <MainPage />
    </div>
  );
}
