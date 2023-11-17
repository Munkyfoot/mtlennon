import { VariableDate } from "@/types"
import { Heading, VStack } from "@chakra-ui/react"
import SectionItem, { SectionItemProps } from "../SectionItem"

const experienceItems: SectionItemProps[] = [
    {
        title: "Owner & Lead Software Developer",
        subtitle: "MTL Softworks",
        startDate: new VariableDate(2018, 6),
        description:
            "In 2018, I founded MTL Softworks, a web development business focused on delivering high quality websites and other software solutions. As the sole proprietor and lead developer, I have dedicated myself to mastering various technologies, starting with Flask and Bootstrap, and later transitioning to Next.js to better serve evolving client needs. My journey includes notable accomplishments such as successfully securing and managing a major multi-site project, where I effectively migrated the client from WordPress to a more robust and scalable solution. Central to my approach is a commitment to building high-quality, performant, and accessible web applications. I pride myself on fostering strong, positive relationships with my clients, ensuring their needs and those of their users are consistently met through direct, thoughtful communication and personalized service.",
        externalLink: {
            title: "Visit Website",
            href: "https://mtlsoftworks.com",
        },
    },
    {
        title: "Co-Owner, Performer & Technology Specialist",
        subtitle: "Sol Seed",
        startDate: new VariableDate(2012, 8),
        description: `Since 2010, I have been an integral member of Sol Seed, a band known for its unique reggae fusion sound. Beyond performing in over 1,000 shows across the United States, I have played a pivotal role in managing and developing the band's online presence. My responsibilities encompass the entire lifecycle of our website, from initial conception and design to launch and ongoing maintenance. This experience has honed my skills in web development, particularly in creating and sustaining a dynamic, user-friendly site that resonates with our diverse audience.

        While the musical milestones of releasing three albums, amassing over 48k monthly listeners on Spotify, and achieving over 7 million views on YouTube for our hit song 'Family Tree' are distinct from my technical career path, they underscore my commitment to excellence and adaptability in diverse environments. My time with Sol Seed has been instrumental in developing soft skills such as team collaboration, effective conflict resolution, and resilience when encountering unexpected challenges. Additionally, it has been a valuable networking platform, enabling me to build a client base and forge connections that have been pivotal in growing my career in software development.`,
        externalLink: {
            title: "Visit Website",
            href: "https://solseedmusic.com",
        },
    },
    {
        title: "Program Mentor",
        subtitle: "Udacity",
        startDate: new VariableDate(2019, 5),
        endDate: new VariableDate(2019, 7),
        description:
            "As a Program Mentor at Udacity, I was dedicated to guiding students through the Full Stack Nanodegree program. In this role, my primary objective was to support and enhance the learning experience of each student. I achieved this through weekly one-on-one mentoring sessions, where I offered personalized guidance, clarified complex concepts, and provided feedback on projects. Additionally, I maintained a commitment to prompt and effective communication, ensuring a maximum 12-hour response time to student inquiries. This role not only allowed me to deepen my own understanding of full-stack technologies but also helped me develop strong skills in mentorship, communication, and problem-solving.",
    },
]

const Experience = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Professional Experience
            </Heading>
            <VStack align="stretch" spacing={6}>
                {experienceItems.map((item, i) => (
                    <SectionItem key={`experience_item_${i}`} {...item} />
                ))}
            </VStack>
        </VStack>
    )
}

export default Experience
