import About from "@/components/sections/About"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/sections/ProfileTopper"
import TechSkills from "@/components/sections/TechSkills"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import SoftSkills from "@/components/sections/SoftSkills"

export default function Home() {
    return (
        <Layout
            title="Michael Lennon"
            description="Michael Lennon is a software developer & designer."
        >
            <ProfileTopper />
            <Tabs
                isFitted
                isLazy
                variant={{
                    base: "soft-rounded",
                    md: "line",
                }}
            >
                <TabList
                    gap={{
                        base: 2,
                        md: 0,
                    }}
                    flexWrap="wrap"
                    borderBottomWidth={2}
                    borderTopWidth={{
                        base: 2,
                        md: 0,
                    }}
                    paddingBottom={{
                        base: 2,
                        md: 0,
                    }}
                    paddingTop={{
                        base: 2,
                        md: 0,
                    }}
                >
                    <Tab>Career</Tab>
                    <Tab>Education</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Technical Skills</Tab>
                    <Tab>Soft Skills</Tab>
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
                    <TabPanel>
                        <SoftSkills />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
