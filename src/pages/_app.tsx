import { fontCss, theme } from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {fontCss}
            </style>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}
