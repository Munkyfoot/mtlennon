import { Heading, Text, VStack } from "@chakra-ui/react"

const Skills = () => {
    return (
        <VStack align="flex-start" spacing={4}>
            <Heading as="h2" size="lg">
                Technical Skills
            </Heading>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Languages
                </Heading>
                <Text>Python, TypeScript, JavaScript, HTML, CSS, C#, C++</Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Frameworks/Software
                </Heading>
                <Text>
                    Next.js/React, ChakraUI, Tailwind, Flask, Bootstrap,
                    Supabase, SQLAlchemy, Unity Game Engine
                </Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Tools
                </Heading>
                <Text>Git, VS Code, Anaconda</Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Development Focuses
                </Heading>
                <Text>
                    Front-End Web Development, Game Development, Back-End
                    Development, Machine Learning
                </Text>
            </VStack>
        </VStack>
    )
}

export default Skills
