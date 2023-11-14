import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Collapse, Spacer, useDisclosure } from "@chakra-ui/react"
import { Heading, Text, VStack } from "@chakra-ui/react"

const About = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <VStack align="flex-start">
            <Heading as="h2" size="lg">
                About
            </Heading>
            <Text>
                I am a passionate software developer and designer with a
                specialty in front-end development, complemented by experience
                with back-end development, database management, and systems
                administration. My journey in tech began in childhood, starting
                with HTML and CSS, and eventually evolved into a career in
                freelance web development.
            </Text>
            <div>
                <Collapse in={isOpen} animateOpacity>
                    <VStack align="flex-start">
                        <Text>
                            My expertise includes a broad range of technologies
                            such as React, Next.js, Flask, SQL, and more, honed
                            through various projects ranging from website
                            development for clients to personal ventures in game
                            development and machine learning. With over 5 years
                            of hands-on professional experience in freelancing,
                            I bring a diverse skill set and a keen eye for
                            user-centric design.
                        </Text>
                        <Text>
                            As a recent graduate, I am seeking a full-time
                            software development role where I can contribute to
                            and grow with a dynamic team, leveraging my skills
                            in front-end web development and design to create
                            impactful solutions.
                        </Text>
                    </VStack>
                </Collapse>
            </div>
            <Button
                variant="link"
                colorScheme="blue"
                onClick={onToggle}
                leftIcon={
                    isOpen ? <MinusIcon boxSize={2} /> : <AddIcon boxSize={2} />
                }
                size="sm"
            >
                {isOpen ? "Show Less" : "Read More"}
            </Button>
        </VStack>
    )
}

export default About
