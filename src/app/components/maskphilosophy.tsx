"use client";
import { MaskContainer } from "./ui/mask-container";

export function Philosophy() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Our Philosophy
      </h2>
      <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="max-w-6xl mx-auto  flex text-slate-800 text-center text-4xl font-bold items-center justify-center">
              The first rule of Pentaprism is you do not talk about Pentaprism. The
              second rule of Pentaprism is you DO NOT talk about Pentaprism.
            </p>
          }
          className="h-[40rem] border rounded-md"
        >
          
          The first rule of <span className="text-red-500">Pentaprism</span> is you
          do not talk about Pentaprism. The second rule of Pentaprism is you DO NOT
          talk about <span className="text-red-500">Pentaprism</span>.
        </MaskContainer>  
      </div>
    </div>
  );
}