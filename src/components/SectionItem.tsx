import { VariableDate } from "@/types"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Collapse, Spacer, useDisclosure } from "@chakra-ui/react"
import { Heading, Text, VStack } from "@chakra-ui/react"

export interface SectionItemProps {
    title: string
    subtitle: string
    startDate: VariableDate
    endDate?: VariableDate
    description?: string
    externalLink?: {
        title: string
        href: string
    }
}

const SectionItem = ({
    title,
    subtitle,
    startDate,
    endDate,
    description,
    externalLink,
}: SectionItemProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <VStack align="flex-start">
            <Heading as="h3" size="md">
                {title}
            </Heading>
            <VStack align="flex-start" spacing={0}>
                <Text fontSize="lg">{subtitle}</Text>
                <Text color="gray.500">
                    {startDate.format()} - {endDate?.format() ?? "Present"}
                </Text>
            </VStack>
            {description && (
                <div>
                    <Collapse in={isOpen} animateOpacity>
                        <Text>{description}</Text>
                    </Collapse>
                    <Button
                        variant="link"
                        size="sm"
                        colorScheme="blue"
                        onClick={onToggle}
                        leftIcon={
                            isOpen ? (
                                <MinusIcon boxSize={2} />
                            ) : (
                                <AddIcon boxSize={2} />
                            )
                        }
                    >
                        {isOpen ? "Hide" : "Show"} Description
                    </Button>
                </div>
            )}
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
        </VStack>
    )
}

export default SectionItem
