
import {Navbar} from '../components/Navbar';
import Image from 'next/image'
import Card from '../components/Card';

export default function AboutUs() {
  return (
      <>
          <div className="md:px-12 px-4">
            <Navbar/>
          </div>
        
        <div className="text-center space-y-6">
            <h1>About Us</h1>
                <div className="w-96 mx-auto">
                    <Card name="Shubham" avatar="https://cdn.discordapp.com/avatars/705186859105386517/9a49b9a6b096cbf6b41769ca6a2d8893.webp?size=128" description="Very cool gamer" position="Intro to Coding~Co-Website dev"/>
                </div>
            </div>
      </>
      
    
  )
}
