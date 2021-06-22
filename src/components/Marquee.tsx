import React from "react"
import MarqueeCard from "./MarqueeCard";


/*this data is JUST TO FILL THE MARQUEE IN for now. 
these are not real testimonials and serve to just
fill in space and data. None of these peoples are real
and these testimonials are not real testimonials as well. 
*/
const quotes = [
    {
        testimonial: "Edumango is good",
        name: "Jane Doe"
    },
    {
        testimonial: "Great teachers!",
        name: "John Doe"
    },
    {
        testimonial: "I learned so much!",
        name: "Jane Doe"
    },
    {
        testimonial: "The curriculum is pretty fun!",
        name: "John Doe"
    },
    {
        testimonial: "Edumango is cool",
        name: "Jane Doe"
    },
    {
        testimonial: "Staff is nice!",
        name: "John Doe"
    },
    {
        testimonial: "Superb teachers",
        name: "Jane Doe"
    },
    {
        testimonial: "So good that I forgot I didn't know the subject!",
        name: "John Doe"
    },
    {
        testimonial: "Wow I learned a lot",
        name: "Jane Doe"
    },
    {
        testimonial: "Edumango is goated!",
        name: "John Doe"
    },


]


const Marquee = ()=>{
    return <div className="flex whitespace-no-wrap overflow-x-hidden">
            <div className="relative">
              <ul className="flex animate-marquee">
                {quotes.map((quote, i)=>{return <li className="m-4"><MarqueeCard testimonial={quote.testimonial} name={quote.name}/></li>})}
              </ul>
              <ul className="flex absolute top-0 animate-marquee2">
              {quotes.map((quote, i)=>{return <li className="m-4"><MarqueeCard testimonial={quote.testimonial} name={quote.name}/></li>})}
              </ul>
            </div>
              </div>
  
    
    
    
}

export default Marquee;