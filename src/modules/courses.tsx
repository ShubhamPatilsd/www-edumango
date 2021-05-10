import { Navbar } from "../components/Navbar";

import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>
      <div className="">
        <div className="text-center">
          <h1>Courses</h1>
        </div>

        <div>
          <h2>Computer Science</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <CourseCard
              courseName="Intro to CAD"
              courseDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat. Mattis molestie a iaculis at erat pellentesque adipiscing."
              startingDate={new Date("05 October 2011")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
