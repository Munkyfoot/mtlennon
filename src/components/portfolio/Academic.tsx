import { GridItem, Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import ProjectItem, { ProjectItemProps } from "../ProjectItem"

const projects: ProjectItemProps[] = [
    {
        title: "Doodle Zoo (WGU Capstone Project)",
        type: "machine learning",
        skills: ["Python", "PyTorch"],
        externalLink: {
            title: "Visit GitHub Repository",
            href: "https://github.com/Munkyfoot/doodle-zoo",
        },
    },
]

const Academic = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Academic
            </Heading>
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

export default Academic
