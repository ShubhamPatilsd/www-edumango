import React from 'react';
interface CardProps{
    avatar?: string;
    name?: string;
    description?: string;
    position?: string;
}



const Card:React.FC<CardProps> = ({avatar, name, description, position})=>{
    return <div className="shadow-around px-6 py-6 space-y-3 rounded-xl">
          <img className={avatar?"w-24 h-24 rounded-full mx-auto":"hidden"} src={avatar} alt={`${name}'s photo`} width="384" height="512"/>
          <h3 className={name ? "" : "hidden"}>{name}</h3>

          <h5 className={position ? "font-bold" : "hidden"}>{position.replaceAll(/~/g, " · ")}</h5>

          <p className={description ? "" : "hidden"}>{description}</p>
          
    </div>
}

export default Card;