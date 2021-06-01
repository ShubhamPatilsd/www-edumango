import { Navbar } from "../components/Navbar";

import CourseCard from "../components/CourseCard";

import CourseCardGroup from "../components/CourseCardGroup"


export default function Courses() {

  const language = [
    {
      courseName: "Spanish 1",
      courseDescription:
        "A fun and exciting class where students will learn the basics of Spanish 1, to help the students excel in their first year of Spanish.",
      startingDate: new Date('June 15, 2021 12:00'),
      grades: [6, 8],
      link: "https://forms.gle/rzB91Am3eFg6xWhH7",
      days: "Tuesdays and Fridays"
    }, 
    {
      courseName: "Spanish 2",
      courseDescription: "Utilizing the concepts learned in Spanish 1, explore the preterite tense, reflexive verbs, demonstrative adjectives, and much more. Needs completion of Spanish 1 in school, or in another accredited source.",
      startingDate: new Date("June 15, 2021 14:00 "),
      grades: [7,9],
      link: "https://forms.gle/5ET2pP4RE635toJS8",
      days: "Tuesdays and Fridays"
    },
    {
      courseName: "French 1",
      courseDescription: "Learning the basics to the most essential lessons, knowing how to speak the beautiful language to the grammar of the Central-European originated dialect, in an interesting and exciting course.",
      startingDate: new Date("June 15, 2021 16:30 "),
      grades: [6, 7],
      link: "https://forms.gle/94gUhKPB9T9SVF2R6",
      days: "Tuesdays"
    }
  ];

  const math = [
    {
      courseName: "Math Grade 5",
      courseDescription:
        "In this interactive, entertaining, and informational class, we will guide the students through many different Grade Five math topics, enabling them to flourish in the future.",
      startingDate: new Date("14 June 2021 14:00 "),
      grades: [5],
      link: "https://forms.gle/W85Lt3wtTaSGDN8r8",
      days: "Mondays and Thursdays"
    },
    {
      courseName: "Math Grade 6",
      courseDescription:
        "A fun filled class preparing students for basic concepts in Pre-Algebra, to help them succeed in Middle school and High School!",
      startingDate: new Date("14 June 2021 15:15 "),
      grades: [6],
      link: "https://forms.gle/w9FPpujdYN6j5T3g7",
      days: "Mondays and Thursdays"
    },
    {
      courseName: "Pre-Algebra",
      courseDescription:
        "An exciting class to get students ready for 7th Grade Math. We will uncover the surface of Pre-Algebra, diving into the most basic and important concepts of Pre-Algebra like inequalities, functions, and more!",
      startingDate: new Date("14 June 2021 18:00 "),
      grades: [7],
      link: "https://forms.gle/mosqHQJmG7P1hhFv9",
      days: "Mondays and Fridays"
    },
    {
      courseName: "Algebra 1",
      courseDescription:
        "In this class, students will learn all about Algebra 1 and the various topics within it. Algebra 1 is the gateway to high school curriculum so taking this class is very beneficial for students' futures!",
      startingDate: new Date("14 June 2021 17:45 "),
      grades: [8],
      link: "https://forms.gle/prRzHPu9x24YRMF17",
      days: "Mondays and Thursdays"
    }, 
  ];

  const engineering = [
    {
      courseName: "Intro to CAD",
      courseDescription:
        "CAD or Computer Aided design is the process of designing things in 3D on your computer. This is so you can visualize the models before you make them in real life. Almost all tech companies use CAD for designing products, which is why it is such a valuable skill to learn.",
      startingDate: new Date("15 June 2021 10:00 "),
      grades: [6, 9],
      link: "https://forms.gle/NcaF7LP9mT22P5Dh7",
      days: "Tuesdays"
    }, 
    {
      courseName: "Intro to Coding",
      courseDescription:
        "This class will get students started with the wonderful realm of coding. Students will learn a lot of concepts in the easiest and simplest way possible and know most of the AP Computer Science curriculum!",
      startingDate: new Date("16 June 2021 16:00 "),
      grades: [6, 9],
      link: "https://forms.gle/sT4zMVfqRiMmZvwV7",
      days: "Wednesdays"
    }, 
  ];

  const ela = [
    {
      courseName: "Literature",
      courseDescription:
        "In this class students will read and study different genres, passages, and written works from different authors, teaching them to apply the concepts we learn into their writing.",
      startingDate: new Date("14 June 2021 10:00 "),
      grades: [6, 8],
      link: "https://forms.gle/5CMCsx2nAve3YeQ3A",
      days: "Mondays"
    }, 
    {
      courseName: "Speech & Debate",
      courseDescription:
        "A brand new course full of great opportunities where students can learn how to perform better in social environments, speak with confidence and present bold speeches. They will also learn how to debate in 2 different styles against each other.",
      startingDate: new Date("18 June 2021 16:30 "),
      grades: [5, 8],
      link: "https://forms.gle/i66BLjNYBdyuJVd38",
      days: "Fridays"
    }, 
  ];




  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6 md:px-12 px-4 md:mb-12 mb-4">
        <h1 className="text-center">Courses</h1>
        <h4 className="text-center">Click any of the courses below to register for that specific class.</h4>
        <p className="text-center">*All of the grades listed are referring to the student's grade for the 2021-2022 school year.</p>

        
          <div className="space-y-6">

          <CourseCardGroup groupTitle = "Language" note="Note: You can only take 1 language class"> 
            {language.map(({ courseName, courseDescription, startingDate, grades, link, days}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link} days={days}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Math"> 
            {math.map(({ courseName, courseDescription, startingDate, grades, link, days}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link} days={days}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "Engineering" > 
            {engineering.map(({ courseName, courseDescription, startingDate, grades, link, days}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link} days={days}/>
              );
              
            })}
            </CourseCardGroup>

            <CourseCardGroup groupTitle = "ELA"> 
            {ela.map(({ courseName, courseDescription, startingDate, grades, link, days}, i) => {
              return (
                  <CourseCard key={i} courseName = {courseName} courseDescription = {courseDescription} startingDate = {startingDate} grades = {grades} link={link} days={days}/>
              );
              
            })}
            </CourseCardGroup>
            
          </div>
      
        </div>
      
    </>
  );
}
