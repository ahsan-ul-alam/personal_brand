import Experience from "./components/home/Experience";
import Hero from "./components/home/Hero";
import LatestProjects from "./components/home/Projects";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <LatestProjects />
    </>
  );
}
