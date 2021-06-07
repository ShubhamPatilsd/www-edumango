import React from "react";
interface CardProps {
  logo?: string;
  name: string;
  link?: string;
}

const SponsorCard: React.FC<CardProps> = ({ logo, name, link }) => {
  return (
    <div className="shadow-md flex items-center justify-center border border-gray-100 hover:shadow-2xl transition transition-delay-15 ease-in-out px-6 py-6 space-y-3 rounded-xl">
        
    <div>
      <img
        className={logo ? "mx-auto" : "hidden"}
        src={logo}
        alt={`${name}'s logo`}
        
      />

      <h3 className={name ? "flex justify-center" : "hidden"}>{name}</h3>
      <div className={link ? "text-gray-600 flex justify-end  items-start space-x-2" : "hidden"}>
        <p className="font-bold">Website</p>
        <a href={link} target="_blank">
            <span className="material-icons-round">open_in_new</span>
        </a>
      </div>

      
      </div>
      
    </div>
  );
};

export default SponsorCard;
