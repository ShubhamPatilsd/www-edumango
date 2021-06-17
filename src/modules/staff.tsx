import { Navbar } from "../components/Navbar";
import Card from "../components/Card";
import { Footer } from "../components/Footer";

export default function AboutUs() {
  
  const leadStaffProfiles = [
    {
        name: "Devansh Daxini",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841128925266837565/unknown.png",
        description:
          "Rising Freshman at Washington High School who enjoys playing basketball. His favorite subject is math. Loves playing video games and enjoys video editing.",
        position: "Co-Founder~Spanish 1",
      },
      {
        name: "Ishan Patel",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841128694139715624/unknown.png",
        description:
          "Rising Freshman at American High School. Passionate about helping the community through education. Interested in Biology and US History.",
        position: "Founder~Math 6",
      },
    {
        name: "Bhagya Arora",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841454173882155008/unknown.png",
        description:
          "Rising freshman at Foothill High School who loves building, coding, and biking. Enjoys learning new things, and sharing the knowledge with others.",
        position: "Curriculum Lead~Marketing~Spanish 2",
      },
      {
          name: "Rushika Raval",
          avatar:
            "https://media.discordapp.net/attachments/832365353660317726/841454813786275880/unknown.png",
          description:
            "8th grader at Horner Middle School who is passionate about biology, psychology, and English studies. Avid reader, who plays tabla (Indian Classical Drums), and does Bharatnatyam (Indian Dance).",
          position: "Co-Curriculum Lead~Literature",
        },
        {
          name: "Tithi Raval",
          avatar:
            "https://media.discordapp.net/attachments/832365353660317726/841455384526323752/unknown.png",
          description:
            "8th grader at Horner Middle School who is passionate about Java and Python programming as well as writing. Enjoys playing tabla (Indian classical drum), Bharatnatyam (Indian Dance), and art.",
          position: "Outreach Lead~Literature",
        },
  ]
  const webDevProfiles = [
    {
        name: "Shubham Patil",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841460312048795668/person.png",
        description:
          "Rising Freshman at Mission San Jose High School who enjoys programming. Enjoys trying and eating food from multiple cuisines, playing videogames, and watching movies as well. He is very curious and likes to learn new things about technology.",
        position: "Web Development~Intro to Coding",
      },
      {
        name: "Nikhil Mehta",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841455861925937242/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School who likes to play baseball, code, and enjoys doing CAD. Enjoys making apps and learning new skills.",
        position: "Web Development~Intro to CAD",
      },
  ]

  const marketingProfiles = [

      {
        name: "Amay Singhania",
        avatar:
          "https://cdn.discordapp.com/attachments/775862443984551966/845806648505008158/unknown.png",
        description:
          "8th grader at Horner Middle School. Passionate about coding and Martial Arts. Enjoys reading and learning about technology.",
        position: "Marketing",
      }, 
      {
        name: "Kaeyaa Sane",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841456554058448946/unknown.png",
        description:
          "Rising Freshman at Washington High School. Loves to swim, dance, sing, and make videos. Has more than 500 subscribers on YouTube.",
        position: "Social Media~Spanish 2",
      },
      {
        name: "Ishaan Awasthi",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841458011967848468/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School. Extremely passionate about guitar and music production! Favorite subject is English, and has a dream is to be an attorney.",
        position: "Social Media~Math 6",
      },
  ]


  const instructorProfiles = [      
      
      {
        name: "Akshat Gupta",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841456224533086238/unknown.png",
        description:
          "Rising Freshman at Washington High School. Participated in a Tech Challenge team last year. Enjoys learning chess and world history.",
        position: "Spanish 1",
      },
      {
        name: "Abhimanyu Sharma",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841712617977282580/unknown.png",
        description:
          "Rising Freshman at Mission San Jose School. Enjoys Reading and Taekwondo. Has a deep interest in Coding and Engineering.",
        position: "Speech and Debate",
      },
      {
        name: "Rishabh Mahesh",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841129200584228904/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School who is interested in helping others and giving back to the community whenever possible. Likes learning about technology biology. Actively participates in speech and debates and have been part of a school science bowl team.",
        position: "Speech and Debate~Algebra 1",
      },
      
      {
        name: "Moksha Rawlani",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841456928714784778/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School. Enjoys reading, science, and math. Likes Indian classical dance and singing as well as tennis and playing the viola.",
        position: "Math 5",
      },
      
      {
        name: "Kayona Verma",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841457774982594570/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School. Enjoys making music, doing any style of art, roller skating, and reading. Loves spending time with her family and helping out whenever she can.",
        position: "Math 5",
      },
      
      {
        name: "Utsav Agarwal",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841458341939380234/unknown.png",
        description:
          "Rising freshman and Mission San Jose High School. Likes coding/robotics, math, and science. Participated in a school science bowl team and in multiple robotics competitions.",
        position: "Pre-Algebra",
      }, 
      {
        name: "Rishabh Manur",
        avatar:
          "https://media.discordapp.net/attachments/832365353660317726/841458907310587914/unknown.png",
        description:
          "Rising freshman at Mission San Jose High School. In his spare time, likes playing the tabla, playing tennis, listening to music, and gardening. Enjoys coding, robotics, and hanging out with his friends.",
        position: "Algebra 1",
      },
      {
        name: "Anish Polakala",
        avatar:
          "https://media.discordapp.net/attachments/762751394138554419/853349684428537856/unknown.png",
        description:
          "Rising Freshman at Washington High School. Loves coding, chess, math, and science. Exuberant reader.",
        position: "Pre-Algebra",
      },
  ];

  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6 md:px-12 px-4 md:mb-12 mb-4">
        <h1 className="text-center">Meet the Mangoes</h1>
        

        <div className="md:px-12 space-y-9 max-w-screen-xl mx-auto px-4 ">
            <div className="space-y-4">
            <h2 className="text-accent-primary">Leaders</h2>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {leadStaffProfiles.map(({ name, avatar, description, position }, i) => {
              return (
                <Card
                  key={i}
                  name={name}
                  avatar={avatar}
                  description={description}
                  position={position}
                />
              )
            })}
            </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-accent-primary">Web Devs</h2>
                <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {webDevProfiles.map(({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  )
                })}
                </div>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-accent-primary">Outreach</h2>
                <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {marketingProfiles.map(({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  )
                })}
                </div>
            </div>


            <div className="space-y-4">
                <h2 className="text-accent-primary">Instructors</h2>
                <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {instructorProfiles.map(({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  )
                })}
                </div>
            </div>
          </div>
          
        </div>
        <Footer/>  
    </>
  )
}
