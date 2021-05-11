import { Navbar } from "../components/Navbar";

import CourseCard from "../components/CourseCard";

import CourseCardGroup from "../components/CourseCardGroup"


export default function Courses() {

  const language = [
    {
      courseName: "Spanish 1",
      courseDescription:
        "PlaceHolder Decriptiom",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
    {
      courseName: "Spanish 2",
      courseDescription: "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    },
    {
      courseName: "French 1",
      courseDescription: "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }
  ];

  const math = [
    {
      courseName: "Math Grade 5",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [5, 7]
    },
    {
      courseName: "Math Grade 6",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [5, 7]
    },
    {
      courseName: "Pre-Algebra",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [5, 7]
    },
    {
      courseName: "Algebra 1",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [5, 7]
    }, 
  ];

  const engineering = [
    {
      courseName: "Intro to CAD",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
    {
      courseName: "Intro to Coding",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
  ];

  const ela = [
    {
      courseName: "Literature",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
    {
      courseName: "Speech and Debate",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
  ];

  const extraCirricular = [
    {
      courseName: "Video Editing",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
    {
      courseName: "Chess",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 7]
    }, 
  ];




  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6">
        <h1 className="text-center">Courses</h1>
        <h4 className="text-center">All of the Grades listed are referring to the student's grade for the 2021-2022 school year.</h4>

        
          <div className="md:px-12 px-4 space-y-6">

          <CourseCardGroup groupTitle = "Language" > 
            {language.map(({ courseName, courseDescription, startingDate, grades}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Math"> 
            {math.map(({ courseName, courseDescription, startingDate, grades}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Engineering" > 
            {engineering.map(({ courseName, courseDescription, startingDate, grades}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "ELA"> 
            {ela.map(({ courseName, courseDescription, startingDate, grades}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Extra Curricular"> 
            {extraCirricular.map(({ courseName, courseDescription, startingDate, grades}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades}/>
              );
              
            })}
            </CourseCardGroup>
            
          </div>
      
        </div>
      
    </>
  );
}