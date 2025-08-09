import { Button } from "../UI/Button/Button";
import { TeamMember } from "../UI/TeamMember/TeamMember";
import styles from "./teamScreen.module.scss";

const team = [
  {
    id: 1,
    name: "John Smith",
    jobTitle: "CEO and Founder",
    photo: <img src="../../public/member1.png" alt="member1" />,
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    link: <img src="../../public/memberlink.png" alt="memberlink" />,
  },
  {
    id: 2,
    name: "Jane Doe",
    jobTitle: "Director of Operations",
    photo: <img src="../../public/member2.png" alt="member2" />,
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    link: <img src="../../public/memberlink.png" alt="memberlink" />,
  },
  {
    id: 3,
    name: "Michael Brown",
    jobTitle: "Senior SEO Specialist",
    photo: <img src="../../public/member3.png" alt="member3" />,
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    link: <img src="../../public/memberlink.png" alt="memberlink" />,
  },
  {
    id: 4,
    name: "Emily Johnson",
    jobTitle: "PPC Manager",
    photo: <img src="../../public/member4.png" alt="member4" />,
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    link: <img src="../../public/memberlink.png" alt="memberlink" />,
  },
  {
    id: 5,
    name: "Brian Williams",
    jobTitle: "Social Media Specialist",
    photo: <img src="../../public/member5.png" alt="member5" />,
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    link: <img src="../../public/memberlink.png" alt="memberlink" />,
  },
  {
    id: 6,
    name: "Sarah Kim",
    jobTitle: "Content Creator",
    photo: <img src="../../public/member6.png" alt="member6" />,
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    link: <img src="../../public/memberlink.png" alt="memberlink" />,
  },
];

export const TeamScreen = () => {
  return (
    <div className={styles.team}>
      {team.map((member) => (
        <TeamMember
          key={member.id}
          name={member.name}
          jobTitle={member.jobTitle}
          photo={member.photo}
          link={member.link}
          description={member.description}
        />
      ))}
      <Button option="Dark" style={{ marginLeft: 'auto' }}>See all team</Button>
    </div>
  );
};
