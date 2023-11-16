import { Heading, Text, VStack } from "@chakra-ui/react"

const SoftSkills = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Soft Skills
            </Heading>

            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Communication and Interpersonal Skills
                </Heading>
                <Text>
                    In my dual role as a developer and business owner, effective
                    communication with clients is key. I strive to demystify
                    technical concepts for better understanding, leading to
                    fruitful business relationships. My background as a touring
                    musician also equips me with collaboration and conflict
                    resolution skills, enhancing team dynamics.
                </Text>
            </VStack>

            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Adaptability and Flexibility
                </Heading>
                <Text>
                    Balancing careers in music and software development, along
                    with pursuing a Computer Science degree, has honed my time
                    management and prioritization skills. I've adapted to
                    industry shifts, transitioning from Flask to React/Next.js,
                    to better align with evolving client requirements.
                </Text>
            </VStack>

            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Problem-Solving and Creativity
                </Heading>
                <Text>
                    My journey in software development involves creative
                    problem-solving to meet diverse client needs. I take pride
                    in tackling challenges and devising user-centric, innovative
                    solutions that blend technical expertise with a creative
                    approach.
                </Text>
            </VStack>

            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Continuous Learning and Professional Growth
                </Heading>
                <Text>
                    My commitment to ongoing learning enhances my professional
                    capabilities. Completing programs like the Udacity
                    Nanodegrees in Full Stack Web Development and Artificial
                    Intelligence has broadened my knowledge. Keeping up with the
                    latest technologies and practices, I strive to deliver
                    high-quality, innovative solutions.
                </Text>
            </VStack>
        </VStack>
    )
}

export default SoftSkills
