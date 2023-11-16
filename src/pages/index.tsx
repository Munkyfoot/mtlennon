import About from "@/components/sections/About"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/sections/ProfileTopper"
import TechSkills from "@/components/sections/TechSkills"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Home() {
    return (
        <Layout
            title="Michael Lennon"
            description="Michael Lennon is a software developer & designer."
        >
            <ProfileTopper />
            <Tabs>
                <TabList>
                    <Tab>Career</Tab>
                    <Tab>Education</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Technical Skills</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Experience />
                    </TabPanel>
                    <TabPanel>
                        <TechSkills />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
