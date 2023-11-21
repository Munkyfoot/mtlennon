import { VariableDate } from "@/types"
import { Heading, VStack } from "@chakra-ui/react"
import SectionItem, { SectionItemProps } from "../SectionItem"

const experienceItems: SectionItemProps[] = [
    {
        title: "Owner & Lead Software Developer",
        subtitle: "MTL Softworks",
        startDate: new VariableDate(2018, 6),
        description: `• Founded MTL Softworks as a solo developer, focusing on high-quality web development using technologies like Flask, Bootstrap, and Next.js.
            • Developed strong client relationships through personalized service, effective communication, and attention to user needs.
            • Successfully managed and executed major projects, working with clients to define requirements and consistently delivering high-quality solutions that meet or exceed client expectations.`,
        externalLink: {
            title: "Visit Website",
            href: "https://mtlsoftworks.com",
        },
    },
    {
        title: "Co-Owner, Performer & Technology Specialist",
        subtitle: "Sol Seed",
        startDate: new VariableDate(2012, 8),
        description: `• Leveraged web development skills to create and maintain a dynamic, user-friendly website, catering to a diverse audience.
        • Developed soft skills like team collaboration, conflict resolution, and resilience, alongside networking that has been instrumental in growing a software development career.`,
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
        description: `• Led weekly one-on-one mentoring sessions, offering personalized guidance and feedback on Full Stack Nanodegree projects at Udacity, enhancing student learning experiences.
            • Maintained a commitment to prompt and effective communication, ensuring a maximum 12-hour response time to student inquiries.
            • Developed strong skills in mentorship, communication, and problem-solving, deepening my understanding of full-stack technologies.`,
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
