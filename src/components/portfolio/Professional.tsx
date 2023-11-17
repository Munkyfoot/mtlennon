import { GridItem, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import ProjectItem, { ProjectItemProps } from "../ProjectItem"
import { VariableDate } from "@/types"

const projects: ProjectItemProps[] = [    
    {
        title: "MTL Softworks",
        type: "website",
        skills: ["React", "Next.js", "Chakra UI", "TypeScript"],
        externalLink: {
            title: "Visit Website",
            href: "https://www.mtlsoftworks.com/",
        },
    },
    {
        title: "Sol Seed Music",
        type: "website",
        skills: ["React", "Next.js", "Tailwind", "TypeScript"],
        externalLink: {
            title: "Visit Website",
            href: "https://www.solseedmusic.com/",
        },
    },
    {
        title: "Blue Avenue Music Group",
        type: "website",
        skills: ["React", "Next.js", "Chakra UI", "TypeScript", "OpenAI API"],
        externalLink: {
            title: "Visit Website",
            href: "https://www.blueavemusic.com/",
        },
    },
    {
        title: "Chuck DeMonnin",
        type: "website",
        skills: ["React", "Next.js", "Chakra UI", "TypeScript"],
        externalLink: {
            title: "Visit Website",
            href: "https://www.chuckdemonnin.com/",
        },
    },
    {
        title: "Salon Cerna",
        type: "website",
        skills: ["Flask", "Bootstrap", "Python", "HTML", "CSS"],
        externalLink: {
            title: "Visit Website",
            href: "https://www.saloncerna.com/",
        },
    },
    {
        title: "The Roasting Shack",
        type: "website",
        skills: ["Shopify", "Liquid"],
        externalLink: {
            title: "Visit Website",
            href: "https://www.theroastingshack.com/",
        },
    },
]

const Professional = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Professional
            </Heading>
            <Text>
                I have been a freelance web developer and business owner since
                2018 and have had the opportunity to work with many clients on a
                variety of projects. Here are a few of my favorites.
            </Text>
            <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
                {projects.map((item, i) => (
                    <GridItem key={`project_item_${i}`}>
                        <ProjectItem {...item} />
                    </GridItem>
                ))}
            </SimpleGrid>
        </VStack>
    )
}

export default Professional
