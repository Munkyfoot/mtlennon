import About from "@/components/sections/About"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/sections/ProfileTopper"
import Skills from "@/components/sections/Skills"

export default function Home() {
    return (
        <Layout
            title="Michael Lennon"
            description="Michael Lennon is a software developer & designer."
        >
            <ProfileTopper />
            <About />
            <Education />
            <Experience />
            <Skills />
        </Layout>
    )
}
