import { VariableDate } from "@/types"
import { Heading, VStack } from "@chakra-ui/react"
import SectionItem, { SectionItemProps } from "../SectionItem"

const educationItems: SectionItemProps[] = [
    {
        title: "Bachelor of Science, Computer Science",
        subtitle: "Western Governors University",
        startDate: new VariableDate(2020, 9, 1),
        endDate: new VariableDate(2023, 11, 16),
        externalLink: {
            title: "View Temporary Transcript",
            href: "/tempproof.jpg",
        },
    },
    {
        title: "C++ Nanodegree",
        subtitle: "Udacity",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2019),
        externalLink: {
            title: "View Certificate",
            href: "https://confirm.udacity.com/G9LGTVEM",
        },
    },
    {
        title: "Artificial Intelligence Nanodegree",
        subtitle: "Udacity",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2019),
        externalLink: {
            title: "View Certificate",
            href: "https://confirm.udacity.com/RJ7R4GG5",
        },
    },
    {
        title: "Full Stack Web Developer Nanodegree",
        subtitle: "Udacity",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2018),
        externalLink: {
            title: "View Certificate",
            href: "https://confirm.udacity.com/9HPC5K4",
        },
    },
]

const Education = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Education
            </Heading>
            <VStack align="stretch" spacing={6}>
                {educationItems.map((item, i) => (
                    <SectionItem key={`education_item_${i}`} {...item} />
                ))}
            </VStack>
        </VStack>
    )
}

export default Education
