import LatestProjects from "../components/home/Projects";

export const metadata = {
  alternates: {
    canonical: "/portfolio",
  },
};

export default function page() {
  return (
    <>
      <LatestProjects />
    </>
  );
}
