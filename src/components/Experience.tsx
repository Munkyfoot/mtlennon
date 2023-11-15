import { VariableDate } from "@/types"
import { Heading, VStack } from "@chakra-ui/react"
import SectionItem, { SectionItemProps } from "./SectionItem"

const experienceItems: SectionItemProps[] = [
    {
        title: "Owner & Lead Software Developer",
        subtitle: "MTL Softworks",
        startDate: new VariableDate(2018, 6),
        description:
            "I started MTL Softworks in 2018 as a way to provide software development services to clients. Since then, I've worked with clients to build web applications, mobile applications, and more. My focus is on building high-quality, performant, and accessible applications that meet the needs of my clients and their users.",
        externalLink: {
            title: "Visit Website",
            href: "https://mtlsoftworks.com",
        },
    },
    {
        title: "Performer & Technology Specialist",
        subtitle: "Sol Seed",
        startDate: new VariableDate(2010, 9),
        description:
            "I've been a member of Sol Seed since 2010, performing over 1,000 shows across the United States. In addition to performing, I also manage the band's website and other technology-related needs.",
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
            "My goal in this position was to provide support to Udacity students as they progressed through the Full Stack Nanodegree program. My responsibilities included supporting the progress of Udacity's students, weekly 1-on-1 sessions with students, and maintaining a 12-hour response time to student inquiries.",
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
