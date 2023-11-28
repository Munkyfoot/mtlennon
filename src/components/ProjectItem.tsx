import { VariableDate } from "@/types"
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react"

export interface ProjectItemProps {
    title: string
    type: "web" | "game" | "machine learning" | "other"
    dateCompleted?: VariableDate
    description?: string
    skills?: string[]
    externalLink?: {
        title: string
        href: string
    }
}

const ProjectItem = ({
    title,
    type,
    dateCompleted,
    description,
    skills,
    externalLink,
}: ProjectItemProps) => {
    return (
        <Card variant="outline" h="full">
            <CardHeader>
                <Heading as="h3" size="md">
                    {title}
                </Heading>
                <Text
                    color="gray.500"
                    fontSize="sm"
                    fontWeight="semibold"
                    textTransform="capitalize"
                >
                    {type} Project{" "}
                    {dateCompleted && `(${dateCompleted.format()})`}
                </Text>
            </CardHeader>
            <CardBody>
                <VStack align="flex-start" spacing={4}>
                    {description && <Text>{description}</Text>}
                    {skills && (
                        <VStack align="flex-start" spacing={0}>
                            <Text fontWeight="semibold">Skills Used</Text>
                            <Text>{skills.join(", ")}</Text>
                        </VStack>
                    )}
                </VStack>
            </CardBody>
            <CardFooter>
                {externalLink && (
                    <Button
                        as="a"
                        href={externalLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="blue"
                        size="sm"
                        variant="outline"
                        mt={2}
                    >
                        {externalLink.title}
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default ProjectItem
