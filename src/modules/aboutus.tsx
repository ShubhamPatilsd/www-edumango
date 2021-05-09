
import {Navbar} from '../components/Navbar';
import Image from 'next/image'
import Card from '../components/Card';

export default function AboutUs() {
  return (
      <>
          <div className="md:px-12 px-4">
            <Navbar/>
          </div>
        
        <div className="text-center">
            <h1>About Us</h1>
                <div className="w-96">
                    <Card/>
                </div>
            </div>
      </>
      
    
  )
}
