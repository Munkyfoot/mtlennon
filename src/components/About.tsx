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
                As a dedicated and creative Front-End Developer, my journey in
                the tech world has been anything but conventional. My
                professional career began in the music industry as a touring
                musician, where I honed not only my artistic skills but also my
                abilities in communication, adaptability, and self-management.
                Parallel to my music career, I nurtured a longstanding passion
                for software development, a journey that started in my childhood
                with simple HTML and CSS to spruce up my MySpace page. This
                passion grew alongside my musical endeavors, leading me to build
                websites for friends, family, and various projects throughout
                high school and beyond.
            </Text>
            <div>
                <Collapse in={isOpen} animateOpacity>
                    <VStack align="flex-start">
                        <Text>
                            In the ever-evolving landscape of technology, I have
                            continually expanded my skill set, diving into web
                            development, game development, and machine learning.
                            I've become proficient in a range of programming
                            languages, including Python, TypeScript, and C#, and
                            have developed a deep understanding of both
                            front-end and back-end development. My experience is
                            further bolstered by my completion of several
                            Udacity Nanodegrees, which have refined my skills in
                            Full Stack Web Development, Artificial Intelligence,
                            and C++.
                        </Text>
                        <Text>
                            The decision to pivot my career from music to
                            software development was driven by a desire for new
                            challenges and a longing to plant roots and start a
                            family. Founding my own web development business was
                            a natural progression, allowing me to leverage my
                            diverse skill set and client management experience.
                            This venture not only expanded my technical
                            expertise but also deepened my understanding of
                            business operations and client relations.
                        </Text>
                        <Text>
                            Now, as a recent graduate with a Bachelor's Degree
                            in Computer Science from Western Governors
                            University, I am eager to apply my unique blend of
                            skills and experiences in a collaborative team
                            environment. I am particularly excited about
                            opportunities where I can contribute to innovative
                            front-end development projects and continue growing
                            as a software developer. My diverse background,
                            encompassing both artistic and technical realms, has
                            equipped me with a unique perspective that I believe
                            will add significant value to any team.
                        </Text>
                        <Text>
                            My journey has been one of continuous learning and
                            adaptation. I bring a rich tapestry of experiences,
                            technical skills, and a passion for creative
                            problem-solving to the table. I am excited about the
                            prospect of joining a team where I can contribute,
                            grow, and explore the vast possibilities of software
                            development.
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
