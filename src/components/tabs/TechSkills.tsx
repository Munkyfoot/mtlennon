import { Heading, Text, VStack } from "@chakra-ui/react"

const TechSkills = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Technical Skills
            </Heading>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Languages
                </Heading>
                <VStack align="flex-start" spacing={0}>
                    <Heading as="h4" size="sm">
                        Adept
                    </Heading>
                    <Text>Python, TypeScript, JavaScript, HTML, CSS</Text>
                </VStack>
                <VStack align="flex-start" spacing={0}>
                    <Heading as="h4" size="sm">
                        Proficient
                    </Heading>
                    <Text>Bash/Shell, CMD, C#, C++</Text>
                </VStack>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Frameworks/Software/APIs
                </Heading>
                <VStack align="flex-start" spacing={0}>
                    <Heading as="h4" size="sm">
                        Adept
                    </Heading>
                    <Text>
                        Next.js/React, ChakraUI, Flask, Bootstrap, SQLAlchemy,
                        Unity Game Engine, OpenAI API, StableDiffusion
                    </Text>
                </VStack>
                <VStack align="flex-start" spacing={0}>
                    <Heading as="h4" size="sm">
                        Proficient
                    </Heading>
                    <Text>Tailwind, Supabase, Apache 2, PyTorch</Text>
                </VStack>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Tools
                </Heading>
                <Text>Git, VS Code, Anaconda, CLI (Shell & CMD)</Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Development Focuses
                </Heading>
                <Text>
                    Front-End Web Development, Back-End Development, Game
                    Development, Machine Learning
                </Text>
            </VStack>
        </VStack>
    )
}

export default TechSkills
