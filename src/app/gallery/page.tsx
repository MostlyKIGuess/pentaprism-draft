import { ParallaxScrollDemo } from "./photoscroll";
import { Photoslayout } from "./photos";
import Link from "next/link";

export default function Home() {
  return(
    <main>
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      <div className="flex flex-row items-center justify-center mt-10">
  <Link href="/">
    <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative">
      <span>Home</span>
      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
    </button>
  </Link>
  <h1 className="text-6xl font-bold text-center ml-10">Our Gallery</h1>
</div>
        <Photoslayout />
        </div>
    </main>
  );
}
