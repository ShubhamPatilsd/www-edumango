import { Navbar } from "../components/Navbar";

export default function Donation() {
  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6 md:px-12 px-4 md:mb-12 mb-4">
        <h1 className="text-center text-accent-primary text-6xl">
          Support Edumango
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          molestias repudiandae incidunt repellat veniam aut cumque soluta optio
          modi omnis rerum tempora praesentium architecto error laboriosam
          deleniti esse minima iste!
        </p>
      </div>
    </>
  );
}
