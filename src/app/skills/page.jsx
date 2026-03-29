import Experience from "../components/home/Experience";

export const metadata = {
  alternates: {
    canonical: "/skills",
  },
};

export default function page() {
  return (
    <>
      <div className="mt-[-30px]"></div>
      <Experience />
    </>
  );
}
