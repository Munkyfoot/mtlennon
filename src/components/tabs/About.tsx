import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Collapse, Spacer, useDisclosure } from "@chakra-ui/react"
import { Heading, Text, VStack } from "@chakra-ui/react"

const About = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <VStack align="flex-start">
            <Heading as="h2" size="lg">
                Career
            </Heading>
            <Text>
                As a Software Developer and Designer, I bring over five years of
                professional experience and a lifelong passion for technology.
                My journey has been marked by a unique blend of artistic
                creativity and technical interest, beginning with simple
                adjustments of HTML and CSS and evolving into a career as a
                freelance developer. I've had the opportunity to work with a
                variety of clients to build, launch, and maintain over a dozen
                professional websites. I hold a Bachelor's Degree in Computer
                Science from Western Governors University, and my diverse
                skillset spans front-end and back-end web development, game
                development, and machine learning.
            </Text>
            <div>
                <Collapse in={isOpen} animateOpacity>
                    <VStack align="flex-start">
                        <Text>
                            My career began in the vibrant world of music as a
                            touring musician, where I honed key soft skills such
                            as communication, adaptability, and collaborative
                            problem-solving. This background in the arts,
                            coupled with a deep interest in software
                            development, enables me to approach problem-solving
                            and design in innovative ways. As I transitioned
                            from music to a full-time career in software
                            development, I established my own web development
                            business, further deepening my understanding of
                            business operations and enhancing my client
                            relations skills.
                        </Text>
                        <Text>
                            I am proficient in a range of technologies, with a
                            current focus on React/Next.js and ChakraUI hosted
                            on Vercel, reflecting my commitment to performance,
                            aesthetic appeal, and accessibility in web
                            development. This is complemented by experience with
                            Flask and Bootstrap, alongside server management,
                            and a working knowledge of languages like Python,
                            TypeScript, C#, C++, and Java. My technical toolkit
                            includes Git for version control, Lighthouse for
                            performance analysis, Unity for Game Development,
                            and the OpenAI API for experimentation.
                        </Text>
                        <Text>
                            In addition to my Computer Science degree, my
                            educational experience includes Udacity Nanodegrees
                            in Full Stack Web Development, Artificial
                            Intelligence, and C++. These courses not only
                            enhanced my technical skills but also enabled me to
                            mentor and teach others, as demonstrated during my
                            tenure as a Program Mentor at Udacity.
                        </Text>
                        <Text>
                            I look forward to opportunities to contribute to
                            innovative projects in front-end development, where
                            I can blend my unique artistic vision with technical
                            expertise. As a recent graduate, I am eager to join
                            a dynamic team where I can apply my creative
                            problem-solving abilities and technical skills,
                            contribute meaningfully, and continue to grow in the
                            ever-evolving field of software development.
                        </Text>
                    </VStack>
                </Collapse>
                <Button
                    variant="link"
                    colorScheme="blue"
                    onClick={onToggle}
                    leftIcon={
                        isOpen ? (
                            <MinusIcon boxSize={2} />
                        ) : (
                            <AddIcon boxSize={2} />
                        )
                    }
                    size="sm"
                >
                    {isOpen ? "Show Less" : "Read More"}
                </Button>
            </div>
        </VStack>
    )
}

export default About