import { VariableDate } from "@/types"
import { Heading, VStack } from "@chakra-ui/react"
import SectionItem, { SectionItemProps } from "./SectionItem"

const educationItems: SectionItemProps[] = [
    {
        title: "Western Governors University",
        subtitle: "Bachelor of Science, Computer Science",
        startDate: new VariableDate(2020, 9, 1),
        endDate: new VariableDate(2023, 11, 10),
        description:
            "Western Governors University is an online university driven by a mission to expand access to higher education through online, competency-based degree programs.",
    },
    {
        title: "Udacity",
        subtitle: "Full Stack Web Developer Nanodegree",
        startDate: new VariableDate(2020),
        endDate: new VariableDate(2020),
        externalLink: {
            title: "View Certificate",
            href: "https://confirm.udacity.com/9HPC5K4",
        },
    },
    {
        title: "Udacity",
        subtitle: "C++ Nanodegree",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2019),
        externalLink: {
            title: "View Certificate",
            href: "https://confirm.udacity.com/G9LGTVEM",
        },
    },
    {
        title: "Udacity",
        subtitle: "Artificial Intelligence Nanodegree",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2019),
        externalLink: {
            title: "View Certificate",
            href: "https://confirm.udacity.com/RJ7R4GG5",
        },
    },
]

const Education = () => {
    return (
        <VStack align="flex-start" spacing={6}>
            <Heading as="h2" size="lg">
                Education
            </Heading>
            {educationItems.map((item) => (
                <SectionItem key={item.title} {...item} />
            ))}
        </VStack>
    )
}

export default Education
