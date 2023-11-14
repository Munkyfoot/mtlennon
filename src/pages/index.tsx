import Layout from "@/components/Layout"
import {
    Circle,
    Code,
    Flex,
    Heading,
    List,
    ListItem,
    Text,
    UnorderedList,
    VStack,
} from "@chakra-ui/react"
import NextImage from "next/image"
import portrait from "/public/mp.png"

export default function Home() {
    return (
        <Layout
            title="Michael Lennon"
            description="Michael Lennon is a software developer, designer, and musician."
        >
            <Flex
                direction={{
                    base: "column",
                    md: "row",
                }}
                align="center"
                justify="center"
                gap={8}
            >
                <Circle size={64} maxW="full" overflow="hidden" shadow="lg">
                    <NextImage
                        src={portrait}
                        alt="Michael Lennon"
                        placeholder="blur"
                    />
                </Circle>
                <VStack
                    spacing={2}
                    align={{
                        base: "center",
                        md: "flex-start",
                    }}
                    textAlign={{
                        base: "center",
                        md: "left",
                    }}
                >
                    <Heading as="h1" size="2xl">
                        Michael Lennon
                    </Heading>
                    <Text fontSize="2xl">
                        Software Developer · Designer · Musician
                    </Text>
                </VStack>
            </Flex>
        </Layout>
    )
}
