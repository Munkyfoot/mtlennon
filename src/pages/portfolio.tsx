import Layout from "@/components/Layout"
import Academic from "@/components/portfolio/Academic"
import Professional from "@/components/portfolio/Professional"

export default function Home() {
    return (
        <Layout
            title="Portfolio"
            description="View Michael's portfolio of projects, spanning professional and academic work."
            mainGap={8}
        >
            <Professional />
            <Academic />
        </Layout>
    )
}
