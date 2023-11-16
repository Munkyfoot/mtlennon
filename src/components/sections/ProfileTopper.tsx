import { CopyIcon, EmailIcon, CheckCircleIcon } from "@chakra-ui/icons"
import {
    Button,
    Circle,
    Flex,
    HStack,
    Heading,
    Icon,
    IconButton,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react"
import NextImage from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import portrait from "/public/portrait.jpg"
import { useState } from "react"

const ProfileTopper = () => {
    const [emailIsCopied, setEmailIsCopied] = useState(false)

    const toast = useToast()

    return (
        <Flex
            direction={{
                base: "column",
                md: "row",
            }}
            align="center"
            justify={{
                base: "center",
                md: "flex-start",
            }}
            gap={[8, 12]}
        >
            <Circle size={64} maxW="full" overflow="hidden" shadow="lg">
                <NextImage
                    src={portrait}
                    alt="Michael Lennon"
                    placeholder="blur"
                />
            </Circle>
            <VStack
                w="full"
                spacing={4}
                align={{
                    base: "center",
                    md: "flex-start",
                }}
            >
                <VStack
                    align={{
                        base: "center",
                        md: "flex-start",
                    }}
                    textAlign={{
                        base: "center",
                        md: "left",
                    }}
                >
                    <Heading as="h1" size="2xl">
                        Michael Lennon
                    </Heading>
                    <Text fontSize="2xl">Software Developer & Designer</Text>
                </VStack>

                <VStack
                    w="full"
                    align={{
                        base: "center",
                        md: "flex-start",
                    }}
                    spacing={3}
                >
                    <HStack w="full">
                        <Button
                            as="a"
                            href="mailto:michael&#64;michaeltlennon&#46;com"
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<EmailIcon />}
                            variant="outline"
                            size={{
                                base: "md",
                                md: "sm",
                            }}
                            w={{
                                base: "full",
                                md: "auto",
                            }}
                        >
                            michael&#64;michaeltlennon&#46;com
                        </Button>
                        <IconButton
                            aria-label="Copy Email"
                            icon={
                                emailIsCopied ? (
                                    <CheckCircleIcon />
                                ) : (
                                    <CopyIcon />
                                )
                            }
                            onClick={() => {
                                navigator.clipboard
                                    .writeText("michael@michaeltlennon.com")
                                    .then(() => {
                                        setEmailIsCopied(true)
                                        setTimeout(() => {
                                            setEmailIsCopied(false)
                                        }, 3000)

                                        toast({
                                            title: "Email Copied",
                                            description:
                                                "Email address copied to clipboard.",
                                            status: "success",
                                            duration: 3000,
                                            isClosable: true,
                                        })
                                    })
                            }}
                            colorScheme={emailIsCopied ? "green" : "gray"}
                            isDisabled={emailIsCopied}
                            size={{
                                base: "md",
                                md: "sm",
                            }}
                            variant="ghost"
                        />
                    </HStack>
                    <Flex
                        w="full"
                        direction={{
                            base: "column",
                            md: "row",
                        }}
                        align={{
                            base: "center",
                            md: "flex-start",
                        }}
                        gap={3}
                    >
                        <Button
                            as="a"
                            href="https://github.com/Munkyfoot"
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<Icon as={FaGithub} />}
                            colorScheme="purple"
                            size={{
                                base: "md",
                                md: "sm",
                            }}
                            w={{
                                base: "full",
                                md: "auto",
                            }}
                        >
                            GitHub Profile
                        </Button>
                        <Button
                            as="a"
                            href="https://www.linkedin.com/in/munkyfoot/"
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<Icon as={FaLinkedin} />}
                            colorScheme="blue"
                            size={{
                                base: "md",
                                md: "sm",
                            }}
                            w={{
                                base: "full",
                                md: "auto",
                            }}
                        >
                            LinkedIn Profile
                        </Button>
                    </Flex>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default ProfileTopper
