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
  return (
    <div className="text-left shadow-around px-6 py-6 space-y-3 rounded-xl shadow-md hover:shadow-2xl transition transition-delay-15 ease-in-out">
      <h3 className={courseName ? "" : "hidden"}>{courseName}</h3>

      <h5
        className={
          startingDate ? "font-bold flex items-center space-x-2" : "hidden"
        }
      >
        <img src="/event_icon.svg" />
        <p>{`${
          numberToMonth[startingDate.getMonth()]
        } ${startingDate.getDay()}, ${startingDate.getFullYear()} PST`}</p>
      </h5>

      <p className={courseDescription ? "" : "hidden"}>{courseDescription}</p>
    </div>
  );
};

export default CourseCard;
