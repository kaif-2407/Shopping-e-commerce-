import React, { useEffect, useState } from "react";

const message = [
  "Get 15% off your first purchase",
  "Free shipping on orders above $99",
  "New arrivals are live now",
];
const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % message.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#EAE1F5] text-black p-3">
      <div className="flex items-center justify-center gap-2 h-10 text-md font-medium">
        <span className="transition-opacity duration-500">
          {message[index]}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
