import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import { Button } from "../components/Button";

export default function Landing() {
  return (
    <>
    
      <div className="md:px-12 px-4">
        <Navbar />
      </div>
      
      
      
      <div className="md:px-12 overflow-x-hidden px-4 space-y-6">
        <Fade top>
            <h1 className="text-center text-accent-primary text-6xl">EduMango</h1>
        </Fade>

        
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2">
        <div>
        <Fade bottom>
        <div className="float-right h-full flex items-center text-base sm:text-lg space-y-6">
        <div>
            <div>
                <h3>Empowering Students Through Education</h3>
                <br/>
                <div>EduMango is a teaching platform for kids from grades 5-8. We are currently providing eight-week camps over the summer for a variety of subjects and extracurriculars as well.</div>
                <br/>
                <div>We are a group of middle schoolers and high schoolers who are interested in community service. Although we are all experienced in various subjects, we all have one value in common: we cherish the education we obtain every day. With this appreciation, we would like to give back to as many kids as possible.</div>
                <br/>
                <div>Even though all of our classes are going to be taking place online this summer, after the restraints from COVID-19 are expelled, we plan to hold live classes in the future.<br/></div>
            </div>
            <div className="mt-6 flex space-x-6 items-center">
                <a href="/our-staff"><Button color="secondary">Meet Us</Button></a>
                <a href="/courses"><Button color="secondary">Our Courses</Button></a>
                <a href="https://www.instagram.com/edu_mango_/">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-instagram transition transition-delay-40 ease-in-out transform hover:-translate-y-2" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
            </a>

            <a href="https://www.facebook.com/edumango.edumango/">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-facebook transition transition-delay-40 ease-in-out transform hover:-translate-y-2" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
            </a>

            <a href="https://mail.google.com/mail/u/0/?fs=1&to=contact.edumango@gmail.com&su&tf=cm">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-envelope transition transition-delay-40 ease-in-out transform hover:-translate-y-2" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/></svg>
            </a>
            </div>
            
        </div>

        </div>
        </Fade>
        </div>
        
        
        <Fade right>
        <Image
            
            src="/education_pic.svg"
            alt="Learning"
            width={450}
            height={450}
            layout="intrinsic"
            quality={100}
          />
          </Fade>
        </div>
        
        
        
        
        {
            //make it responsivse 
        }
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x">
            
            <div className="grid sm:pr-8 sm:leading-none justify-items-center">
                <span className="animate-updown material-icons-round icon md-72">psychology</span>
                <p className="text-lg">Empowering Students through education.</p>
            </div>
            
            <div className="grid sm:px-8 sm:leading-none justify-items-center">
                <span className="animate-updown material-icons-round icon md-72">account_balance_wallet</span>
                <p className="text-lg">Free classes with experienced instructors.</p>
            </div>
            <div className="grid sm:pl-8 sm:leading-none justify-items-center">
                <span className="material-icons-round  icon md-72 animate-updown">school</span>
                <p className="text-lg">An organization by students, for students.</p>
            </div>
        </div>

          </div>
          
        
      
      
    </>
  );
}
