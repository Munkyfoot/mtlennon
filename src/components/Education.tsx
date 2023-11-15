import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Collapse, Spacer, useDisclosure } from "@chakra-ui/react"
import { Heading, Text, VStack } from "@chakra-ui/react"

class VariableDate {
    year: number
    month?: number
    day?: number

    constructor(year: number, month?: number, day?: number) {
        this.year = year
        this.month = month
        this.day = day
    }

    format(): string {
        // Display as "year", "month year", or "month day, year" where month is the full month name
        let dateString = this.year.toString()
        if (this.month) {
            if (this.day) {
                dateString = new Date(
                    this.year,
                    this.month - 1,
                    this.day
                ).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })
            } else {
                dateString = new Date(
                    this.year,
                    this.month - 1
                ).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                })
            }
        }

        return dateString
    }
}

interface EducationItemProps {
    institution: string
    degree: string
    startDate: VariableDate
    endDate?: VariableDate
    description?: string
    externalLink?: string
}

const EducationItem = ({
    institution,
    degree,
    startDate,
    endDate,
    description,
    externalLink,
}: EducationItemProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <VStack align="flex-start">
            <Heading as="h3" size="md">
                {institution}
            </Heading>
            <VStack align="flex-start" spacing={0}>
                <Text fontSize="lg">{degree}</Text>
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
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="blue"
                    size="sm"
                    variant="outline"
                >
                    View Certificate
                </Button>
            )}
        </VStack>
    )
}

const educationItems: EducationItemProps[] = [
    {
        institution: "Western Governors University",
        degree: "Bachelor of Science, Computer Science",
        startDate: new VariableDate(2020, 9, 1),
        endDate: new VariableDate(2023, 11, 10),
        description:
            "Western Governors University is an online university driven by a mission to expand access to higher education through online, competency-based degree programs.",
    },
    {
        institution: "Udacity",
        degree: "Full Stack Web Developer Nanodegree",
        startDate: new VariableDate(2020),
        endDate: new VariableDate(2020),
        externalLink: "https://confirm.udacity.com/9HPC5K4",
    },
    {
        institution: "Udacity",
        degree: "C++ Nanodegree",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2019),
        externalLink: "https://confirm.udacity.com/G9LGTVEM",
    },
    {
        institution: "Udacity",
        degree: "Artificial Intelligence Nanodegree",
        startDate: new VariableDate(2018),
        endDate: new VariableDate(2019),
        externalLink: "https://confirm.udacity.com/RJ7R4GG5",
    },
]

const Education = () => {
    return (
        <VStack align="flex-start" spacing={6}>
            <Heading as="h2" size="lg">
                Education
            </Heading>
            {educationItems.map((item) => (
                <EducationItem key={item.institution} {...item} />
            ))}
        </VStack>
    )
}

export default Education
