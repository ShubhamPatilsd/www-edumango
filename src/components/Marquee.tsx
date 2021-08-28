import React from "react";
import MarqueeCard from "./MarqueeCard";

/*this data is JUST TO FILL THE MARQUEE IN for now. 
these are not real testimonials and serve to just
fill in space and data. None of these peoples are real
and these testimonials are not real testimonials as well. 
*/
const quotes = [
  {
    testimonial:
      "I liked the way that the teachers made sure we understood and they challenging explained and gave examples.",
  },
  {
    testimonial:
      "My daughter enjoyed the classes very much and I was very satisfied with how much she learned during the courses. Thanks!",
  },
  {
    testimonial: "It was amazing!",
  },
  {
    testimonial: "The classes were good and informational.",
  },
  {
    testimonial: "Nice Classes, taught the basics very well.",
  },
  {
    testimonial:
      "I don't have any feedback or things that could have been better. Everything went well!",
  },
  {
    testimonial: "They really did a good job.",
  },
  {
    testimonial: "Learned numbers, emotions etc in Spanish",
  },
  {
    testimonial: "Thanks a lot for your effort and dedication.",
  },
  {
    testimonial:
      "I really cannot find any flaws in your classes. I thoroughly enjoyed all of them !",
    name: "Smriti Shriram",
  },
  {
    testimonial:
      "I really liked the classes that I attended, because they all had straightforward and basic topics that helped me learn Spanish better, and everything was perfect.",
    name: "Jahaan A. Jivani",
  },
  {
    testimonial:
      "They teach very nicely and my child has definitely used his knowledge at home.",
  },
  {
    testimonial:
      "My child learns a lot from the classes and is definitely having fun there as well.",
  },
  {
    testimonial:
      "The class was very good and interesting. The teacher taught in an interesting way. We can do more games next time.",
    name: "Kavitha Chakrapaniraja",
  },
  {
    testimonial:
      "I am very happy I enrolled my son it was useful as they went through some important topics.I thank the team for their tremendous effort to make the class interesting.",
  },
];

const Marquee = () => {
  return (
    <div className="flex whitespace-no-wrap overflow-x-hidden">
      <div className="relative">
        <ul className="flex animate-marquee">
          {quotes.map((quote, i) => {
            return (
              <li className="m-4">
                <MarqueeCard
                  testimonial={quote.testimonial}
                  name={quote.name ? quote.name : "Anonymous"}
                />
              </li>
            );
          })}
        </ul>
        <ul className="flex absolute top-0 animate-marquee2">
          {quotes.map((quote, i) => {
            return (
              <li className="m-4">
                <MarqueeCard
                  testimonial={quote.testimonial}
                  name={quote.name ? quote.name : "Anonymous"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
