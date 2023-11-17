import About from "@/components/tabs/About"
import Education from "@/components/tabs/Education"
import Experience from "@/components/tabs/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/tabs/ProfileTopper"
import TechSkills from "@/components/tabs/TechSkills"
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    VStack,
} from "@chakra-ui/react"
import SoftSkills from "@/components/tabs/SoftSkills"
import Professional from "@/components/portfolio/Professional"
import Academic from "@/components/portfolio/Academic"

export default function Home() {
    return (
        <Layout
            title="Portfolio"
            description="View Michael's portfolio of projects, spanning professional, personal, and academic work."
        >
            <VStack align="flex-start" spacing={8}>
                <Professional />
                <Academic />
            </VStack>
        </Layout>
    )
}
