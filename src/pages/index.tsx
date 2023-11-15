import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Layout from "@/components/Layout"
import ProfileTopper from "@/components/ProfileTopper"

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
        </Layout>
    )
}
