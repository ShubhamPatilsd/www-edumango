import { Navbar } from "../components/Navbar";

import CourseCard from "../components/CourseCard";

import CourseCardGroup from "../components/CourseCardGroup";

export default function Courses() {
  const language = [
   /* Format for Date: July __ , 2022 00:00 */
   /* Updated the google form links, and make sure to update the Date when courses start and days the courses */
    {
      courseName: "Spanish 1",
      courseDescription:
        "A fun and exciting class where students will learn the basics of Spanish 1, to help the students excel in their first year of Spanish.",
      startingDate: new Date( "July 5 , 2022 9:00"),
      grades: [6, 8],
      link: "https://forms.gle/SjRXQytU2S2ry9jP7",
      days: "Tuesday and Wednesday",
    },
   /* {
      courseName: "Spanish 2",
      courseDescription:
        "Utilizing the concepts learned in Spanish 1, explore the preterite tense, reflexive verbs, demonstrative adjectives, and much more. Needs completion of Spanish 1 in school, or in another accredited source.",
      startingDate: new Date("July 4 , 2022 17:00"),
      grades: [7, 9],
      link: "https://forms.gle/SBkSyNLr2XQym6Mp9",
      days: "Days - TBD",
    }, */
  ]; 

  const math = [
    /* {
      courseName: "Math Grade 5",
      courseDescription:
        "In this interactive, entertaining, and informational class, we will guide the students through many different Grade Five math topics, enabling them to flourish in the future.",
      startingDate: new Date("July 4 , 2022 17:00"),
      grades: [5],
      link: "https://forms.gle/u1eUQKudWEAucp44A",
      days: "Days - TBD",
    }, */
    {
      courseName: "Math Grade 6",
      courseDescription:
        "A fun filled class preparing students for basic concepts in Pre-Algebra, to help them succeed in Middle school and High School!",
      startingDate: new Date("July 5 , 2022 10:00"),
      grades: [6],
      link: "https://forms.gle/sLWEn9KfNfebmKMh6",
      days: "Tuesday",
    },
    /* {
      courseName: "Pre-Algebra",
      courseDescription:
        "An exciting class to get students ready for 7th Grade Math. We will uncover the surface of Pre-Algebra, diving into the most basic and important concepts of Pre-Algebra like inequalities, functions, and more!",
      startingDate: new Date("July 4 , 2022 17:00"),
      grades: [7, 9],
      link: "https://forms.gle/uKAcpBZnNF7jzghY7",
      days: "Days - TBD",
    }, */
    {
      courseName: "Algebra 1",
      courseDescription:
        "In this class, students will learn all about Algebra 1 and the various topics within it. Algebra 1 is the gateway to high school curriculum so taking this class is very beneficial for students' futures!",
      startingDate: new Date("July 4 , 2022 16:00"),
      grades: [8, 9],
      link: "https://forms.gle/p2tUs6KWq9gLEqri6",
      days: "Monday & Wednesday",
    },
  ];

  const engineering = [
    {
      courseName: "Intro to CAD",
      courseDescription:
        "CAD or Computer Aided design is the process of designing things in 3D on your computer. This is so you can visualize the models before you make them in real life. Almost all tech companies use CAD for designing products, which is why it is such a valuable skill to learn.",
      startingDate: new Date("July 5 , 2022 9:00"),
      grades: [6, 9],
      link: "https://forms.gle/mg7kKMjsN1vsSV3X8",
      days: "Tuesday (9-10 am) and Friday (5-6 pm) ",
    },
    {
      courseName: "Intro to Coding",
      courseDescription:
        "This class will get students started with the wonderful realm of coding. Students will learn a lot of concepts in the easiest and simplest way possible and know most of the AP Computer Science curriculum!",
      startingDate: new Date("July 4 , 2022 11:00"),
      grades: [6, 9],
      link: "https://forms.gle/VdYvfg91mAUE6kct5",
      days: "Monday and Thursday",
    },
    {
      courseName: "Python",
      courseDescription:
        "Educating youth about Python, exploring algorithms, loops, and problem solving",
      startingDate: new Date("July 5 , 2022 13:00"),
      grades: [5, 10],
      link: "https://forms.gle/B9GfXnQczqNkbVBy6",
      days: "Tuesday & Thursday",
    },
  ];

  const ela = [
    {
      courseName: "Literature",
      courseDescription:
        "In this class students will read and study different genres, passages, and written works from different authors, teaching them to apply the concepts we learn into their writing.",
      startingDate: new Date("July 6 , 2022 10:00"),
      grades: [6, 9],
      link: "https://forms.gle/rhJGJrqyCoiUkcxM6",
      days: "Wednesday & Thursday",
    },
    {
      courseName: "Speech & Debate",
      courseDescription:
        "A brand new course full of great opportunities where students can learn how to perform better in social environments, speak with confidence and present bold speeches. They will also learn how to debate in 2 different styles against each other.",
      startingDate: new Date("July 4 , 2022 17:00"),
      grades: [5, 9],
      link: "https://forms.gle/snCnF98FLfeK1iDe8",
      days: "Monday and Wednesday",
    },
  ];

  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>
  
      <div className="space-y-6 md:px-12 px-4 md:mb-12 mb-4">
        <h1 className="text-center">Courses</h1>
        <h4 className="text-center">
          Click any of the courses below to register for that specific class.
        </h4>
    {/* Update this year to year */}
        <p className="text-center">
          *All of the grades listed are referring to the student's grade for the
          2022-2023 school year.
        </p>
                    

        <div className="space-y-6">
          <CourseCardGroup
            groupTitle="Language"
            note="Note: You can only take 1 language class"
          >
            {language.map(
              (
                {
                  courseName,
                  courseDescription,
                  startingDate,
                  grades,
                  link,
                  days,
                },
                i
              ) => {
                return (
                  <CourseCard
                    key={i}
                    courseName={courseName}
                    courseDescription={courseDescription}
                    startingDate={startingDate}
                    grades={grades}
                    link={link}
                    days={days}
                  />
                );
              }
            )}
          </CourseCardGroup>

          <CourseCardGroup groupTitle="Math">
            {math.map(
              (
                {
                  courseName,
                  courseDescription,
                  startingDate,
                  grades,
                  link,
                  days,
                },
                i
              ) => {
                return (
                  <CourseCard
                    key={i}
                    courseName={courseName}
                    courseDescription={courseDescription}
                    startingDate={startingDate}
                    grades={grades}
                    link={link}
                    days={days}
                  />
                );
              }
            )}
          </CourseCardGroup>

          <CourseCardGroup groupTitle="Engineering">
            {engineering.map(
              (
                {
                  courseName,
                  courseDescription,
                  startingDate,
                  grades,
                  link,
                  days,
                },
                i
              ) => {
                return (
                  <CourseCard
                    key={i}
                    courseName={courseName}
                    courseDescription={courseDescription}
                    startingDate={startingDate}
                    grades={grades}
                    link={link}
                    days={days}
                  />
                );
              }
            )}
          </CourseCardGroup>

          <CourseCardGroup groupTitle="ELA">
            {ela.map(
              (
                {
                  courseName,
                  courseDescription,
                  startingDate,
                  grades,
                  link,
                  days,
                },
                i
              ) => {
                return (
                  <CourseCard
                    key={i}
                    courseName={courseName}
                    courseDescription={courseDescription}
                    startingDate={startingDate}
                    grades={grades}
                    link={link}
                    days={days}
                  />
                );
              }
            )}
          </CourseCardGroup>
        </div>
      </div>
    </>
  );
}
