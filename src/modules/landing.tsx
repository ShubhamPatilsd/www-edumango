import { Navbar } from "../components/Navbar";
import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>
      <div className="md:px-12 px-4 space-y-4 ">
        <h1 className="text-center text-accent-primary text-6xl">EduMango</h1>
        <div className="grid justify-items-center ">
        <div>
        <div className="float-right text-base sm:text-xl space-y-6">
        <div>EduMango is a teaching platform for kids from grades 5-8. We are currently providing eight-week camps over the summer for a variety of subjects and extracurriculars as well.<br/></div>
        <div>We are a group of middle schoolers and high schoolers who are interested in community service. Although we are all experienced in various subjects, we all have one value in common: we cherish the education we obtain every day. With this appreciation, we would like to give back to as many kids as possible.<br/></div>
        <div>Even though all of our classes are going to be taking place online this summer, after the restraints from COVID-19 are expelled, we plan to hold live classes in the future.<br/></div>

        </div>
        </div>
        <div className="bg-svgwave w-full h-32"></div>
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x">
            
            <div className="grid sm:pr-8 sm:leading-none justify-items-center">
                <img src="/school.svg" className="transition transition-delay-15 ease-in-out transform hover:-translate-y-2 w-24 h-24"/>
                <p>filler text</p>
            </div>
            
            <div className="grid sm:px-8 sm:leading-none justify-items-center">
                <img src="/school.svg" className="transition transition-delay-15 ease-in-out transform hover:-translate-y-2 w-24 h-24"/>
                <p>filler text</p>
            </div>
            <div className="grid sm:pl-8 sm:leading-none justify-items-center">
                <img src="/school.svg" className="transition transition-delay-15 ease-in-out transform hover:-translate-y-2 w-24 h-24"/>
                <p>filler text</p>
            </div>
        </div>
          
          </div>
          
        
      
      
    </>
  );
}
