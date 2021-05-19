import { Navbar } from "../components/Navbar";
import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>
      <div className="md:px-12 px-4 space-y-4">
        <h1 className="text-center text-accent-primary text-6xl">EduMango</h1>
        <div className="grid justify-items-center">
        <p className="float-right text-base sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
          dictumst quisque sagittis purus sit amet volutpat. Mattis molestie a
          iaculis at erat pellentesque adipiscing. Sed sed risus pretium quam
          vulputate dignissim suspendisse in. Amet facilisis magna etiam tempor
          orci eu lobortis. Enim ut sem viverra aliquet eget sit amet tellus
          cras. Amet tellus cras adipiscing enim eu turpis. Sit amet tellus cras
          adipiscing enim eu turpis egestas. Ipsum dolor sit amet consectetur
          adipiscing. Massa tempor nec feugiat nisl pretium fusce id. Vitae
          turpis massa sed elementum tempus egestas sed sed. Eleifend mi in
          nulla posuere sollicitudin aliquam ultrices sagittis orci. Libero nunc
          consequat interdum varius sit amet mattis vulputate enim. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
        </p>

        
        <Image
            
            src="/education_pic.svg"
            alt="Learning"
            width={450}
            height={450}
            layout="intrinsic"
            quality={100}
          />
        </div>
        
        
        {
            //make it responsivse 
        }
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x">
            
            <div className="grid pr-8 sm:leading-none justify-items-center">
                <img src="/school.svg" className="transition transition-delay-15 ease-in-out transform hover:-translate-y-2 w-24 h-24"/>
                <p>hahha very funny pp tag</p>
            </div>
            
            <div className="grid px-8 sm:leading-none justify-items-center">
                <img src="/school.svg" className="transition transition-delay-15 ease-in-out transform hover:-translate-y-2 w-24 h-24"/>
                <p>hahha very funny pp tag</p>
            </div>
            <div className="grid pl-8 sm:leading-none justify-items-center">
                <img src="/school.svg" className="transition transition-delay-15 ease-in-out transform hover:-translate-y-2 w-24 h-24"/>
                <p>hahha very funny pp tag</p>
            </div>
        </div>
          
          </div>
          
        
      
      
    </>
  );
}
