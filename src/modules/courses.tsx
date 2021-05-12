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
      grades: [6, 7],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
    {
      courseName: "Spanish 2",
      courseDescription: "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [7, 8],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      courseName: "French 1",
      courseDescription: "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [6, 7],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const math = [
    {
      courseName: "Math Grade 5",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [5],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      courseName: "Math Grade 6",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [6],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      courseName: "Pre-Algebra",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [7],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      courseName: "Algebra 1",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 1:30 PM"),
      grades: [8],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
  ];

  const engineering = [
    {
      courseName: "Intro to CAD",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 8],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
    {
      courseName: "Intro to Coding",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [6, 8],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
  ];

  const ela = [
    {
      courseName: "Literature",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [6, 7],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
    {
      courseName: "Speech & Debate",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 8],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
  ];

  const extraCurricular = [
    {
      courseName: "Video Editing",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 8],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 
    {
      courseName: "Chess",
      courseDescription:
        "PlaceHolder Description",
      startingDate: new Date("05 October 2011 11:30"),
      grades: [5, 8],
      link: ""
    }, 
  ];




  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6 md:mb-12 mb-4">
        <h1 className="text-center">Courses</h1>
        <h4 className="text-center">Click any of the courses below to register for that specific class.</h4>
        <p className="text-center">*All of the grades listed are referring to the student's grade for the 2021-2022 school year.</p>

        
          <div className="md:px-12 px-4 space-y-6">

          <CourseCardGroup groupTitle = "Language" note="Note: You can only take 1 language class"> 
            {language.map(({ courseName, courseDescription, startingDate, grades, link}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Math"> 
            {math.map(({ courseName, courseDescription, startingDate, grades, link}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Engineering" > 
            {engineering.map(({ courseName, courseDescription, startingDate, grades, link}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "ELA"> 
            {ela.map(({ courseName, courseDescription, startingDate, grades, link}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Extra Curricular"> 
            {extraCurricular.map(({ courseName, courseDescription, startingDate, grades, link}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link}/>
              );
              
            })}
            </CourseCardGroup>
            
          </div>
      
        </div>
      
    </>
  );
}