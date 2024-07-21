// import Image from "next/image";
import Hero from "../components/Hero";
import Grid from "../components/Grid";

import { FloatingNav} from "../components/ui/FloatingNav";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>
    </main>
  );
};

export default Home;