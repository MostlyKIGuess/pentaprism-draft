"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Misccard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Don't force yourself to take pictures when you travel somewhere. Let them flow to you. Look at the scenery, absorb it. Try to imagine the possible shots, and which type will capture the essence you wish to portray. Be creative. Use the surroundings to get something unique. Sometimes, edits are necessary to bring life to your click. Lastly, always remember. Learning photography is an everlasting process. There is always something to learn.",
    name: "Soumil",
    title: "Let it flow",
  },
  {
    quote:
      "Enough talks send pics now ;)",
      name: "Soumil",
    title: "A beautiful whatsapp",
  },
  {
    quote: "Capture the love in photos",
    name: "Roshan",
    title: "Passion",
  },
  {
    quote:
      "Photographs are powerful, because only they can stop time.",
    name: "yajat",
    title: "Well well we are short in time",
  },
{
    quote:
      "I am a camera with its shutter open, quite passive, recording, not thinking.",
    name: "Christopher Isherwood",
    title: "Goodbye to Berlin",
}
];
