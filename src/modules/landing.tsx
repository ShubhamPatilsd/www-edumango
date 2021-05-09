
import {Navbar} from '../components/Navbar';
import Image from 'next/image'

export default function Landing() {
  return (
      <>
        <div className="md:px-12 px-4">
        <Navbar/>
        </div>
        <div className="md:px-12 px-4 block justify-center space-y-4">
        <h3>EduMango</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat. Mattis molestie a iaculis at erat pellentesque adipiscing. Sed sed risus pretium quam vulputate dignissim suspendisse in. Amet facilisis magna etiam tempor orci eu lobortis. Enim ut sem viverra aliquet eget sit amet tellus cras. Amet tellus cras adipiscing enim eu turpis. Sit amet tellus cras adipiscing enim eu turpis egestas. Ipsum dolor sit amet consectetur adipiscing. Massa tempor nec feugiat nisl pretium fusce id. Vitae turpis massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
        <div className="grid justify-items-center">
        
        <Image src="/learning-tree.svg" alt="Learning" width={500} height={500} layout="intrinsic" quality={100}/>
        </div>

        </div>
      </>
      
    
  )
}
