import Layout from "@/components/Layout"
import ProfileTopper from "@/components/ProfileTopper"

export default function Home() {
    return (
        <Layout
            title="Michael Lennon"
            description="Michael Lennon is a software developer, designer, and musician."
        >
            <ProfileTopper />
        </Layout>
    )
}
