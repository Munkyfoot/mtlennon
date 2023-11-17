import { VariableDate } from "@/types"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import {
    Button,
    Collapse,
    HStack,
    Spacer,
    useDisclosure,
} from "@chakra-ui/react"
import { Heading, Text, VStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"

export interface ProjectItemProps {
    title: string
    type?: "website" | "game" | "machine learning" | "other"
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
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Card variant="outline" h="full" >
            <CardHeader>
                <Heading as="h3" size="md">
                    {title}
                </Heading>
                {(type || dateCompleted) && (
                    <HStack color="gray.500">
                        {type && <Text textTransform="capitalize">{type}</Text>}
                        {type && dateCompleted && <Text>{" • "}</Text>}
                        {dateCompleted && <Text>{dateCompleted.format()}</Text>}
                    </HStack>
                )}
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
