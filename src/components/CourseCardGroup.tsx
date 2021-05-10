import React from "react";

interface CourseCardGroupProps {
  groupTitle: string;
}

//put calendar icon

const CourseCardGroup: React.FC<CourseCardGroupProps> = ({
  groupTitle,
  children,
}) => {
  return (
    <div>
      <h2>{groupTitle}</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
};

export default CourseCardGroup;
