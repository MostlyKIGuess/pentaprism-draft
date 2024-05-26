"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    if (selected?.id === card.id) {
      handleOutsideClick();
    } else {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
      
    <div className="w-full h-full p-1 grid grid-cols-3 md:grid-cols-4  max-w-6xl mx-auto gap-4 relative overflow-auto">
    {cards.map((card, i) => (
      <div key={i} className={cn(card.className, "")}>
        <motion.div
          onClick={() => handleClick(card)}
          className={cn(
            card.className,
            "relative overflow-hidden flex flex-col md:flex-row",
            selected?.id === card.id
              ? "rounded-lg cursor-pointer absolute inset-0 h-full w-full sm:max-w-fit sm:max-h-fit md:max-w-none md:max-h-none md:w-3/4  md:w-3/4 m-auto z-50 justify-center items-center"
              : lastSelected?.id === card.id
              ? "z-40 bg-transparent rounded-xl h-full w-full"
              : "bg-transparent rounded-xl h-full w-full"
          )}
          layout
        >
          <BlurImage card={card} />
          {selected?.id === card.id && <SelectedCard selected={selected} />}
        </motion.div>
      </div>
    ))}
    <motion.div
      onClick={handleOutsideClick}
      className={cn(
        "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
        selected?.id ? "pointer-events-auto" : "pointer-events-none"
      )}
      animate={{ opacity: selected?.id ? 0.9 : 0 }}
    />
  </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.src = card.thumbnail;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

   
      if (width > height) {
        if (width > 500) {
          height *= 500 / width;
          width = 500;
        }
      } else {
        if (height > 500) {
          width *= 500 / height;
          height = 500;
        }
      }

      setDimensions({ width, height });
      setLoaded(true);
    };
  }, [card.thumbnail]);

  return (
    <Image
      src={card.thumbnail}
      width={dimensions.width}
      height={dimensions.height}
      layout="responsive"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0.3,
        }}
        animate={{
          opacity: 0.1,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-100 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
        {selected && (
        <a href={selected.thumbnail} download className="mt-5 backdrop-filter backdrop-blur bg-transparent font-bold text-sky-500 hover:text-blue-700">
          Download Image
        </a>
      )}
      </motion.div>
    </div>
  );
};
