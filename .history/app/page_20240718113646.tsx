// import Image from "next/image";
import Hero from "../components/Hero";
import Grid from "../components/Grid";

import { FloatingNav} from "../components/ui/FloatingNav";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid />
        <RecentProjects />
        
        </div>

    </main>
  );
}
