import { Navbar } from "../components/Navbar";
import Card from "../components/Card";

export default function AboutUs() {
  const leadStaffProfiles = [
    
    {
      name: "Ishan Patel",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841128694139715624/unknown.png",
      description:
        "Sophomore at American High School. Passionate about helping the community through education. Interested in Biology and US History.",
      position: "Founder~Vice-President",
    },
    
    {
      name: "Devansh Daxini",
     /*Change avatar image*/
      /* avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841128925266837565/unknown.png", */
      description:
        "Sophomore at Washington High School who enjoys playing basketball. His favorite subject is math. Loves playing video games and enjoys video editing.",
      position: "Co-Founder~President",
    },
    
    {
      name: "Bhagya Arora",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841454173882155008/unknown.png",
      description:
        "Sophomore at Foothill High School who loves building, coding, and biking. Enjoys learning new things, and sharing the knowledge with others.",
      position: "Curriculum Lead~Marketing",
    },
    
    {
      name: "Rushika Raval",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841454813786275880/unknown.png",
      description:
        "9th grader at Horner Middle School who is passionate about biology, psychology, and English studies. Avid reader, who plays tabla (Indian Classical Drums), and does Bharatnatyam (Indian Dance).",
      position: "Co-Curriculum Lead",
    },
    
    {
      name: "Tithi Raval",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841455384526323752/unknown.png",
      description:
        "9th grader at Horner Middle School who is passionate about Java and Python programming as well as writing. Enjoys playing tabla (Indian classical drum), Bharatnatyam (Indian Dance), and art.",
      position: "Outreach Lead",
    },
    
    {
      name: "Abhimanyu Sharma",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841712617977282580/unknown.png",
      description:
        "Sophomore at Mission San Jose School. Enjoys Reading and Taekwondo. Has a deep interest in Coding and Engineering.",
      position: "Expansion Lead",
    },
  ];
  const webDevProfiles = [
    
    {
      name: "Shubham Patil",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841460312048795668/person.png",
      description:
        "Sophomore at Mission San Jose High School who enjoys programming. Enjoys trying and eating food from multiple cuisines, playing videogames, and watching movies as well. He is very curious and likes to learn new things about technology.",
      position: "Web Development",
    },
   
    {
      name: "Nikhil Mehta",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841455861925937242/unknown.png",
      description:
        "Sophomore at Mission San Jose High School who likes to play baseball, code, and enjoys doing CAD. Enjoys making apps and learning new skills.",
      position: "Web Development",
    },
  ];

  const marketingProfiles = [

    {
      name: "Rishabh Mahesh",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841129200584228904/unknown.png",
      description:
        "Sophomore at Mission San Jose High School who is interested in helping others and giving back to the community whenever possible. Likes learning about technology biology. Actively participates in speech and debates and have been part of a school science bowl team.",
      position: "Expansion",
    },
  ];

  const instructorProfiles = [

    {
      name: "Utsav Agarwal",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841458341939380234/unknown.png",
      description:
        "Sophomore and Mission San Jose High School. Likes coding/robotics, math, and science. Participated in a school science bowl team and in multiple robotics competitions.",
      position: "",
    },

    {
      name: "Anish Polakala",
      avatar:
        "https://media.discordapp.net/attachments/762751394138554419/853349684428537856/unknown.png",
      description:
        "Sophomore at Washington High School. Loves coding, chess, math, and science. Exuberant reader.",
      position: "",
    },

    {
      name: "Neha Sharma",
      avatar:
        "https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/290566642_1215456835886275_5972408409874789198_n.jpg?stp=dst-jpg_e35&cb=2d435ae8-4f3c5d8f&_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=0rhoewq8af4AX-SeT5X&edm=ABJHkxYAAAAA&ccb=7-5&ig_cache_key=Mjg3MTA5OTM5NDMyNjczNzAyMg%3D%3D.2-ccb7-5&oh=00_AT_OK8zyg7RzbqPVFEgUUTo5smTG4WRxvUX3xUWWrY_avQ&oe=62C38FA5&_nc_sid=fa978c",
      description:
        "I will be going to 9th grade in Mission San Jose High School. I am an avid reader and I enjoy baking. I am also very interested in neuroscience, and enjoy learning about it.",
      position: "",
    },
    
    {
      name: "Saunak Karnati",
      avatar:
        "https://cdn.discordapp.com/attachments/986065348170219580/996062459452461126/19C2C60A-AC7F-44AF-A976-109C9AE843B1_1.jpg",
      description:
        "9th grader at Irvington High school who is passionate about coding and has experience in various programming languages. Loves exploring lakes and forests in the area.",
      position: "",
    },

  ];

  

  const formerProfiles = [
    
    {
      name: "Amay Singhania",
      avatar:
        "https://cdn.discordapp.com/attachments/775862443984551966/845806648505008158/unknown.png",
      description:
        "9th grader who is passionate about coding and Martial Arts. Enjoys reading and learning about technology.",
      position: "Expansion",
    },
    
    {
      name: "Akshat Gupta",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841456224533086238/unknown.png",
      description:
        "Sophomore at Washington High School. Participated in a Tech Challenge team last year. Enjoys learning chess and world history.",
      position: "",
    },

    {
      name: "Kaeyaa Sane",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841456554058448946/unknown.png",
      description:
        "Sophomore at Washington High School. Loves to swim, dance, sing, and make videos. Has more than 500 subscribers on YouTube.",
      position: "",
    },

    {
      name: "Ishaan Awasthi",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841458011967848468/unknown.png",
      description:
        "Sophomore at Mission San Jose High School. Extremely passionate about guitar and music production! Favorite subject is English, and has a dream is to be an attorney.",
      position: "",
    },

    {
      name: "Moksha Rawlani",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841456928714784778/unknown.png",
      description:
        "Sophomore at Mission San Jose High School. Enjoys reading, science, and math. Likes Indian classical dance and singing as well as tennis and playing the viola.",
      position: "",
    },

    {
      name: "Kayona Verma",
      avatar:
        "https://media.discordapp.net/attachments/832365353660317726/841457774982594570/unknown.png",
      description:
        "Sophomore at Mission San Jose High School. Enjoys making music, doing any style of art, roller skating, and reading. Loves spending time with her family and helping out whenever she can.",
      position: "",
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
              {leadStaffProfiles.map(
                ({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  );
                }
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-accent-primary">Web Devs</h2>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {webDevProfiles.map(
                ({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  );
                }
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-accent-primary">Outreach</h2>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {marketingProfiles.map(
                ({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  );
                }
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-accent-primary">Instructors</h2>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {instructorProfiles.map(
                ({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  );
                }
              )}
            </div>
          
          </div>
          <div className="space-y-4">
            <h2 className="text-accent-primary">Former Members</h2>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {formerProfiles.map(
                ({ name, avatar, description, position }, i) => {
                  return (
                    <Card
                      key={i}
                      name={name}
                      avatar={avatar}
                      description={description}
                      position={position}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
