import React from 'react';
interface CardProps{
    avatar?: string;
    name?: string;
    description?: string;
    position?: string;
    className?: string;
}



const Card:React.FC<CardProps> = ({avatar, name, description, position, className})=>{
    return <div className={`shadow transition duration-15 ease-in-out hover:shadow-2xl mx-auto px-6 py-6 space-y-3 rounded-xl col-span-1 ${className}`}>
          
                <img className={avatar?"w-32 h-32 rounded-full mx-auto":"hidden"} src={avatar} alt={`${name}'s photo`} width="384" height="512"/>
          
          <h3 className={name ? "" : "hidden"}>{name}</h3>

          <h5 className={position ? "font-bold" : "hidden"}>{position.replace(/~/g, " · ")}</h5>

          <p className={description ? "" : "hidden"}>{description}</p>
          
    </div>
}

export default Card;