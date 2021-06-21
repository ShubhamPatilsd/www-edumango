import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";


export default function Landing() {
  return (
    <>
    
      <div className="md:px-12 px-4">
        <Navbar />
      </div>
      
 
      
      <div className="md:px-12 overflow-x-hidden px-4 space-y-6 pb-4 md:pb-12">
        <Fade top>
            <h1 className="text-center text-accent-primary text-6xl">EduMango</h1>
        </Fade>

        
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2">

        <div className="sm:hidden flex items-center"> 
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
        <div>
        <Fade bottom>
        <div className="float-right h-full flex items-center text-base sm:text-lg space-y-6">
        <div>
            <div>
                <h3 className="left text-2xl sm:text-3xl">Empowering Students Through Education</h3>
                <br/>
                <div>EduMango is a student-built teaching platform aiming to educate all students, free of cost. This summer, we are providing eight week camps for students rising into Grades 5-9. Our classes include a variety of academic school subjects and extracurriculars as well.</div>
                <br/>
                <div>We are a group of middle schoolers and high schoolers who are interested in community service. Although we are all experienced in various subjects, we all have one value in common: we cherish the education we obtain every day. With this appreciation, we would like to give back to as many kids as possible.</div>
                <br/>
                <div>Even though all of our classes are going to be taking place online this summer, after the restraints from COVID-19 are expelled, we plan to hold live classes in the future.<br/></div>
            </div>
            <div>
                <div className="mt-6 flex space-x-6 items-center">
                    <a href="/our-team"><Button color="secondary">Meet Us</Button></a>
                    <a href="/courses"><Button color="secondary">Our Courses</Button></a>
                
                </div>

                <div className="mt-6 flex space-x-6 items-center">
                    <a href="https://www.instagram.com/edu_mango_/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-instagram transition transition-delay-15 ease-in-out transform hover:-translate-y-1" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/EduMango-101718798787000/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-facebook transition transition-delay-15 ease-in-out transform hover:-translate-y-1" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
                    </a>
                  <a href="https://twitter.com/edu_mango" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-twitter transition transition-delay-15 ease-in-out transform hover:-translate-y-1" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                  </a>
                    <a href="mailto:contact.edumango@gmail.com" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-envelope transition transition-delay-15 ease-in-out transform hover:-translate-y-1" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/></svg>
                    </a>
                </div>
            </div>
            
        </div>

        </div>
        </Fade>
        </div>
        
        <div className="hidden sm:flex align-middle"> 
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
        
        </div>
        
        <div className="space-y-6">
            <div className="text-left divide-y sm:divide-y-0 sm:divide-x">
                
                <div className="animate-marquee">
                  
            <div >
              <table>
                <tr className="height:10px">
                  <td>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">10 Courses</h2>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">4 Subjects</h2>


                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">16 Classes per Week</h2>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">100 students enroled</h2>

                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">4 Sponsors</h2>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">16 Instructors</h2>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="card m-2 cursor-pointer 
        border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 
        transform hover:-translate-y-1 
        transition-all duration-200">
                      <div className="m-3">
                        <h2 className="text-lg mb-2">128 total hours of teaching</h2>
                      </div>
                    </div>
                  </td>

                </tr>


              </table>
            </div>

                </div>
            </div>
              </div>


              <div className="relative flex overflow-x-hidden">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx- 4">Marquee Item 5</span>
  </div>
</div> 
        
        
        <Fade top>
        <div className="space-y-6">
            <h3 className=" text-2xl sm:text-3xl">Our principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x">
            
                <div className="grid pb-8 sm:pb-0 sm:pr-8 leading-none justify-items-center">
                    <span className="animate-updown material-icons-round icon md-48 sm:md-72">psychology</span>
                    <h4 className="text-lg sm:text-xl">Empowering Students through Education</h4>
                    <p className="text-base sm:text-md">We focus on making our students stronger, and more confident about what they learn. </p>
                </div>
            
                <div className="grid py-8 sm:py-0 px-8 leading-none justify-items-center">
                    <span className="animate-updown material-icons-round icon md-48 sm:md-72">face</span>
                    <h4 className="text-lg sm:text-xl">Experienced Instructors</h4>
                    <p className="text-base sm:text-md">All of our instructors are dedicated and are experienced in the subjects they teach, and are passionate about teaching as well.</p>
                </div>
                
                <div className="grid pt-8 sm:pt-0 sm:pl-8 leading-none justify-items-center">
                    <span className="material-icons-round  icon md-48 sm:md-72 animate-updown">school</span>
                    <h4 className="text-lg sm:text-xl">An organization by students for students.</h4>
                    <p className="text-base sm:text-md">All of our staff are students in middle school and high school that have a common goal to spread their passions to as many children as possible, free of cost.</p>
                </div>
            </div>
              </div>
              </Fade>
        </div>

       {/* Add marquee */}


        <Fade bottom>
        <div className="mt-6 bg-gradient-to-r from-accent-primary to-accent-primary-vibrant py-6 flex justify-center items-center">
          
          
            <div className=" bg-white rounded-xl hover:shadow-2xl transition transition-delay-15 ease-in-out shadow-lg p-4 md:p-12">
                <div>
                <h3 className="text-xl sm:text-2xl mb-6">Thank you to our web developers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="flex justify-center items-center space-y-6">
                    <div>
                      <img className="rounded-full w-24 h-24" src="https://cdn.discordapp.com/attachments/832365353660317726/841460312048795668/person.png"/>
                        <p>Shubham Patil</p>
                    </div>
                    </div>
          
                    <div className="flex justify-center items-center text-center space-y-6">
                      <div>
                        <img className="rounded-full w-24 h-24" src="https://media.discordapp.net/attachments/832365353660317726/841455861925937242/unknown.png"/>
                        <p>Nikhil Mehta</p>
                      </div>
                    </div>
          
                </div>
          
                </div>
                <div className="flex justify-center mt-6">
                      <div className="text-center">
                        <h5 className="mb-3 font-bold text-xl">Want a website similar to this?</h5>
                        <a href="mailto:shubhampatilsd@gmail.com, nikhilsmehta7@gmail.com" target="_blank"><Button color="secondary">Contact Us</Button></a>
                      </div>
          
                </div>
            </div>
        </div>
      </Fade>

        

      <Footer/>     
        
    </>
  );
}
