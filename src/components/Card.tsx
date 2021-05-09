import React from 'react';
interface CardProps{
    avatar?: string;
    name?: string;
    description?: string;
    position?: string;
}



const Card:React.FC<CardProps> = ()=>{
    return <div className="shadow-xl">
        hi
    </div>
}

export default Card;