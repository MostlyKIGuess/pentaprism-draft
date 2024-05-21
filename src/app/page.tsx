import Image from "next/image";
import { LampDemo } from "./components/demomalp";
import { BG } from "./components/bg";
import { Intro } from "./components/intro";
import { EventsPage } from "./components/events";
import { Philosophy } from "./components/maskphilosophy";
import { Misccard } from "./components/misccard";

export default function Home() {
  return (
    <main>
      {/* <LampDemo /> */}

      <Intro />
      <EventsPage />
      <Philosophy />
      <Misccard />
      <BG />
    </main>
  );
}
