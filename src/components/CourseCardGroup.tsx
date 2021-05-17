import React from "react";

interface CourseCardGroupProps {
  groupTitle: string;
  note?: string;
}

//put calendar icon

const CourseCardGroup: React.FC<CourseCardGroupProps> = ({
  groupTitle,
  note,
  children,
}) => {
  return (
    <div>
      <h2 className="text-accent-primary">{groupTitle}</h2>
      <em className={note ? "" : "hidden"}>{note}</em>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
};

export default CourseCardGroup;
