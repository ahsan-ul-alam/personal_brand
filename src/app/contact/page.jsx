import Contact from "../components/home/Contact";

export const metadata = {
  alternates: {
    canonical: "/contact",
  },
};

export default function page() {
  return (
    <>
      <div className="mt-0 md:mt-[-75px]"></div>
      <Contact />
    </>
  );
}
