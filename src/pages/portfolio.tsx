import Layout from "@/components/Layout"
import Academic from "@/components/portfolio/Academic"
import Professional from "@/components/portfolio/Professional"
import { VStack } from "@chakra-ui/react"

export default function Home() {
    return (
        <Layout
            title="Portfolio"
            description="View Michael's portfolio of projects, spanning professional and academic work."
        >
            <VStack align="flex-start" spacing={8}>
                <Professional />
                <Academic />
            </VStack>
        </Layout>
    )
}
