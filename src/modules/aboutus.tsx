import { Navbar } from "../components/Navbar";
import Card from "../components/Card";

export default function AboutUs() {
  const profiles = [
    {
      name: "Ishan Patel",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841128694139715624/unknown.png",
      description:
        "Rising Freshman at American High School passionate about helping the community through education. Interested in Biology and US History",
      position: "Founder~Instructor",
    },
    {
      name: "Devansh Daxini",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841128925266837565/unknown.png",
      description:
        "Rising Freshman at Washington High School who enjoys playing basketball. His favorite subject is math. Loves playing video games and enjoys video editing.",
      position: "Co-Founder~Instructor",
    },
    {
      name: "Rishabh Mahesh",
      avatar:
        "https://cdn.discordapp.com/attachments/832365353660317726/841129200584228904/unknown.png",
      description:
        "Rising Freshman at Mission San Jose High School who is interested in helping others and giving back to the community whenever possible. Likes learning about technology biology. Actively participates in speech and debates and have been part of a school science bowl team.",
      position: "Instructor",
    },
    {
        name: "Rishabh Mahesh",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841129200584228904/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School who is interested in helping others and giving back to the community whenever possible. Likes learning about technology biology. Actively participates in speech and debates and have been part of a school science bowl team.",
        position: "Instructor",
      },
      {
        name: "Rishabh Mahesh",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841129200584228904/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School who is interested in helping others and giving back to the community whenever possible. Likes learning about technology biology. Actively participates in speech and debates and have been part of a school science bowl team.",
        position: "Instructor",
      },
      {
        name: "Rishabh Mahesh",
        avatar:
          "https://cdn.discordapp.com/attachments/832365353660317726/841129200584228904/unknown.png",
        description:
          "Rising Freshman at Mission San Jose High School who is interested in helping others and giving back to the community whenever possible. Likes learning about technology biology. Actively participates in speech and debates and have been part of a school science bowl team.",
        position: "Instructor",
      },
  ];

  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6">
        <h1 className="text-center">About Us</h1>

        
          <div className="md:px-12 max-w-screen-xl mx-auto px-4 grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {profiles.map(({ name, avatar, description, position }, i) => {
              return (
                <Card
                  key={i}
                  name={name}
                  avatar={avatar}
                  description={description}
                  position={position}
                />
              );
            })}
          </div>
        </div>
      
    </>
  );
}
