import { Navbar } from "../components/Navbar";

import CourseCard from "../components/CourseCard";

import CourseCardGroup from "../components/CourseCardGroup"


export default function Courses() {
  const CS = [
    {
      courseName: "Intro to CAD",
      courseDescription:
        "yeet",
      startingDate: new Date("05 October 2011"),
    }, 
    {
      courseName: "Intro to CS",
      courseDescription: "CS",
      startingDate: new Date("010 December 2005")
    }
  ];

  const Math = [
    {
      courseName: "Algebra 1",
      courseDescription:
        "Maffs",
      startingDate: new Date("05 October 2011"),
    }, 
    {
      courseName: "CC3",
      courseDescription: "Maffs bad",
      startingDate: new Date("010 December 2005")
    }
  ];

  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6">
        <h1 className="text-center">Courses</h1>

        
          <div className="md:px-12 px-4 space-y-6">
            <CourseCardGroup groupTitle = "CS" > 
            {CS.map(({ courseName, courseDescription, startingDate}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate}/>
              );
              
            })}
            </CourseCardGroup>
            
            <CourseCardGroup groupTitle = "Math"> 
            {Math.map(({ courseName, courseDescription, startingDate}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate}/>
              );
              
            })}
            </CourseCardGroup>
          </div>
      
        </div>
      
    </>
  );
}