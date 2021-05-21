import React from "react";
import { Button } from "./Button";

//make link mandatory
interface CourseCardProps {
  courseName: string;
  courseDescription: string;
  startingDate: Date;
  grades: number[];
  link?: string;
  days: string;
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
  grades,
  link,
  days
}) => {
  function AMPMTime(){
    
   if(startingDate.getHours()>12){
      let nonMillitaryTime: number = startingDate.getHours()-12;
      return `${numberToMonth[startingDate.getMonth()]} ${startingDate.getDate()}, ${startingDate.getFullYear()} at ${nonMillitaryTime}:${startingDate.getMinutes()} PM (${Intl.DateTimeFormat().resolvedOptions().timeZone})`
    }else{
      return `${numberToMonth[startingDate.getMonth()]} ${startingDate.getDate()}, ${startingDate.getFullYear()} at ${startingDate.getHours().toString()}:${startingDate.getMinutes()} AM (${Intl.DateTimeFormat().resolvedOptions().timeZone})`
    }
    
  }
  return (
    
    <div className="text-left px-6 py-6 space-y-3  rounded-xl shadow-md border border-gray-100 hover:shadow-2xl transition transition-delay-15 ease-in-out h-full">
      <h3 className={courseName ? "" : "hidden "}>{courseName}</h3>

      <h5
        className={
          startingDate ? "font-bold flex items-center space-x-2" : "hidden"
        }
      >
        <span className="material-icons-round icon">event</span>
        
        <p>{startingDate.toLocaleString('en-US',{dateStyle:"long", timeStyle:"short"})}</p>
      </h5>
      <p>{days}</p>
      <p className="uppercase font-bold text-sm text-gray-600">{grades.length==1 ? `Grade ${grades[0]}`:`Grades ${Math.min(...grades)}-${Math.max(...grades)}`}</p>
      <div><a href={link ? link: null} target="_blank"><Button size="small"  color="thirdary">Register</Button></a></div>
      <p className={courseDescription ? "" : "hidden"}>{courseDescription}</p>

      
        
    
      
      
    </div>
    
  );
};

export default CourseCard;
