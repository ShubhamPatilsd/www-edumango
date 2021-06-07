import { Navbar } from "../components/Navbar";
import SponsorCard from "../components/SponsorCard";


export default function Sponsors() {

    const sponsors = [
        {
            logo:"https://cdn.discordapp.com/attachments/832365353660317726/851153743231057960/unknown.png",
            name: "Coconut Hill",
            link:"https://coconuthill.com/"
        },
        {
            name:"Lovely Sweets & Snacks",
            link: "http://lovelysweets.synthasite.com/"
        }
    ]
  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6 md:px-12 px-4 md:mb-12 mb-4">
        <h1 className="text-center text-accent-primary text-6xl">Our Sponsors</h1>
        
        <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {sponsors.map((sponsor, i)=>{
            return <SponsorCard logo={sponsor.logo} key={i} name={sponsor.name} link={sponsor.link}/>
        })}
        
        </div>
        
          
        </div>
    </>
  )
}
