'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import  Card  from "./Card";
import { movies } from "../data/movies";
import { cities } from "../data/city";
import { dates } from "../data/date";
import CardNoImage from "./CardNoImage";

let tabs = [
  { id: "movie", label: "Movies" },
  { id: "city", label: "City" },
  { id: "date_activity", label: "Date Activity" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col items-center">
      {/* Tabs */}
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative rounded-full px-3 py-1.5 text-sm font-medium text-black transition outline-sky-400 focus-visible:outline-2 ${
              activeTab === tab.id ? "text-white" : ""
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-[#AC1754]"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === "movie" && (<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
            <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
            >
                <Card
                title={movie.title}
                description={movie.description}
                imageUrl={movie.imageUrl}
                />
            </motion.div>
        ))}
      </div>)}

      {activeTab === "city" && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, index) => (
            <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
            >
                <Card
                title={city.title}
                description={city.description}
                imageUrl={city.imageUrl}
                />
            </motion.div>
            ))}
        </div>
        )}

    {activeTab === "date_activity" && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dates.map((date, index) => (
            <motion.div
                key={date.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
            >
                <CardNoImage
                title={date.title}
                description={date.description}
                />
            </motion.div>
            ))}
        </div>
        )}
    </div>
  );
}
