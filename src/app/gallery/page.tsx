import { ParallaxScrollDemo } from "./photoscroll";
import { Photoslayout } from "./photos";
export default function Home() {
  return(
    <main>
      <h1 className="text-6xl font-bold text-center mt-20">Our Gallery</h1>
        <Photoslayout />
    </main>
  );
}
