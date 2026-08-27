import { Hero } from "../components/sections/Hero";
import { Admission } from "../components/sections/Admission";
import { Stats } from "../components/sections/Stats";
import { News } from "../components/sections/News";
import { StudentLife } from "../components/sections/StudentLife";
import { Science } from "../components/sections/Science";
import { QuickAccess } from "../components/sections/QuickAccess";
import { Partners } from "../components/sections/Partners";

export function Home() {
  return (
    <>
      <Hero />
      <Admission />
      <Stats />
      <News />
      <StudentLife />
      <Science />
      <QuickAccess />
      <Partners />
    </>
  );
}
