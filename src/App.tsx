import React from "react";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import MainPage from "./components/layouts/Mainlayout";
import BottomCards from "./components/layouts/Bottom";

export default function App() {
  return (
    <div className="bg-[#f9fafb] min-h-screen px-4 py-6 lg:px-12 lg:py-12 border border-[red]">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-3">
          <MainPage />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </main>
      <BottomCards />
    </div>
  );
}
