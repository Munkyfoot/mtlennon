import About from "@/components/tabs/About"
import Education from "@/components/tabs/Education"
import Experience from "@/components/tabs/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/tabs/ProfileTopper"
import TechSkills from "@/components/tabs/TechSkills"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import SoftSkills from "@/components/tabs/SoftSkills"

export default function Home() {
    return (
        <Layout
            title="About"
            description="Michael Lennon is a software developer & designer. Learn more about his career, education, experience, and skills."
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
