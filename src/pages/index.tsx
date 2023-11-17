import About from "@/components/tabs/About"
import Education from "@/components/tabs/Education"
import Experience from "@/components/tabs/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/tabs/ProfileTopper"
import TechSkills from "@/components/tabs/TechSkills"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react"
import SoftSkills from "@/components/tabs/SoftSkills"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()
    const [tabIndex, setTabIndex] = useState(0)

    const tabNames = useMemo(
        () => [
            "Career",
            "Education",
            "Experience",
            "Technical Skills",
            "Soft Skills",
        ],
        []
    )

    useEffect(() => {
        const hash = router.asPath.split("#")[1]
        if (hash) {
            const index = tabNames.findIndex(
                (tabName) => tabName.toLowerCase().replace(" ", "-") === hash
            )
            if (index !== -1) {
                setTabIndex(index)
            }
        }
    }, [router.asPath, tabNames])

    const handleChangeTab = (index: number) => {
        setTabIndex(index)
        router.push(`#${tabNames[index].toLowerCase().replace(" ", "-")}`)
    }

    return (
        <Layout
            title="About"
            description="Michael Lennon is a software developer & designer. Learn more about his career, education, experience, and skills."
        >
            <ProfileTopper />
            <Tabs
                index={tabIndex}
                onChange={handleChangeTab}
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
