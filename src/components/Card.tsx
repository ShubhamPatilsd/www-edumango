import React from "react";
interface CardProps {
  avatar: string;
  name: string;
  description: string;
  position: string;
}

const Card: React.FC<CardProps> = ({ avatar, name, description, position }) => {
  return (
    <div className="shadow-md border border-gray-100 hover:shadow-2xl transition transition-delay-15 ease-in-out px-6 py-6 space-y-3 rounded-xl">
      <img
        className={avatar ? "w-32 h-32 border-4 border-accent-primary rounded-full mx-auto" : "hidden"}
        src={avatar}
        alt={`${name}'s photo`}
        
      />

      <h3 className={name ? "" : "hidden"}>{name}</h3>

      <h5 className={position ? "font-bold" : "hidden"}>
        {position.replace(/~/g, " · ")}
      </h5>

      <p className={description ? "" : "hidden"}>{description}</p>
    </div>
  );
};

export default Card;
