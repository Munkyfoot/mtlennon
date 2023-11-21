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
                    Python, TypeScript, JavaScript, HTML, CSS, SQL, Bash/Shell,
                    C#, C++, Java
                </Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Frameworks/Software/APIs
                </Heading>
                <Text>
                    React, Next.js, ChakraUI, TailwindCSS, Flask, Bootstrap, SQL
                    Alchemy, Unity, Shopify/Liquid, PyTorch, Apache Server,
                    OpenAI API, Supabase, and more…
                </Text>
            </VStack>
            <VStack align="flex-start">
                <Heading as="h3" size="md">
                    Tools
                </Heading>
                <Text>
                    Git, Github, VS Code, Visual Studio, CLI, Anaconda, Linux
                    Server Management
                </Text>
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
