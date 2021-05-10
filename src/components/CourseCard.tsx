import React from "react";

interface CourseCardProps {
  courseName: string;
  courseDescription: string;
  startingDate?: Date;
}

const numberToMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];



//put calendar icon

const CourseCard: React.FC<CourseCardProps> = ({
  courseName,
  courseDescription,
  startingDate,
}) => {
  function AMPMTime(){
    let result: string = "";
    if(startingDate.getHours()>12){
      let nonMillitaryTime: number = startingDate.getHours()-12;
      result = `${numberToMonth[startingDate.getMonth()]} ${startingDate.getDay()}, ${startingDate.getFullYear()} at ${nonMillitaryTime}:${startingDate.getMinutes()} PM (PST)`
    }else{
      result = `${numberToMonth[startingDate.getMonth()]} ${startingDate.getDay()}, ${startingDate.getFullYear()} at ${startingDate.getHours().toString()}:${startingDate.getMinutes()} AM (PST)`
    }
    return result
  }
  return (
    <div className="text-left px-6 py-6 space-y-3 rounded-xl shadow-md hover:shadow-2xl transition transition-delay-15 ease-in-out">
      <h3 className={courseName ? "" : "hidden"}>{courseName}</h3>

      <h5
        className={
          startingDate ? "font-bold flex items-center space-x-2" : "hidden"
        }
      >
        <img src="/event_icon.svg" />


        <p>{AMPMTime()}</p>
      </h5>

      <p className={courseDescription ? "" : "hidden"}>{courseDescription}</p>
    </div>
  );
};

export default CourseCard;
