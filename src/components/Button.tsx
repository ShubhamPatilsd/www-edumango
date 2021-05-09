import React from 'react';

const sizeClassnames = {
    big: "py-2 px-6 text-lg rounded-lg",
    small: "px-2 py-1 text-sm rounded-md",
    tiny: "px-1 text-sm rounded-5",
    
};

const colorPalette = {
    primary: "bg-accent-primary hover:bg-accent-primary-darker",
    secondary: "bg-accent-secondary hover:bg-accent-secondary-darker",
    thirdary: "bg-accent-thirdary hover:bg-accent-thirdary-darker"
}

interface ButtonProps{
    size?: keyof typeof sizeClassnames
    color?: keyof typeof colorPalette
    
}

export const Button:React.FC<ButtonProps> = ({
    size="big",
    color="primary",
    ...props
})=>{
    return(
        <div>
        
        <button type="button" className={`transition text-white font-bold duration-300 ease-in-out ${colorPalette[color]} focus:outline-none focus:shadow-outline ${sizeClassnames[size]}`}>{props.children}</button>
        </div>
    )
}