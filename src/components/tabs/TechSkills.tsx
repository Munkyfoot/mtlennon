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
                <Text>
                    Python, TypeScript, JavaScript, HTML, CSS, Bash/Shell, CMD,
                    C#, C++
                </Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Frameworks/Software/APIs
                </Heading>
                <Text>
                    Next.js/React, ChakraUI, Flask, Bootstrap, SQLAlchemy, Unity
                    Game Engine, OpenAI API, Shopify/Liquid, Tailwind, Supabase,
                    Apache 2, PyTorch
                </Text>
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
