
import React from 'react';
import {Button} from './Button';
import Image from 'next/image';

export const Navbar:React.FC = ()=>{
    return (
    
        <nav className="flex items-center justify-between py-8">
      
        <a>
          
          <Image src="/edumango-logo.svg" alt="Learning" width={200} height={49} layout="intrinsic" quality={100}/>
        </a>
      
      <ul className="flex items-center space-x-6 md:space-x-10">
        <li>
        <a href="#" className="text-accent-secondary"><h4>My Courses</h4></a>
        </li>
        <li>
            <Button color="thirdary">Login</Button>
        </li>
      </ul>
    </nav>
    //   <nav className="flex space-x-4 justify-between items-center px-4">
        
        
    //     <a href="#" className="text-accent-secondary"><h6>My Courses</h6></a>
    //       <h3 className="font-black text-accent-primary">EduMango</h3>
          
          
    //       <Button color="thirdary">Login</Button>

          
        
    //   </nav>
     
    )
  }
  